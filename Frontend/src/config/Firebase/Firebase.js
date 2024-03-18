import React from 'react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc,getFirestore,addDoc,collection,getDocs,getDoc,orderBy, query,where } from "firebase/firestore"; 
import { confirmPasswordReset,signInWithEmailAndPassword, onAuthStateChanged ,signInWithPopup, GoogleAuthProvider ,getAuth,createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
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

export {auth,db}

export const userlogin=async (userinfo)=>{
  const {email,password}=userinfo

  const {user:{uid:userid,email:useremail}}= await signInWithEmailAndPassword(auth, email, password)

}
 

export const forgotpassword=(email,successmsg,errormsg)=>{
  onAuthStateChanged(auth,async user=>{
  if(email===user.email)
  sendPasswordResetEmail(auth, email)


  .then(() => {
    console.log('Password reset email sent!')
 successmsg()
    // ..
  }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    errormsg()
    // ..
  });
  else{
    console.log('email doesnot exsist')
    errormsg()
  }
})
}

export const userprofiledata=async()=>{
  let authemail=''
  let userdetails=[]
  onAuthStateChanged(auth,async user=>{
    authemail=user?.email
    console.log(authemail)
  const userref=collection(db, "users");
    const curuser = auth.currentUser;
  let curemail=(curuser?.email)
  console.log(curemail)
  console.log(authemail)
      const q = query(userref, where("email", "==",  authemail));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
        console.log(doc.data())
          userdetails.push( doc.data())
          
          
        })
        ;
  
       
  })
 
  // console.log(authemail)
  

console.log(userdetails)
 return userdetails
}
// alert('chalagaya')

export const googleregister=async()=>{
 

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
export const addProductManually=async (product,id)=>{

  console.log(product)
 await setDoc(doc(db,'ads',id?.toString()),product)

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
export const categoryProducts=async(category)=>{
  const products=[]
  const q =  query(collection(db, "ads"),where('category','==',category));
  
const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
   
    products.push({id:doc.id,...doc.data()})
    
  });
  return products

}