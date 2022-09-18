import { Icartype } from './icartype';
import { Icolor } from './icolor';
import { Iimage } from './iimage';
import { Imotor } from './imotor';
import { Itransmission } from './itransmission';

export interface Icar {
  id: number;
  carType: Icartype;
  color: Icolor;
  price: number;
  licensePlate: string;
  cardImage: Iimage;
  transmission: Itransmission;
  motor: Imotor;
  images: Iimage[];
}
