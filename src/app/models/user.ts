export class User{
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;

    constructor(value: any = {}){
        Object.assign(this, value);
        if(!this.id){
            this.id = new Date().getMilliseconds();
        }
    }
}