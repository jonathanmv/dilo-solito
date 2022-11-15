import { H1, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { GiftedChat } from 'react-native-gifted-chat'

import { createParam } from 'solito'
import { useCallback } from 'react'
import { IMessage, useRoomMessages } from 'app/hooks/useRoomMessages'
import { useRoom } from 'app/hooks/useRoom'
import { useUser } from 'app/hooks/useUser'

const { useParam } = createParam<{ id: string }>()

export function ChatScreen() {
  const [id] = useParam('id')
  const room = useRoom(id)
  const [messages, setMessages] = useRoomMessages(id)
  const { user } = useUser()

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View className="flex-1 justify-between bg-green-300 items-stretch">
      <Row className="bg-red-300">
        <TextLink href={`/community/${room?.communityId}`}>back</TextLink>
        <H1>Chat {room?.title}</H1>
      </Row>
      <View className="flex-1 bg-yellow-300">
        <GiftedChat
          wrapInSafeArea={false}
          messages={messages}
          onSend={messages => onSend(messages)}
          user={user}
        />
      </View>
    </View>
  )
}
