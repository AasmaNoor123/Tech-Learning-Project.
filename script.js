// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_CzFeK7EpbHHcmDlGGzdGnCyvXDvEWgI",
  authDomain: "signup-bcfda.firebaseapp.com",
  projectId: "signup-bcfda",
  storageBucket: "signup-bcfda.firebasestorage.app",
  messagingSenderId: "800415565042",
  appId: "1:800415565042:web:f58f08730e8a1c5cb07c6b",
  measurementId: "G-GG4K2HJXS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// Sign Up
document.getElementById("signup-btn")?.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-Up successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login
document.getElementById("login-btn")?.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Google Sign Up
document.getElementById("google-signup-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Google Login
document.getElementById("google-login-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Reset Password
document.getElementById("reset-password-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    let email = prompt("Enter your email!");

    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent, check your inbox');
            })
            .catch((error) => {
                alert(error.message);
            });
    } else {
        alert('Please enter a valid email');
    }
});

// Auth State Change
onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes("welcome.html")) {
        document.getElementById("user-email").textContent = user.email;
    } else if (!user && window.location.pathname.includes("welcome.html")) {
        window.location.href = "form.html";
    }
});

// Logout 
document.getElementById("logout-btn")?.addEventListener("click", () => {   
    signOut(auth)     
    .then(() => {       
        alert("Logged Out Successfully!");       
        window.location.href = "index.html"; // Redirect to the login page or home page     
    })     
    .catch((error) => {       
        alert(error.message); // Show error message if sign out fails
    }); 
}); 