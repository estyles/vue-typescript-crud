import { House } from "./house";

export interface Favorite {
  houseId: number;
  description: string;
  house?: House
}