import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("navigation provider");
  return (
    <NavigationContainer
      linking={useMemo(
        () => {
          console.log('memoized navigation container')
          return ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'signup',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              'chat': 'chat/:id',
              'signup': 'auth/signup',
              'finish-signup': 'auth/finish-signup',
              'community': 'community/:id',
            },
          },
        })},
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
