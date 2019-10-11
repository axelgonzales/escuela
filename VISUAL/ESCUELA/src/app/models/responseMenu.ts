export class ResponseOptions {
  options: ResponseMenu;
}

export class ResponseMenu {
  menu:Array<ResponseItem>;
}

export class ResponseItem {
  codeProfile:string;
  nameProfile:string;
  label:string;
  route:string;
  child:Array<ResponseMenuChild>;
}

export class ResponseMenuChild {
  label:string;
  route:string;
  flatModal:string;
}
