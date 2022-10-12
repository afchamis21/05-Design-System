import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@afchamis-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ab sunt, amet assumenda neque recusandae, voluptatem eius consequatur alias accusantium quia. Reiciendis quo soluta asperiores earum consectetur nihil officiis aliquid.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
