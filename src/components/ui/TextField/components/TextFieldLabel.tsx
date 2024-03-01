import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const TextFieldLabel: BaseComponentType = ({ children, className }) => {
  return (
    <span
      className={
        clsx(
          'text-xs',
          className
        )
      }
    >
      {children}
    </span>
  )
}
