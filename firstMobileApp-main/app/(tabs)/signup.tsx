import React from "react";
import {
    Text,
    StyleSheet,
    Pressable,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import {Controller, useForm} from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {Image} from "expo-image";
import { signup } from "@/services/AuthService"

type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

export default function SignupScreen() {
    const { control, handleSubmit, watch } = useForm<FormData>({ mode: "all" });
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [loading, setLoading] = React.useState(false);
    const password = watch('password');

    const onSubmit = async (data: FormData) => {
        try {
            setErrorMessage("");
            
            // التحقق من تطابق كلمات المرور
            if (data.password !== data.confirmPassword) {
                setErrorMessage("كلمات المرور غير متطابقة");
                return;
            }

            setLoading(true);
            const user = await signup({
                email: data.email,
                password: data.password,
            });
            console.log(user);
            router.replace('/home');
        } catch (error: any) {
            const message = error.message || 'حدث خطأ ما';
            setErrorMessage(message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        router.back();
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardView}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
            <SafeAreaView style={styles.container}>
            <Text style={styles.title}>إنشاء حساب</Text>
            <View style={styles.imageContainer}>
                <Image source={require('@/assets/images/logo.naqel.png')} style={styles.reactLogo} />
            </View>
            
            {errorMessage && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
            )}

            <Controller
                control={control}
                name={"email"}
                rules={{
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "البريد الإلكتروني غير صحيح",
                    },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>البريد الإلكتروني</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="example@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {error?.message && (
                            <Text style={styles.fieldError}>{error.message}</Text>
                        )}
                    </View>
                )}
            />

            <Controller
                control={control}
                name={"password"}
                rules={{
                    required: "كلمة المرور مطلوبة",
                    minLength: {
                        value: 6,
                        message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
                    },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>كلمة المرور</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="كلمة المرور"
                            secureTextEntry
                            autoCapitalize="none"
                        />
                        {error?.message && (
                            <Text style={styles.fieldError}>{error.message}</Text>
                        )}
                    </View>
                )}
            />

            <Controller
                control={control}
                name={"confirmPassword"}
                rules={{
                    required: "تأكيد كلمة المرور مطلوب",
                    validate: (value) => value === password || "كلمات المرور غير متطابقة",
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>تأكيد كلمة المرور</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="تأكيد كلمة المرور"
                            secureTextEntry
                            autoCapitalize="none"
                        />
                        {error?.message && (
                            <Text style={styles.fieldError}>{error.message}</Text>
                        )}
                    </View>
                )}
            />

            <Pressable
                onPress={handleSubmit(onSubmit)}
                disabled={loading}
                style={({ pressed }) => [
                    styles.button,
                    loading && styles.buttonDisabled,
                    pressed && { opacity: 0.7 },
                ]}
            >
                <Text style={styles.buttonText}>{loading ? 'جاري التسجيل...' : 'إنشاء حساب'}</Text>
            </Pressable>

            <Pressable onPress={handleBackToLogin} style={styles.loginLink}>
                <Text style={styles.loginLinkText}>لديك حساب؟ <Text style={styles.loginLinkBold}>دخول</Text></Text>
            </Pressable>
        </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#f9fafb",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 32,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#2563eb",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 24,
    },
    buttonDisabled: {
        backgroundColor: "#cbd5e0",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
    },
    reactLogo: {
        height: 140,
        width: 220,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        fontWeight: "500",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        marginBottom: 12,
    },
    errorInput: {
        borderColor: "#ff4d4f",
    },
    fieldError: {
        color: "#ff4d4f",
        fontSize: 12,
        marginBottom: 8,
        marginTop: -8,
    },
    errorContainer: {
        backgroundColor: "#fee",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: "#dc2626",
    },
    errorText: {
        color: "#991b1b",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    loginLink: {
        marginTop: 16,
        paddingVertical: 12,
    },
    loginLinkText: {
        textAlign: "center",
        fontSize: 14,
        color: "#6b7280",
    },
    loginLinkBold: {
        color: "#2563eb",
        fontWeight: "600",
    },
});
