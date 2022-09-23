import { Iimage } from './iimage';

export interface Ismartpoint {
  id?: number;
  title: string;
  description: string;
  image: Iimage | null;
  x: number;
  y: number;
}
