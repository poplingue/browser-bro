import Custom   from '../elements/Custom';
import {custom} from '../elements/Custom';

export default class Customs {

  public list: string[];

  private getRequest(url: string): Promise<any> {

    return new Promise<any>(

      function (resolve, reject) {

        const request = new XMLHttpRequest();

        request.onload = function () {

          if (this.status === 200) {

            resolve(this.response);

          } else {

            reject(new Error(this.statusText));

          }
        };

        request.onerror = function (e) {

          reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };

        request.open('GET', url);
        request.send();

      });
  }

  public initDatas(){

    return new Promise<custom[]>((resolve, reject) => {

      let response;
      let currentCustom: custom;
      let t: string;
      let v: string;

      this.getRequest('http://localhost:8000/api/customs/')

        .then(response => {

          let array: custom[] = [];
          response = JSON.parse(response).objects;

          for(let custom of response){

            t = custom.title;
            v = custom.value;

            currentCustom = new Custom(t, v).getCustom();
            array.push(currentCustom);

          }

          resolve(array);

        })
        .catch(error => {

          reject('Request error');
          throw new Error(error);

        });

    });
  }
}
