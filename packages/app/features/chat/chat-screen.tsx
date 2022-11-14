import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

const { useParam } = createParam<{ id: string }>()
import { MotiLink } from 'solito/moti'
import { createParam } from 'solito'
import MessageComposer from './message-composer'

export function ChatScreen() {
  const [id] = useParam('id')
  return (
    <View className="flex-1 justify-between bg-green-300 items-stretch">
      <Row className="bg-red-300">
        <H1>Chat {id}</H1>
      </Row>
      <View className="flex-1 bg-yellow-300">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </P>
      </View>
      <Row className="space-x-8 bg-blue-300">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-base font-bold">
            Moti Link
          </Text>
        </MotiLink>
      </Row>
      <MessageComposer onSubmit={text => console.log(text)} />
    </View>
  )
}
