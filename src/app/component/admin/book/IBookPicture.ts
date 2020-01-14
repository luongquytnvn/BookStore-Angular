import {IBook} from './IBook';

export interface IBookPicture {
  id: number;
  src: string;
  book: IBook;
}
