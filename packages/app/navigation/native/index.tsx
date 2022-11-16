import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { ChatScreen } from '../../features/chat/chat-screen'
import { CommunityScreen } from 'app/features/community/community-screen'
import { SignupScreen } from 'app/features/auth/signup-screen'
import { ChatRoomScreen } from 'app/features/chat/chat-room-screen'

const Stack = createNativeStackNavigator<{
  home: undefined,
  'user-detail': {
    id: string
  },
  chat: {
    id: string
  },
  community: {
    id: string
  },
  signup: undefined,
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator initialRouteName='signup'>      
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({route}) => {
          console.log(route);
         return {title: 'Home'}
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={({route}) => {
          console.log(route);
         return {title: 'Signup'}
        }}
      />
       <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={({route}) => {
          console.log(route);
         return {title: 'Chat ' + route?.params?.id}
        }}
      />
      <Stack.Screen
        name="community"
        component={CommunityScreen}
        options={({route}) => {
          console.log(route);
         return {title: 'Community'}
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={({route}) => {
          console.log(route);
         return {title: 'User'}
        }}
      />
    </Stack.Navigator>
  )
}
