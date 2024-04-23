import { Component, OnInit ,} from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SerwisService } from '../serwis.service';
@Component({
  selector: 'app-levels',
  standalone: true,
  imports: [MainButtonComponent,CommonModule],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent implements OnInit {
  constructor(private router: Router,public serwis: SerwisService){} 
  levels:Array<boolean>= new Array(20);
  active:boolean=false;
  sound(i:any){
    // let audio = new Audio('./../../assets/blipSelect.wav');
    // if(this.levels[i])
    //   audio.play();
  }
  enter(i:string){
    this.serwis.random(Number(localStorage.getItem("power")),Number(localStorage.getItem("level")),10);
    localStorage.setItem("level",(Number(i)+1).toString());
    if(this.levels[Number(i)])
    this.router.navigate(['/levels/level']);
  }
  ngOnInit() {
    this.levels.fill(false);
    let index=this.serwis.countIndex();
    let tmp:string = JSON.parse(localStorage.getItem('levels')||'{}');
    localStorage.setItem('index',index.toString());
    this.levels.fill(true,0,Number(tmp[index])); 
  }
}
