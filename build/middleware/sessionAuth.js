"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = exports.signUp = exports.myResponse = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
class myResponse {
    constructor(message, data, status = 200) {
        this.message = message !== null && message !== void 0 ? message : "ok";
        this.data = data !== null && data !== void 0 ? data : null;
        this.status = status;
    }
}
exports.myResponse = myResponse;
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const auth = (0, auth_1.getAuth)(app);
function signUp(email, password) {
    if (auth === undefined) {
        console.log('Firebase Auth failed to initialize');
        return false;
    }
    try {
        (0, auth_1.createUserWithEmailAndPassword)(auth, email, password);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return true;
}
exports.signUp = signUp;
function ensureAuthenticated() {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        //TODO check authentication
        next();
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
