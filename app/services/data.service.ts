import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService {

  constructor(private _http:Http) { }

  private datafile = './data/navs.json';

  myData()
  {
    return 'heres the data.';
  }

  listing =  [
    { "nav" : [ 
        {"navtitle":"Selection 1",
        "destination": "#nowhere"},
        {"navtitle":"Selection 2",
        "destination": "#nowhere"},
        {"navtitle":"Selection 3",
        "destination": "#nowhere"} ]  
    }
  ];

  /* listing = [
      { "nav" : [ 
          {"navtitle":"Selection 1-1",
          "destination": "#nowhere"},
          {"navtitle":"Selection 1-2",
          "destination": "#nowhere"},
          {"navtitle":"Selection 1-3",
          "destination": "#nowhere"} ]  
      },
      { "nav" : [ 
          {"navtitle":"Selection 2-1",
          "destination": "#nowhere"},
          {"navtitle":"Selection 2-2",
          "destination": "#nowhere"},
          {"navtitle":"Selection 2-3",
          "destination": "#nowhere"} ]  
      },
      { "nav" : [ 
          {"navtitle":"Selection 3-1",
          "destination": "#nowhere"},
          {"navtitle":"Selection 3-2",
          "destination": "#nowhere"},
          {"navtitle":"Selection 3-3",
          "destination": "#nowhere"} ]  
      }
  ] */



  // navListData()
  // {
  //   return this._http.get(this.datafile)
  //   .map((response:Response) => response.json());
  // }

}
