import {IBookPicture} from './IBookPicture';

export interface IBook {
  id: number;
  name: string;
  bookPictures: any[];
  price: number;
  description: string;
  amount: number;
  authors: any[];
  publishing: any;
  category: any;
}
