import { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@afchamis-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', gap: '$2', alignItems: 'center' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],

  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
