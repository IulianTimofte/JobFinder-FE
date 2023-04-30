import { Status } from "./status.enum"; 

export interface MyApplicantDto{
     email: string;
     firstName: string;
     lastName: string; 
     announceTitle: string;
     status: Status;
}