import { Component } from '@angular/core';
import { DifficultyComponent } from '../difficulty/difficulty.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [DifficultyComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(private router: Router){} 
  diff:string="beginner";
  type:string="BIN";
  enter(){
        localStorage.setItem("current",this.type);
        localStorage.setItem("difficulty",this.diff);
    setTimeout(() => {
      this.router.navigate(['/levels']);
  }, 1);
  }
  diffHandler(event:string){
    this.diff=event;
  }
  typeHandler(event:string){
    this.type=event;
  }
}
