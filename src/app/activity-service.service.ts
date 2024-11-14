import { Injectable } from '@angular/core';
import { assignment } from './model/assignment.type';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {
  assignments: Array<assignment> = [{
    name: "read",
    priority: 2,
    repeats: false,
    ends: 5
  },{
    name: "run",
    priority: 3,
    repeats: true,
    ends: -1
  }]
  constructor() { }
}
