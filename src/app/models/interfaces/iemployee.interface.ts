export interface IEmployee {
    id:number;
    name:string | null;
    gender:string | null;
    email:string | null;
    phoneNumber:string | null;
    contactPreference:string | null;
    dateOfBirth:Date | null;
    department:number;
    isActive:boolean;
    photoPath:string | null;
    // password:string | null;
    // confirmPassword:string | null;
}
