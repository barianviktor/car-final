import { Iarticle } from './iarticle';
import { Idesign } from './idesign';
import { Iimage } from './iimage';
import { Imodel } from './imodel';
import { Imotor } from './imotor';
import { Ismartcard } from './ismartcard';

export interface Icartype {
  id?: number;
  articles: Iarticle[];
  smartcards: Ismartcard[];
  seats: number;
  title: string;
  titleImage: Iimage;
  model: Imodel;
  design: Idesign;
  images: Iimage[];
}
