import clsx from 'clsx'
import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    size2?: 'sm' | 'base' | 'resizable' | 'lg'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, readOnly = false, size2, ...props }, ref) => {
        return (
            <input
                autoComplete='off'
                className={
                    clsx(
                        'flex items-center border rounded-lg [transition-duration:0.1s] relative w-full sm:w-[12.215rem] h-[34px] px-2 outline-none',
                        className,
                        size2 === 'sm' ? 'h-[1.5625rem]' : '',
                        size2 === 'base' ? 'h-[2rem]' : '',
                        size2 === 'lg' ? 'h-[2.5rem]' : ''
                    )
                }
                {...{ ...props, readOnly, ref }}
            />
        )
    }
)