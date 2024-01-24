import Input from '@/src/components/input'
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
  helperText?: string
}

const FormInput = <T extends FieldValues>({
  control,
  label,
  id,
  defaultValue,
  className,
  placeholder,
  required,
  helperText,
  type
}: InputFieldProps<T & FieldValues>) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, name, ref, value } }) => {
        return (
          <Input
            type={type}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            onBlur={onBlur}
            className={className}
            label={label}
            required={required}
            helperText={helperText}
          />
        )
      }}
      shouldUnregister={false}
      name={String(id)}
      defaultValue={defaultValue}
    />
  )
}

export default FormInput
