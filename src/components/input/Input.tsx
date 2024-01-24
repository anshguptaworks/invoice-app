import { forwardRef } from 'react'
import React from 'react'
import Typography from '../typography/Typography'
import { Variant } from '../typography'
import cx from 'classnames'
import { InputProps } from './input.types'
import { getIcons } from '@/src/assets'

const Input = (
  {
    label,
    classname,
    icon,
    isFullWidth = false,
    placeholder,
    type,
    style,
    inputClassName,
    value,
    disabled,
    helperText,
    onChange,
    ...rest
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className="w-full">
      <Typography size={Variant.Body1} fontWeight="medium" className="text-grey300 mb-[0.625rem]">
        {label}
      </Typography>
      <div
        className={cx(
          'p-4 cursor-text rounded border border-solid border-grey100 flex justify-end items-center max-h-12',
          inputClassName
        )}
      >
        <input
          disabled={disabled}
          value={value}
          ref={ref}
          type={type}
          placeholder={placeholder}
          style={{
            width: '100%',
            outline: 'none'
          }}
          className="w-full text-xs font-bold text-dark300 outline-none focus:outline-none"
          onChange={onChange}
          {...rest}
        />
        {icon && getIcons(icon, { className: 'w-4 h-4' })}
      </div>
      {helperText && (
        <Typography size={Variant.Body1} fontWeight="medium" className="text-grey200 mt-[0.625rem]">
          {helperText}
        </Typography>
      )}
    </div>
  )
}

export default forwardRef(Input)
