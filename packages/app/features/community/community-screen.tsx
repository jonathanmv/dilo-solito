import { H1, H2, TextLink } from 'app/design/typography'
import { FlatList, Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

const CHAT_ROOMS: {id: string, title: string}[] = [
    { id: 'urbanapes.hh.stpauli.main', title: 'Welcome'},
    { id: 'urbanapes.hh.stpauli.beginners', title: 'Beginners'}, 
    { id: 'urbanapes.hh.stpauli.events', title: 'Events'},
]

export function CommunityScreen() {
  const [id] = useParam('id')

  const renderChatRoomItem = ({ item }) => {
    return (
        <Row>
            <TextLink href={`/chat/${item.id}`}>{item.title}</TextLink>
        </Row>
    )
  }
  return (
    <View className="flex-1 justify-between bg-green-300 items-stretch">
      <Row className="bg-red-300">
        <H1>Community {id}</H1>
      </Row>
      <View className="flex-1 bg-blue-300">
        <H2>Chat rooms {id}</H2>
        <FlatList
            data={CHAT_ROOMS}
            renderItem={renderChatRoomItem}
            keyExtractor={(item: {id: string}) => item.id}
        />
      </View>

    </View>
  )
}
