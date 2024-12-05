import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivityServiceService } from '../activity-service.service';
import { assignment } from '../model/assignment.type';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})

export class ActivityComponent implements OnInit{
  service = inject(ActivityServiceService);
  form = inject(FormBuilder)

  addActivity = this.form.group({
    name: '',
	  priority: '',
  	repeats: '',
    starts: '',
  	ends: ''
  });

  onSubmit(): void {
    console.log(this.addActivity.value)
    let activityName = <string>this.addActivity.value.name;
	  let activityPriority =  <number><unknown>this.addActivity.value.priority;
  	let activityRepeats = <boolean><unknown>this.addActivity.value.repeats;
    let activityStarts =  new Date(<string>this.addActivity.value.starts);
  	let activityEnds =  new Date(<string>this.addActivity.value.ends);
    this.assignments.update(value =>{return [...value, {name: activityName,
      priorityLevel: activityPriority,
      currentPriority: activityPriority,
      repeats: activityRepeats,
      starts: activityStarts,
      ends: activityEnds}]}
    )
    localStorage.setItem(<string><unknown>localStorage.length,JSON.stringify(this.assignments()[localStorage.length]));
    this.assignments().sort((a,b)=> b.currentPriority - a.currentPriority);
    console.log(this.assignments()[localStorage.length - 1]);
  }

  assignments = signal<Array<assignment>>([]);



  ngOnInit(): void {
    console.log("Oninit in activity componenet")
    this.assignments.set(this.service.assignments);
  }
}