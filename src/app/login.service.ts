import { member } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !this.deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

  signup(object: any) {
    member.push(object);
  }

  login(data: any) {
    for (let i of member) {
      if (this.deepEqual(data, i)) {
        return true;
      } else {
        return false;
      }
    }
  }
}
