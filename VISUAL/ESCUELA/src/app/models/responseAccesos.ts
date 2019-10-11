export class ResponseAccesos {
    label : string;
    route : string;
    properties : PropertiesAccess;
}

export class PropertiesAccess {
    color : string;
    icon : string;
    constructor(){
      this.color= "";
      this.icon = "";
    }
}
