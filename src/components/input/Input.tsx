import React, { useRef, useEffect, useMemo } from "react";
import Typography from "../typography/Typography";
import { Variant } from "../typography";
import cx from "classnames";
import { InputProps, RestInputConfig } from "./input.types";
import { getIcons } from "@/src/assets";

const Input = ({
  title,
  classname,
  icon,
  isFullWidth,
  placeholder,
  type,
  autoFocus = false,
  style,
  inputClassName,
  value,
  disabled,
}: InputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const getRestInputConfig = ({ isFullWidth, icon }: RestInputConfig) => ({
    "w-full": isFullWidth,
    "items-end flex justify-end": icon,
  });

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const RestInputConfig = useMemo(
    () =>
      getRestInputConfig({
        isFullWidth,
        icon,
      }),
    [isFullWidth, icon]
  );

  const combinedClassName = cx(
    "text-xs font-bold text-dark300 outline-none focus:outline-none w-full",
    classname,
    RestInputConfig
  );

  return (
    <div className="w-full">
      <Typography
        size={Variant.Body1}
        fontWeight="medium"
        className="text-grey300 mb-[0.625rem]"
      >
        {title}
      </Typography>
      <div
        className={cx(
          "px-5 py-4 pr-4 cursor-text rounded border border-solid border-grey100 flex justify-end items-center",
          inputClassName
        )}
      >
        <input
          disabled={disabled}
          value={value}
          ref={inputRef}
          type={type}
          placeholder={placeholder ? placeholder : ""}
          style={style}
          className={combinedClassName}
        />
        {icon && getIcons(icon, { className: "w-4 h-4" })}
      </div>
    </div>
  );
};

export default Input;
