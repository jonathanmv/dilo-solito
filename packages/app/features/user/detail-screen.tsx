import { createParam } from 'solito'
import { H1, H2, P, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { useUser } from 'app/hooks/useUser'
import { FlatList, ImageBackground } from 'react-native'
import { CommunityMembership } from 'app/hooks/data'
import { Row } from 'app/design/layout'
import { Button } from 'app/design/form-controls'
import { signOut } from '../auth/firebase'
import { useAuth } from '../auth/context'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [_] = useParam('id')
  const auth = useAuth();
  const { user, communities } = useUser();
  const renderCommunityItem = ({ item }) => {
    return (
      <ImageBackground source={{ uri: item.communityCover }} resizeMode="cover">
        <Row className="m-2 p-4">
            <TextLink className="drop-shadow text-xl text-slate-100" href={`/community/${item.communityId}`}>
              {item.communityName}
            </TextLink>
        </Row>
      </ImageBackground>
    )
  }
  return (
    <View className="flex-1 items-stretch justify-start">
      <Row className='justify-between items-center p-4'>
        <H1>{user?.name}</H1>
        {auth ? <Button title='Sign Out' onPress={signOut}/>: null}
      </Row>
      <P>{user?.bio}</P>
      <View className="bg-blue-300">
        <H2>Communities</H2>
        <FlatList
          data={communities}
          renderItem={renderCommunityItem}
          keyExtractor={(item: CommunityMembership) => item.communityId}
        />
      </View>
    </View>
  )
}
