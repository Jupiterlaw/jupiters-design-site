export type ProductCategory = "SPC" | "Wood" | "Composite";

export type ProductFilter = ProductCategory | "All";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: readonly string[];
  priceFromHkd: number;
  image: string;
  badge?: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  location: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
  category: ProductCategory;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  interest: ProductFilter;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
