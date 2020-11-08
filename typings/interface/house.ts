export interface House {
  id: number;
  image_thumb: string;
  images: {thmb: string, lg: string}[];
  link: string;
  galleryLink: string;
  zip_city: string;
  zip: string;
  geo_lat: string;
  geo_long: string;
  city: string;
  region: string;
  price: string;
  price_number: string;
  living_parcel_rooms: string;
  living: string;
  parcel: string;
  rooms: string;
  street_address: string;
  tuin: boolean;
  dakterras: boolean| null,
  klushuis: boolean| null,
  nieuwbouw: boolean| null,
  energyLabel: string | null,
  bouwjaar: number | null,
  date_tz: Date;
}