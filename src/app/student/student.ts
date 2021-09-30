export class Student {
    id?:number;
    sname?:string;
    course?:string;
    fee?:number;
    constructor(id?:number, sname?:string, course?:string, fee?:number){
        this.id=id; this.sname=sname;   this.course=course; this.fee=fee;
    }
}