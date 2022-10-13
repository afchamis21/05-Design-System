import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  minWidth: '360px',
  width: 'fit-content',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  background: '$gray800',
  padding: '$3 $5',
  gap: '$1',
  boxSizing: 'border-box',
  fontFamily: '$default',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  lineHeight: '$base',

  color: '$gray200',
  fontSize: '$sm',
})

export const ToastHeader = styled('header', {
  display: 'flex',
  height: '2rem',
  justifyContent: 'space-between',
  alignItems: 'baseline',

  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const CloseButton = styled('button', {
  all: 'unset',
  color: '$gray100',
  cursor: 'pointer',
  lineHeight: 0,

  '&:hover': {
    color: '$white',
  },
})
