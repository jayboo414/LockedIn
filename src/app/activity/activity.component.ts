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
    console.log("submitted")
  }

  assignments = signal<Array<assignment>>([]);



  ngOnInit(): void {
      console.log("test");
      this.assignments.set(this.service.assignments);
  }
}