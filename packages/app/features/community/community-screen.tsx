import { H1, H2, P, TextLink } from 'app/design/typography'
import { FlatList, Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { createParam } from 'solito'
import { ImageBackground } from 'react-native'

const { useParam } = createParam<{ id: string }>()

const CHAT_ROOMS: {id: string, title: string}[] = [
    { id: 'urbanapes.hh.stpauli.main', title: 'Welcome'},
    { id: 'urbanapes.hh.stpauli.beginners', title: 'Beginners'}, 
    { id: 'urbanapes.hh.stpauli.events', title: 'Events'},
]

type Community = {
    id: string,
    name: string,
    description: string,
    coverImage: string,
}
const COMMUNITIES: Community[] = [
    {
        id: 'urbanapes',
        name: 'Urban Apes',
        description: "Bouldern und danach feiern gehen - Wer nach dem Bouldern noch Kraft und Lust hat, kann den Tag auch ein paar Etagen höher im Uebel & Gefährlich beim Tanzen ausklingen lassen oder mit einem Bier durch die nahe Schanze bummeln",
        coverImage: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_2_800x533.jpg'
    },
    {
        id: 'rehbar',
        name: 'REH BAR',
        description: 'Mo - So 10 Uhr bis Open End - Caipirinha Happy Hour bis 21 Uhr - #dukommstdochrehrum - Trinken hilft immer.',
        coverImage: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_6_800x533.jpg'
    }
]

export function CommunityScreen() {
  const [id] = useParam('id')
  const community = COMMUNITIES.find(c => c.id === id)

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
        <ImageBackground source={{uri: community?.coverImage }}>
            <H1 className='text-slate-100 drop-shadow flex-1'>{community?.name}</H1>
        </ImageBackground>
      </Row>
      <View className="max-w-xl">
        <P>{community?.description}</P>
      </View>
      <View className="flex-1 bg-blue-300">
        <H2>Chat rooms</H2>
        <FlatList
            data={CHAT_ROOMS}
            renderItem={renderChatRoomItem}
            keyExtractor={(item: {id: string}) => item.id}
        />
      </View>

    </View>
  )
}
