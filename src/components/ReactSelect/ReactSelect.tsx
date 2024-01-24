import React from 'react'

import Select from 'react-select'
import Typography from '../typography/Typography'
import { Variant } from '../typography'
import cx from 'classnames'

export interface OptionType {
  label: string
  value: string
}

interface SelectProps {
  label: string
  placeholder?: string
  options: OptionType[]
  className?: string
}

const ReactSelect = ({
  label,
  options,
  placeholder,
  className,
  ...rest
}: SelectProps): JSX.Element => {
  return (
    <div className="w-full">
      <Typography size={Variant.Body1} fontWeight="medium" className="text-grey300 ">
        {label}
        <Select
          styles={{
            dropdownIndicator: (provided) => ({
              ...provided,
              color: '#7C5DFA',
              ':hover': {
                color: '#bbaaff'
              }
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected ? '#7C5DFA' : '#000000',
              backgroundColor: state.isSelected ? '#FFFFFF' : '#FFFFFF',
              ':hover': {
                ...provided[':hover'],
                backgroundColor: '#F8F8FB'
              }
            }),
            control: (provided, state) => ({
              ...provided,
              borderColor: state.isFocused ? '#7C5DFA' : provided.borderColor,
              height: '48px',
              fontSize: '16px',
              '&:hover': {
                borderColor: state.isFocused ? '#7C5DFA' : provided.borderColor
              }
            })
          }}
          className={(cx('w-full focus-visible:border-primary h-12'), className)}
          placeholder={placeholder}
          options={options}
          {...rest}
        />
      </Typography>
    </div>
  )
}

export default ReactSelect
