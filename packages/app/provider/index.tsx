import { AuthProvider } from 'app/features/auth/context'
import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <AuthProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </AuthProvider>
    </SafeArea>
  )
}
