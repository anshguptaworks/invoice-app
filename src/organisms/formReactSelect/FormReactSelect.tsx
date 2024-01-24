import ReactSelect from '@/src/components/ReactSelect'
import { OptionType } from '@/src/components/ReactSelect/ReactSelect'
import { InputType } from '@/src/components/input/input.types'
import { Control, Controller, FieldValues } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues> {
  control: Control<FieldValues | T | any>
  label: string
  id: string
  defaultValue?: string
  placeholder?: string
  type?: InputType
  disabled?: boolean
  className?: string
  required?: boolean
  optionsList: OptionType
}

const FormReactSelect = <T extends FieldValues>({
  control,
  label,
  id,
  defaultValue,
  className,
  placeholder,
  optionsList,
  required
}: InputFieldProps<T & FieldValues>) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur } }) => {
        return (
          <ReactSelect
            placeholder={placeholder}
            className={className}
            label={label}
            options={optionsList as unknown as OptionType[]}
          />
        )
      }}
      shouldUnregister={false}
      name={String(id)}
      defaultValue={defaultValue}
    />
  )
}

export default FormReactSelect
