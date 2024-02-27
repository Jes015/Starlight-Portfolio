import { TextField } from "@/components/ui/TextField/TextField"
import type { BaseComponentType } from "@/models"
import { MultipleSelect } from "./ui/MultipleSelect/MultipleSelect"

export const Filters: BaseComponentType = (props) => {
   return (
       <div {...props}>
        <TextField>
            <TextField.Label>Techs</TextField.Label>
            <MultipleSelect defaultValues={[{ name: 'React', color: '#c0e2fd61', isSelected: false}, { name: 'Astro', color: '#f9e0c2', isSelected: true}, { name: 'Nest', color: '#fee7e7', isSelected: false}]} />
        </TextField>
       </div>
   )
}