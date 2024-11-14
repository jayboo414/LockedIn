import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ActivityComponent, HeaderComponent, HomePageComponent, ReactiveFormsModule],
  template: `
    <app-header/>
    <app-home-page/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lockedIn';
}
