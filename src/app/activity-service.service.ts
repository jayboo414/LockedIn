import { afterNextRender, Injectable } from '@angular/core';
import { assignment } from './model/assignment.type';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService{
  assignments: Array<assignment> = [];

  constructor() {
    afterNextRender(() => {
      console.log("intitialized in service!");
      let length = localStorage.length;
      for (let i = 0; i < length; i++){
        let currentAssignment = JSON.parse(<string>localStorage.getItem(<string><unknown>i));
        console.log(currentAssignment);
        let startDate = new Date(<string>currentAssignment.starts);
        let endDate = new Date(<string>currentAssignment.ends);
        let oneDay = 24 * 60 * 60 * 1000;
        let now = new Date();
        console.log(now);
        let activityCurPriority = currentAssignment.priorityLevel * 
        Math.round((now.getTime() - startDate.getTime()) / oneDay);
        let assignmentObject = <assignment>{
          name: <string>currentAssignment.name,
          priorityLevel: <number><unknown>currentAssignment.priorityLevel,
          currentPriority: activityCurPriority,
          repeats: <boolean><unknown>currentAssignment.repeats,
          starts: startDate,
          ends: endDate
        }
        console.log(assignmentObject);
        this.assignments[i] = assignmentObject;
        this.assignments.sort((a,b)=> b.currentPriority - a.currentPriority);
      }
    })
  }
}
