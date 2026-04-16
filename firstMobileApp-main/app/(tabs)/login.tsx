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
import { login } from "@/services/AuthService"
type FormData = {
    email: string;
    password: string;
};


export default function LoginScreen() {
    const { control, handleSubmit } = useForm<FormData>({ mode: "all" });
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            setErrorMessage("");
            setLoading(true);
            const user = await login(data);
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


    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardView}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
            <SafeAreaView style={styles.container}>
            <Text style={styles.title}>صفحة الدخول</Text>
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
                    </View>
                )}
            ></Controller>
            <Controller
                control={control}
                name={"password"}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>كلمة المرور</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="أدخل كلمة المرور"
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                        {error?.message &&
                            <Text style={{ color: "red" }}>{error.message}</Text>
                        }
                    </View>
                )}
            ></Controller>
            <Pressable 
                onPress={handleSubmit(onSubmit)}
                disabled={loading}
                style={({ pressed }) => [
                    styles.button,
                    loading && styles.buttonDisabled,
                    pressed && { opacity: 0.7 },
                ]}
            >
                <Text style={styles.buttonText}>{loading ? 'جاري الدخول...' : 'تسجيل الدخول'}</Text>
            </Pressable>

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>أو</Text>
                <View style={styles.dividerLine} />
            </View>

            <Pressable 
                onPress={() => router.push('/(tabs)/signup')}
                style={({ pressed }) => [
                    styles.signupButton,
                    pressed && { opacity: 0.7 },
                ]}
            >
                <Text style={styles.signupButtonText}>إنشاء حساب جديد</Text>
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
        marginTop: 16,
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
    errorText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    errorContainer: {
        backgroundColor: "#fee",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: "#dc2626",
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    dividerText: {
        marginHorizontal: 12,
        fontSize: 14,
        color: '#9ca3af',
    },
    signupButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#2563eb',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#2563eb',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});
