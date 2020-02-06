import {IBook} from '../book/IBook';
import {User} from '../../../user/user';

export interface IComment {
  id: number;
  date: Date;
  isEdit: boolean;
  content: string;
  book: IBook;
  user: User;
}
