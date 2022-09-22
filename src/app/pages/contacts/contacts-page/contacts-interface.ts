import { Address } from 'src/app/interfaces/address';

export interface Contact {
_id?:string;
firstName:string;
lastName:string;
email:string;
birthday:any;
createdAt?: any;
phone:string;
address:Address;
notes:string
lead:boolean 

    } 


