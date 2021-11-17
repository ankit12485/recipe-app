import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * This method picks the first 95 characters of a string and return them
   * @param str Complete string
   * @returns First 95 characters of the string
   */
  shortenDescription(str:string) : string{
    return str?.substr(0,95);
  }
}
