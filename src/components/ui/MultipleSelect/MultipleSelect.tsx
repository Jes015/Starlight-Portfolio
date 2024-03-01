import { ArrowDownIcon, Cross2Icon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { useState, type FC } from "react"

export interface MultipleSelectValue {
    name: string
    color: string
    isSelected: boolean
}

export type MultipleSelectValueArray = MultipleSelectValue[]

interface MultipleSelectProps {
    defaultValues: MultipleSelectValueArray
    onChange?: (data: unknown) => void
}

export const MultipleSelect: FC<MultipleSelectProps> = ({ defaultValues, onChange }) => {
    const [values, setValues] = useState<MultipleSelectValueArray>(defaultValues)

    const noSelectedValues = values.filter((value) => !value.isSelected)
    const selectedValues = values.filter((value) => value.isSelected)

    const handleOnClickToToggleSelectedState = (e: React.MouseEvent<HTMLSpanElement | HTMLLIElement, MouseEvent>) => {
        const element = e.currentTarget

        const dataValue = element.dataset.value

        const valueIndex = values.findIndex((value) => value.name === dataValue)

        if (valueIndex === -1) return

        const updatedValue: MultipleSelectValue = {
            ...values[valueIndex],
            isSelected: !values[valueIndex].isSelected
        }

        const newArray = values.with(valueIndex, updatedValue)

        setValues(newArray)


        const selectedValues = newArray.filter((value) => value.isSelected)
        onChange?.(selectedValues)

    }

    return (
        <div className="flex flex-col items-stretch gap-1 text-xs w-full sm:w-[12.215rem] relative">
            <div className="peer relative z-[20] flex flex-wrap gap-1 p-1 h-[34px] border rounded-lg items-center">
                {
                    selectedValues
                        .map((value) => (
                            <span
                                key={value.name}
                                onClick={handleOnClickToToggleSelectedState}
                                data-value={value.name}
                                className="flex select-none text-xs items-center w-fit p-1 rounded-md cursor-pointer hover:bg-neutral-100"
                                style={{
                                    backgroundColor: value.color
                                }}
                            >
                                {value.name}
                                <Cross2Icon />
                            </span>
                        )
                        )
                }
                {
                    selectedValues?.[0] == null && (
                        <div className="w-full items-center flex justify-between">
                            <span className="p-1 text-xs text-neutral-600 select-none">Select values</span>
                            <ArrowDownIcon className="text-neutral-600 mr-1"/>
                        </div>
                    )
                }
            </div>
            <ul className={
                clsx(
                    "peer-hover:flex w-full bg-white transition-all hidden hover:flex absolute top-[1.25rem] left-0 z-[10] rounded-t-none flex-wrap border p-1 pt-5 rounded-lg overflow-hidden min-w-24 gap-1 border-t-0",
                    { '!hidden': noSelectedValues?.[0] == null }
                )
            }
            >
                {
                    noSelectedValues
                        .map((value) => (
                            <li
                                key={value.name}
                                onClick={handleOnClickToToggleSelectedState}
                                data-value={value.name}
                                className="p-1 rounded-md text-xs select-none cursor-pointer hover:bg-neutral-100"
                                style={{
                                    backgroundColor: value.color
                                }}
                            >
                                {value.name}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}