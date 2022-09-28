import { IEmployee } from "./interfaces/iemployee.interface";

export class Employee implements IEmployee {
    public id: number = -1;
    public name: string | null = null;
    public gender: string | null = null;
    public dateOfBirth: Date | null = null;
    public contactPreference: string | null = null;
    public department: number = -1;
    public isActive: boolean = false;
    public email: string | null = null;
    public phoneNumber: string | null = null;
    public photoPath: string | null = null;
    // public password: string | null = null;
    // public confirmPassword: string | null = null;

    // constructor(public id:number, 
    //     public name:string, 
    //     public gender:string, 
    //     public dateOfBirth:Date, 
    //     public contactPreference:string,
    //     public department:string, 
    //     public isActive:boolean, 
    //     public email:string | null, 
    //     public phoneNumber:string | null,         
    //     public photoPath:string | null){};
}
