export class Response {
    status : boolean;
    message : string;
    data : object;

    constructor(){
      this.status = false;
      this.message = "";
      this.data = {};
    }
}
