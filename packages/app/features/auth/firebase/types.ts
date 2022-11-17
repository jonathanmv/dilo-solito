// from https://github.com/nandorojo/nextjs-conf-22-example/blob/setup/packages/app/features/auth/firebase/types.ts
import type * as firebase from 'firebase/auth'

type User = Pick<firebase.User, 'uid'>

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<User>
  signInWithEmailLink: (email: string, emailLink: string) => Promise<User>
  sendSignInLinkToEmail: (email: string) => Promise<void>
  signOut: () => Promise<void>
  onAuthStateChanged: (
    callback: (user: { uid: string } | null) => void
  ) => () => void
  getCurrentUser: () => User | null
}