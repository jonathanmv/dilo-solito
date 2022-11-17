import { H1, P, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'

import { useEffect, useState } from 'react'
import { useAuth } from './context'
import { signInWithEmailLink } from './firebase'
import { getSignupLinkEmail, deleteSignupLinkEmail } from './storage'

export function FinishSignupScreen() {
  const auth = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const finishSignUp = async () => {
      const storedEmail = await getSignupLinkEmail();
      if (!storedEmail) {
        setError("No email found")
        return;
      }
      
      try {
        const emailLink = window.location.href;
        await signInWithEmailLink(storedEmail, emailLink);
        await deleteSignupLinkEmail();
      } catch (error) {
        setError(error.message || error);
      }
    }
    if (!auth) {
      finishSignUp();
    }
  }, [])

  if (auth !== null) {
    return (
      <View className="flex-1 items-center bg-green-300 justify-center">
        <H1>Already In!</H1>
        <P>You already signed in</P>
        <TextLink href={`/user/${auth.uid}`}>
          Go to profile
        </TextLink>
      </View>
    )
  }

  if (!error) {
    return (
      <View className="flex-1 justify-center bg-blue-300 items-center">
        <H1>Finishing signup</H1>
      </View>
    )
  }

  return (
    <View className="flex-1 justify-center bg-red-300 items-center">
      <H1>Something went wrong</H1>
      <P>{error}</P>
      <TextLink href={"/auth/signup"}>Go to signup</TextLink>
    </View> 
  )
}
