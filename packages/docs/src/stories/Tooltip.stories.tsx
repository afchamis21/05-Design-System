import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@afchamis-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,

  args: {
    children: <Text>This is a sample Tooltip text</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
