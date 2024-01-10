import cx from "classnames";
import React from "react";

import { variantMappingToType } from "./config/typography.config";
import { TypographyProps } from "./types/typography.types";

type Props = TypographyProps;

const Typography = ({
  fontWeight = "regular",
  size,
  as,
  children,
  className,
  dangerouslySetInnerHTML,
  htmlFor,
  onClick,
}: Props): JSX.Element => {
  const variantClass = variantMappingToType[size][fontWeight];

  const Component = as || "div";

  return (
    <Component
      htmlFor={htmlFor}
      onClick={onClick}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={cx(variantClass, className)}
    >
      {children}
    </Component>
  );
};

export default Typography;
