import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  background: '$gray900',
  borderRadius: '$sm',
  width: 'fit-content',
  padding: '$3 $4',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '$4',
    height: '$4',
    left: '50%',
    bottom: '-$2',
    transform: 'translateX(-50%) rotate(45deg)',
    background: '$gray900',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
