import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CloseButton, ToastContainer, ToastHeader } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  message: string
}

export function Toast({ message, title }: ToastProps) {
  return (
    <ToastContainer>
      <ToastHeader>
        <span>{title}</span>
        <CloseButton>
          <X size={20} />
        </CloseButton>
      </ToastHeader>
      <span>{message}</span>
    </ToastContainer>
  )
}
