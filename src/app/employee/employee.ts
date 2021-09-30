export class Employee {
    _id?:number;
    ename?:string;
    course?:string;
    fee?:number;
    constructor(id?:number, ename?:string,course?:string,fee?:number){
        this._id=id;
        this.ename=ename;
        this.course=course;
        this.fee=fee;

    }
}
