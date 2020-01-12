import {IBookPicture} from './IBookPicture';

export interface IBook {
  id: number;
  name: string;
  bookPictures: any[];
  price: number;
  description: string;
  amount: number;
}
