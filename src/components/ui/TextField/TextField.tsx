import { type BaseComponentProps } from '@/models'
import clsx from 'clsx'
import { TextFieldError, TextFieldLabel } from './components'

interface TextFieldProps extends BaseComponentProps {
  direction?: 'column' | 'row'
}

export const TextField = ({ children, className, direction = 'column' }: TextFieldProps) => {
  return (
        <label className={
          clsx(
            'inline-flex',
            { 'flex-col items-start': direction === 'column' },
            { 'items-center gap-2': direction === 'row' },
            className
          )
        }>
            {children}
        </label>
  )
}

TextField.Label = TextFieldLabel
TextField.Error = TextFieldError
