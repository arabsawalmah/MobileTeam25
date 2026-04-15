import React from "react";
import {
    Text,
    StyleSheet,
    Pressable,
    View,
    TextInput,
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
    const handleOnPress = () => {
        router.back();
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <Image source={require('@/assets/images/react-logo.png')} style={styles.reactLogo} />
            
            {errorMessage && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
            )}
            <Controller
                control={control}
                name={"email"}
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                    },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
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
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Password"
                            keyboardType="visible-password"
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
                <Text style={styles.buttonText}>{loading ? 'جاري الدخول...' : 'دخول'}</Text>
            </Pressable>
            <Pressable onPress={handleOnPress} style={styles.backButton}>
                <Text style={styles.backButtonText}>رجوع</Text>
            </Pressable>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        height: 178,
        width: 290,
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
    backButton: {
        marginTop: 12,
        padding: 10,
    },
    backButtonText: {
        color: "#2563eb",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
    },
});
