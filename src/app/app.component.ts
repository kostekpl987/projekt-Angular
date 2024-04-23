import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { LevelsComponent } from './levels/levels.component';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainButtonComponent, RouterLink, RouterLinkActive,RouterModule,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game';
}
