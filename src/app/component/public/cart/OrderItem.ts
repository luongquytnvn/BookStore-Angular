import {IBook} from '../../admin/book/IBook';

export interface OrderItem {
  id: number;
  book: IBook;
  quantity: number;
}
