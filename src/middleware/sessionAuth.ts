// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Response, Request, NextFunction, Handler } from "express";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Sajtdo84HdNrwgm-9b_Y-futFyN-N6g",
  authDomain: "typescript-2ef4f.firebaseapp.com",
  projectId: "typescript-2ef4f",
  storageBucket: "typescript-2ef4f.appspot.com",
  messagingSenderId: "975527145939",
  appId: "1:975527145939:web:ba7c9d20ca8c7774577f26",
  measurementId: "G-W03CWPBS5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export async function signUp(email: string, password: string): Promise<boolean> {
	if (auth === undefined) {
		console.log('Firebase Auth failed to initialize');
		return false;
	}
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		sendEmailVerification(user);
		return true;
	} catch (error) {
		console.error('Authentication error:', error);
	}
	return false;
}

export async function signIn(email: string, password: string): Promise<boolean> {
	if (auth === undefined) {
		console.log('Firebase Auth failed to initialize');
		return false;
	}
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return true;
	} catch (error) {
		console.error('Authentication error:', error);
	}
	return false;
}

export function ensureAuthenticated(): Handler {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const user = auth.currentUser;
		if (user) {
			next();
		}
	};
}
