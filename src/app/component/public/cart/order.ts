import {OrderItem} from './OrderItem';
import {User} from '../../../user/user';
import {IPayment} from '../../admin/payment/IPayment';

export interface Order {
  id?: number;
  user?: User;
  orderItems?: OrderItem[];
  phone?: string;
  shippingAddress?: string;
  total?: number;
  date?: Date;
  status?: string;
  payment?: IPayment;
}
