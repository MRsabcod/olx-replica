import React from 'react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc,getFirestore,addDoc,collection,getDocs,getDoc,orderBy, query } from "firebase/firestore"; 
import { confirmPasswordReset,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider ,getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyCb6kt8bAhuzVf1TD92eLUsqNRRnRSfkPU",
  authDomain: "olx-replica-76e6b.firebaseapp.com",
  projectId: "olx-replica-76e6b",
  storageBucket: "olx-replica-76e6b.appspot.com",
  messagingSenderId: "145932294178",
  appId: "1:145932294178:web:4a686dee8998091b26127b",
  measurementId: "G-8D4XK18B7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
console.log(auth)

export {auth}

export const userlogin=async (userinfo)=>{
  const {email,password}=userinfo

  const {user:{uid:userid}}= await signInWithEmailAndPassword(auth, email, password)
console.log(userid)
toast("LOGIN SUCESSFULLY!");

// alert('chalagaya')
}
export const googleregister=async(e)=>{
  e.preventDefault()

const cred=await signInWithPopup(auth, provider)
console.log(cred)
}
export const register=async (userinfo)=>{
  
  const {email,password,fullname,age}=userinfo
  const {user:{uid:userid}}=await createUserWithEmailAndPassword(auth, email, password)
  console.log(userid)
  const userref = doc(db, 'users', userid);
  setDoc(userref,{email,fullname,age})
  alert('hogaya')

}
export const Addproducts=()=>{
  try {
    fetch('https://dummyjson.com/products/')

      .then(response => response.json())

      .then(async(data) => {
        console.log(data.products)
       
        data?.products?.map((elem,index)=>{
          console.log(index,elem)
          const adref = doc(db, 'ads', (index+1).toString());
          
  setDoc(adref,elem)
        })
          
      })
        
     
      }
      catch(e){
        console.log(e)
      }
}
export const Getproducts=async()=>{
  const products=[]
  const q =  query(collection(db, "ads"),orderBy("id"));
  
const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    products.push({id:doc.id,...doc.data()})
    
  });
  return products
}
export async function getAporduct(aid) {
  const docRef = doc(db, "ads", aid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
  
    console.log("No such document!");
  }
 return docSnap.data()
}