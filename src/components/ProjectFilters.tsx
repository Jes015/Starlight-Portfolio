import { TextField } from "@/components/ui/TextField/TextField"
import type { BaseComponentType } from "@/models"
import clsx from "clsx"
import { MultipleSelect } from "./ui/MultipleSelect/MultipleSelect"

export const Filters: BaseComponentType = ({ className, ...props}) => {
    return (
        <div 
            className={
                clsx(
                    'flex justify-end gap-2 flex-col sm:flex-row',
                    className
                )
            }
        {...props}
        >
            <TextField>
                <TextField.Label>Techs</TextField.Label>
                <MultipleSelect
                    onChange={(values) => { console.log({ values })}}
                    defaultValues={[{ name: 'React', color: '#c0e2fd61', isSelected: false }, { name: 'Astro', color: '#f9e0c2', isSelected: true }, { name: 'Nest', color: '#fee7e7', isSelected: false }]}
                />
            </TextField>
        </div>
    )
}