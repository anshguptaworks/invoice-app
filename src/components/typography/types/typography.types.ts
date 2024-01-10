export enum Variant {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  Body1 = "Body1",
  Body2 = "Body2",
}

export interface Set {
  regular: string;
  medium: string;
  bold: string;
}

export interface TypographyProps {
  htmlFor?: string;
  size: Variant;
  fontWeight?: keyof Set;
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: VoidFunction;
  dangerouslySetInnerHTML?: React.DOMAttributes<HTMLElement>["dangerouslySetInnerHTML"];
}
