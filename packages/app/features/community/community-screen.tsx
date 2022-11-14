import { H1 } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

export function CommunityScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 justify-between bg-green-300 items-stretch">
      <Row className="bg-red-300">
        <H1>Community {id}</H1>
      </Row>
    </View>
  )
}
