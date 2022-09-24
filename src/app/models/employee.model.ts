import { IEmployee } from "./interfaces/iemployee.interface";

export class Employee implements IEmployee {
    constructor(public id:number, 
        public name:string, 
        public gender:string, 
        public dateOfBirth:Date, 
        public contactPreference:string,
        public department:string, 
        public isActive:boolean, 
        public email:string | null, 
        public phoneNumber:string | null,         
        public photoPath:string | null){};
}
