// from https://github.com/nandorojo/nextjs-conf-22-example/blob/setup/packages/app/features/auth/firebase/init.web.ts
import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  sendSignInLinkToEmail as sendSignInLinkToEmailFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
  getAuth,
} from 'firebase/auth'
import { Firebase } from './types'

let auth: ReturnType<typeof initializeAuth>

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDC8ajeqJR30bdcguHXOPxSRlJo2sfY3Mg",
    authDomain: "dilo-dev.firebaseapp.com",
    databaseURL: "https://dilo-dev.firebaseio.com",
    projectId: "dilo-dev",
    storageBucket: "dilo-dev.appspot.com",
    messagingSenderId: "741989785052",
    appId: "1:741989785052:web:47e578825398d8eeb18319",
    measurementId: "G-FK2MF3C4Y2",
  })

  auth = initializeAuth(firebaseApp, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: browserLocalPersistence,
  })
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser)

const signOut: Firebase['signOut'] = () => auth.signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user
}

const sendSignInLinkToEmail: Firebase['sendSignInLinkToEmail'] = async (email: string) => {
  const actionCodeSettings = {
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/auth/finishSignUp',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'chat.dilo',
    },
    android: {
      packageName: 'chat.dilo',
      installApp: true,
      minimumVersion: '12',
    },
    dynamicLinkDomain: 'dilodev.page.link',
  }
  return (await sendSignInLinkToEmailFirebase(getAuth(), email, actionCodeSettings))
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser

// !!! Make sure the exports between init.web.ts and init.native.ts MATCH !!!
export {
  getIsSignedIn,
  signInAnonymously,
  sendSignInLinkToEmail,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
}