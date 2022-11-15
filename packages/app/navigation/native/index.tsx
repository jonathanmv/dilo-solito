import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { ChatScreen } from '../../features/chat/chat-screen'
import { CommunityScreen } from 'app/features/community/community-screen'
import { SignupScreen } from 'app/features/auth/signup-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  },
  chat: {
    id: string
  },
  community: {
    id: string
  },
  signup: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: 'Chat',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: 'Signup',
        }}
      /><Stack.Screen
        name="community"
        component={CommunityScreen}
        options={{
          title: 'Community',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
