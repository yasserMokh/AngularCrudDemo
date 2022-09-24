import { IDepartment } from "./interfaces/idepartment.interface";

export class Department implements IDepartment {
    constructor(public id:number, 
        public name:string
        ){};
}
