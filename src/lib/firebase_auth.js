import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

export const getCurrentUser = async () => {
    const result = await FirebaseAuthentication.getCurrentUser();
    return result.user;
};

export const is_user_logged = () => {
    return localStorage.getItem("user");
}