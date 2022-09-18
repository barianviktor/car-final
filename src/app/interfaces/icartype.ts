import { Iarticle } from './iarticle';
import { Idesign } from './idesign';
import { Iimage } from './iimage';
import { Imodel } from './imodel';
import { Imotor } from './imotor';
import { Ismartcard } from './ismartcard';

export interface Icartype {
  id?: number;
  model: Imodel;
  articles: Iarticle[];
  smartcard: Ismartcard;
  // motor:Imotor,
  design: Idesign;
  seats: number;
  title: string;
  images: Iimage[];
  titleImage: Iimage;
}
