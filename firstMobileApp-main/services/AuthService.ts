import ApiBase from "@/services/ApiBase";
import {LOGIN_API} from "@/constants/api";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";
import StorageService from "@/services/StorageService";
import {router} from "expo-router";

const auth = getAuth(app);


export const login = async (payload: any) => {
    try {
        const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);
        const user = response.user;
        const token = await user.getIdToken();

        await StorageService.saveUser(user);
        await StorageService.saveToken(token);
        return user;
    } catch (error: any) {
        // معالجة أخطاء Firebase محددة
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/too-many-requests') {
            throw new Error('تم قفل الحساب مؤقتاً. حاول مرة أخرى بعد 15 دقيقة');
        } else if (errorCode === 'auth/user-not-found') {
            throw new Error('البريد الإلكتروني غير مسجل. يرجى التسجيل أولاً');
        } else if (errorCode === 'auth/wrong-password') {
            throw new Error('كلمة المرور غير صحيحة');
        } else if (errorCode === 'auth/invalid-credential') {
            throw new Error('البريد أو كلمة المرور غير صحيحة');
        } else if (errorCode === 'auth/invalid-email') {
            throw new Error('البريد الإلكتروني غير صحيح');
        } else if (errorCode === 'auth/user-disabled') {
            throw new Error('تم تعطيل هذا الحساب');
        } else {
            throw new Error(errorMessage || 'فشل تسجيل الدخول');
        }
    }
}

export const signup = async (payload: any) => {
    const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
    const user = response.user;
    const token = await user.getIdToken();
    await StorageService.saveUser(user);
    await StorageService.saveToken(token);
    return user;
}

export const logout = async () => {
    return await ApiBase.get('/api/v1/logout');
}

