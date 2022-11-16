import { H1, P, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { signInAnonymously } from './firebase'

import { Button } from 'app/design/form-controls'
import { useAuth } from './context'

export function SignupScreen() {
  const auth = useAuth();
  if (auth !== null) {
    return (
      <View className="flex-1 items-center justify-center">
        <H1>Already In!</H1>
        <P>You already signed in</P>
        <TextLink href={`/user/${auth.uid}`}>
          Go to profile
        </TextLink>
      </View>
    )
  }

  return (
    <View className="flex-1 justify-center bg-green-300 items-center">
      <H1>Sign In</H1>
      <P>Click the button to sign in</P>
      <Button title="Sign In" onPress={signInAnonymously}/>
    </View>
  )
}
