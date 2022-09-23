import { Iimage } from './iimage';

export interface Iarticle {
  id?: number;
  title: string;
  description: string;
  image: Iimage | null;
}
