import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  constructor(private router: Router){} 
  scalevar:number=1;
  isDisabled:boolean=true;
  transitionValue: string = "all 0.25s";
  levels:Array <string>=new Array(9);
  sound(){
    if(this.isDisabled){
      // let audio = new Audio('./../../assets/blipSelect.wav');
      // audio.play();
    }

    
      
  }
  enter(){
    if(this.isDisabled){

      let tmp = localStorage.getItem("levels");
      if(!tmp){
        this.levels.fill("1")
        localStorage.setItem("levels",JSON.stringify(this.levels));
      }
        
      this.transitionValue= "all 8.25s";
      this.scalevar=500;
      this.isDisabled=false;
      setTimeout(() => {
        this.router.navigate(['/settings']);
    }, 3000);
  }
}
}
