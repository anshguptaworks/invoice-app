import { Variant } from "../types/typography.types";
import { VariantType } from "../typography.helper";

export const mapFontToVariant: Record<Variant, string> = {
  H1: "text-[2rem] leading-[2.25rem]",
  H2: "text-xl",
  H3: "text-base",
  H4: "text-xs",
  Body1: "text-xs",
  Body2: "text-[0.688rem] leading-[1.125rem]",
};

export const H1 = new VariantType(Variant.H1).set({
  bold: `${mapFontToVariant[Variant.H1]} font-bold`,
  regular: `${mapFontToVariant[Variant.H1]} font-normal`,
  medium: `${mapFontToVariant[Variant.H1]} font-medium`,
});

export const H2 = new VariantType(Variant.H2).set({
  bold: `${mapFontToVariant[Variant.H2]} font-bold`,
  regular: `${mapFontToVariant[Variant.H2]} font-normal`,
  medium: `${mapFontToVariant[Variant.H2]} font-medium`,
});

export const H3 = new VariantType(Variant.H3).set({
  bold: `${mapFontToVariant[Variant.H3]} font-bold`,
  regular: `${mapFontToVariant[Variant.H3]} font-normal`,
  medium: `${mapFontToVariant[Variant.H3]} font-medium`,
});

export const H4 = new VariantType(Variant.H4).set({
  bold: `${mapFontToVariant[Variant.H4]} font-bold`,
  regular: `${mapFontToVariant[Variant.H4]} font-normal`,
  medium: `${mapFontToVariant[Variant.H4]} font-medium`,
});

export const Body1 = new VariantType(Variant.Body1).set({
  bold: `${mapFontToVariant[Variant.Body1]} font-bold`,
  regular: `${mapFontToVariant[Variant.Body1]} font-normal`,
  medium: `${mapFontToVariant[Variant.Body1]} font-medium`,
});

export const Body2 = new VariantType(Variant.Body2).set({
  bold: `${mapFontToVariant[Variant.Body2]} font-bold`,
  regular: `${mapFontToVariant[Variant.Body2]} font-normal`,
  medium: `${mapFontToVariant[Variant.Body2]} font-medium`,
});
