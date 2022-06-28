import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore"
import { doc, setDoc, getDoc} from "firebase/firestore";
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDc-uBIjO56cELxjVV7AQTI_75ldQZtGtU",
    authDomain: "gamein-8b9b9.firebaseapp.com",
    projectId: "gamein-8b9b9",
    storageBucket: "gamein-8b9b9.appspot.com",
    messagingSenderId: "247685321977",
    appId: "1:247685321977:web:0615f8e3da06503915fe28"
};
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();


export const AddAccount = async (uid, email, photoUrl, username) =>{
   await setDoc(doc(db, "Registered Accounts", uid), {
        "email": email,
        "photoUrl": photoUrl,
        "username": username
   })
}

export const AddMessage = async (uid, msg, time, user) =>{
    await setDoc(doc(db, uid, `${time}`), {
        "message": msg,
        "time": time,
        "username": user
    })
}

export const UploadImage = async (image, uid) =>{
    const imageRef = ref(storage, `${uid}/${image.name}`);
    const imgRes = await uploadBytes(imageRef, image);
    const imgUrl = await getDownloadURL(imageRef);
    return imgUrl;
}

export const GetUsername = async (uid) =>{
    if (uid){
        const docRef = doc(db, "Registered Accounts", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().username;
        } else {
            throw new Error("User don't EXISTS!");
        }
    }
    else{
        throw new Error("UID don't EXISTS!");
    }
}

export const GetPhotoUrl = async (uid) =>{
    if (uid){
        const docRef = doc(db, "Registered Accounts", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().photoUrl;
        } else {
            throw new Error("User don't EXISTS!");
        }
    }
    else{
        throw new Error("UID don't EXISTS!");
    }
}

export const GetCollections = async () =>{
    const rooms = [];
    const collections = await firebase.firestore().collection("Registered Accounts").get();
    collections.docs.map(doc => rooms.push(doc.id));
    return rooms;
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider;
export const db = getFirestore(app);

