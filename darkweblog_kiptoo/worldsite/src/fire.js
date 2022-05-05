// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG8dYbnfSN2jjwz20xJ1ISLVYtrHFKy3M",
  authDomain: "darknetlogs.firebaseapp.com",
  projectId: "darknetlogs",
  storageBucket: "darknetlogs.appspot.com",
  messagingSenderId: "234523556474",
  appId: "1:234523556474:web:976c5c5254f111ff98d9c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC2jRoCX4qwkRUGtkM7eNkVy9BSjq7N3rQ",
//   authDomain: "dark-weblogs.firebaseapp.com",
//   projectId: "dark-weblogs",
//   storageBucket: "dark-weblogs.appspot.com",
//   messagingSenderId: "367277481936",
//   appId: "1:367277481936:web:f80a0f462b564cde9fe3d5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
