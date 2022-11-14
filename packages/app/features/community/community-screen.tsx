import { H1, H2, P, TextLink } from 'app/design/typography'
import { FlatList, Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { createParam } from 'solito'
import { ImageBackground } from 'react-native'
import { useCommunity } from 'app/hooks/useCommunity'

const { useParam } = createParam<{ id: string }>()

export function CommunityScreen() {
  const [id] = useParam('id')
  const { getCommunityById, getRoomsByCommunityId } = useCommunity();
  const community = getCommunityById(id);
  const rooms = getRoomsByCommunityId(id);

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
            data={rooms}
            renderItem={renderChatRoomItem}
            keyExtractor={(item: {id: string}) => item.id}
        />
      </View>

    </View>
  )
}
