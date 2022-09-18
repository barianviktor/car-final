import { Iimage } from './iimage';
import { Ismartpoint } from './ismartpoint';

export interface Ismartcard {
  id?: number;
  image: Iimage;
  smartpoints: Ismartpoint[];
}
