import { H1, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { GiftedChat } from 'react-native-gifted-chat'

import { createParam } from 'solito'
import { useCallback, useEffect, useState } from 'react'
import { useCommunity } from 'app/hooks/useCommunity'

const { useParam } = createParam<{ id: string }>()
export interface IMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: {_id: string | number, name?: string, avatar?: string }
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}
interface Reply {
  title: string
  value: string
  messageId?: any
}

interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

export function ChatScreen() {
  const [id] = useParam('id')
  const { getRoomById } = useCommunity()
  const room = getRoomById(id)

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const messages: IMessage[] = []
    for (let i = 0; i < 20; i++) {
      const message:IMessage = {
        _id: i,
        text: 'This is message ' + ( i + 1),
        createdAt: new Date(Date.now()-(i*3600000)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }
      messages.push(message);
    }
    setMessages(messages)
  }, [])

  const onSend = useCallback((messages:IMessage[] = []) => {
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
          user={{
            _id: 1
          }}
        />
      </View>
    </View>
  )
}
