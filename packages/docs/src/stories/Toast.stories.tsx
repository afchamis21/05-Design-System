import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@afchamis-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,

  args: {
    title: 'Toast title',
    message: 'Toast message',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
