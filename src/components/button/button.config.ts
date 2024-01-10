import { ButtonConfig, ButtonSize, ButtonVariant } from "./button.types";

const disabledClass = "disabled:bg-gray-100 disabled:text-grey-500";
const disabledIconClass = "stroke-grey-500";

export const baseClass = ["text-sm font-bold rounded-full"];

const primaryButtonConfig: ButtonConfig = {
  background: "bg-primary",
  border: "border-none",
  hover: "hover:bg-secondary hover:cursor-pointer",
  text: "text-white",
  disabled: disabledClass,
  focus: "",
  icon: "stroke-white",
  disabledIcon: disabledIconClass,
};

const secondaryButtonConfig: ButtonConfig = {
  background: "bg-dark200",
  border: "border-none",
  hover: "hover:bg-grey25 hover:cursor-pointer",
  disabled: disabledClass,
  text: "text-grey200",
  focus: "",
  icon: "stroke-grey300",
  disabledIcon: disabledIconClass,
};

export const tertiaryButtonConfig: ButtonConfig = {
  background: "bg-transparent",
  border: "border-none",
  disabled: "disabled:text-grey500",
  focus: "",
  hover: "hover:cursor-pointer",
  text: "text-blue900",
  icon: "stroke-grey300",
  disabledIcon: disabledIconClass,
};

export const variants = {
  [ButtonVariant.Primary]: primaryButtonConfig,
  [ButtonVariant.Secondary]: secondaryButtonConfig,
  [ButtonVariant.Tertiary]: tertiaryButtonConfig,
};

export const buttonSize = {
  [ButtonSize.Large]: "px-6 px-[7.188rem] h-12",
  [ButtonSize.Medium]: "px-6 py-4 h-12",
};
