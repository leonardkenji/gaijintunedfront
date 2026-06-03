import type { CarData } from "./carData";
import type { User } from "./userData";

export interface BookingData {
  id: number,
  user: User,
  car: CarData
}
