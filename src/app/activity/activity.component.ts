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
  	ends: ''
  });

  onSubmit(): void {
    console.log(this.addActivity.value)
    let activityName = <string>this.addActivity.value.name;
	  let activityPriority =  <number><unknown>this.addActivity.value.priority;
  	let activityRepeats = <boolean><unknown>this.addActivity.value.repeats;
  	let activityEnds =  <number><unknown>this.addActivity.value.ends;
    this.assignments.update(value =>{return [...value, {name: activityName,
      priority: activityPriority,
      repeats: activityRepeats,
      ends: activityEnds}]}
    )
    localStorage.setItem("1",JSON.stringify(this.assignments()[0]))
  }

  assignments = signal<Array<assignment>>([]);



  ngOnInit(): void {
      this.assignments.set(this.service.assignments);
  }
}