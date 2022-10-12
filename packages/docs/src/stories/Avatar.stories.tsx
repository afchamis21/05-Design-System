import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@afchamis-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/afchamis21.png',
    alt: 'André Chamis',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}
