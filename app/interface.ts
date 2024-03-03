export interface HeroImage {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  image1: {
    _type: string;
    assset: {
      _type: string;
      _ref: string;
    };
  };
  _updatedAt: string;
  image2: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface SimplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
}

export interface SlugData {
  price: number;
  name: string;
  description: string;
  slug: string;
  categoryName: string;
  _id: string;
  images: any;
  price_id: string;
}

export interface ProductCart {
  name: string;
  description: string;
  currency: string;
  price: number;
  image: any;
  price_id: string;
}
