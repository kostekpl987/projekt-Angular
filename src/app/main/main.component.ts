import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
