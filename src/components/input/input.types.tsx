import { IconsType } from "@/src/assets/types";

export interface RestInputConfig {
  isFullWidth: InputProps["isFullWidth"];
  icon: InputProps["icon"];
}

type InputType = "text" | "number" | "password" | "email" | "tel" | "date";

export interface InputProps {
  placeholder?: string;
  isFullWidth?: boolean;
  icon?: IconsType;
  title: string;
  classname?: string;
  type?: InputType;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  inputClassName?: string;
  value?: string;
  disabled?: boolean;
}
