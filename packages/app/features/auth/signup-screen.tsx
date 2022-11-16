import { H1, P, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { signInAnonymously, sendSignInLinkToEmail } from './firebase'

import { Button, TextInput } from 'app/design/form-controls'
import { useAuth } from './context'
import { Row } from 'app/design/layout'
import { useState } from 'react'

export function SignupScreen() {
  const auth = useAuth();
  const [email, setEmail] = useState('')


  const emailSignUp = () => {
    if (email.length) {
      sendSignInLinkToEmail(email)
        .then(() => console.log('SENT'))
        .catch(e => console.error('FAILURE', e));
    }
  }

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
      <Button title="Sign In Anonymously" onPress={signInAnonymously}/>
      <Row>
        <TextInput value={email} onChangeText={setEmail} onSubmitEditing={emailSignUp} />
        <Button title="Sign In with email link" onPress={emailSignUp}/>
      </Row>
    </View>
  )
}
