export interface NewHotelType {
    title?: string;
    description?: string;
    features?: string;
    location?: string;
    stars?: string;
    country?: string;
    region?: string;
    reviews?: string;
    totalPrice?: string;
    perNight?: string;
    id?: string;
  }
  
  export interface AddHotelType {
    title: string;
    description: string;
    feature: string;
    location: string;
    stars: string;
    country: string;
    region: string;
    review: string;
    totalPrice: string;
    perNight: string;
  }