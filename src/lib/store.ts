import { goto } from "$app/navigation";
import {auth} from "./firebase";
export async function logOut(){
    await auth.signOut();
    localStorage.setItem("user", undefined)
    localStorage.setItem("username", undefined)
    localStorage.setItem("email", undefined)
    localStorage.setItem("photoUrl", undefined)
    localStorage.setItem("uid", undefined)
    await goto("/auth/signin")
}



