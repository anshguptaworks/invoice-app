import { Set, Variant } from "./types/typography.types";

export class VariantType {
  Regular: string;
  medium: string;
  Bold: string;

  constructor(public variant: Variant) {
    this.variant = variant;
    this.Regular = "";
    this.medium = "";
    this.Bold = "";
  }

  set({ regular, medium, bold }: Set): Set {
    this.Regular = regular;
    this.medium = medium;
    this.Bold = bold;

    return {
      bold,
      regular,
      medium,
    };
  }
}
