export interface IEmployee {
    id:number;
    name:string;
    gender:string;
    email:string | null;
    phoneNumber:string | null;
    contactPreference:string;
    dateOfBirth:Date;
    department:string;
    isActive:boolean;
    photoPath:string | null;
}
