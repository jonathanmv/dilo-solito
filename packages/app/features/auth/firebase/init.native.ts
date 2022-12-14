import auth from '@react-native-firebase/auth'
import { Firebase } from './types'

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth().currentUser)

const signOut: Firebase['signOut'] = () => auth().signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await auth().signInAnonymously()).user
}

const sendSignInLinkToEmail: Firebase['sendSignInLinkToEmail'] = async (email: string) => {
  const actionCodeSettings = {
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/auth/finish-signup',
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
  return (await auth().sendSignInLinkToEmail(email, actionCodeSettings))
}

const signInWithEmailLink: Firebase['signInWithEmailLink'] = async (email: string, emailLink: string) => {
  return (await auth().signInWithEmailLink(email, emailLink)).user;
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return auth().onAuthStateChanged(callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth().currentUser

// !!! Make sure the exports between init.web.ts and init.native.ts MATCH !!!
export {
  getIsSignedIn,
  signOut,
  signInAnonymously,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  onAuthStateChanged,
  getCurrentUser,
}