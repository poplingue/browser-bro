export default class Custom {

  newCustom: custom;

  constructor(title: string, value: string){

    this.getOrganised(title, value);

  }

  getOrganised(title: string, value: string){

    this.newCustom = {

      title: title,
      value: value

    };

  }

  getCustom(){

   return this.newCustom;

  }

}

export interface custom {

  title: string;
  value: string;

}
