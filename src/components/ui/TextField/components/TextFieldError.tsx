import type { BaseComponentType } from '@/models'
import clsx from 'clsx'

export const TextFieldError: BaseComponentType = ({ className, ...props }) => {
  return (
    <p
      className={
        clsx(
          'text-sm text-red-400',
          className
        )
      }
      {...props}
    />
  )
}
