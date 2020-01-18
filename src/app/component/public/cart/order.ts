import {OrderItem} from './OrderItem';
import {User} from '../../../user/user';

export interface Order {
  id: number;
  user: User;
  orderItem: OrderItem[];
  phone: string;
  shippingAddress: string;
  total: number;
}
