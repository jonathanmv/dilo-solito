import { Button as NativeButton, TextInput as NativeTextInput } from 'react-native'
import { styled } from 'nativewind'

export const TextInput = styled(NativeTextInput, "border border-slate-100 bg-white p-2")
export const Button = styled(NativeButton, "bg-blue-300 rounded p-4 text-bold text-white")