export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string; // Add a category to specify the type of pet
  images: string[]; // Add a list of images
}
