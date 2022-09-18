import { Address } from 'src/app/interfaces/address';

export interface Customer {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: any;
  address: Address;
  notes?: string;
}
