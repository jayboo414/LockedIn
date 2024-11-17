import { Component } from '@angular/core';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ActivityComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public clearStorage(){
    console.log("cleared local storage!")
    localStorage.clear()
  }
}
