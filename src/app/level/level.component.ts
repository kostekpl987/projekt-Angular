import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerwisService } from '../serwis.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent implements OnInit {
  tmp:Array<string>=new Array(3);
  s:boolean=true;
  sec:Array<boolean>=new Array(3);
  done:number=0;
  constructor(private router: Router,public serwis: SerwisService){} 
  return(){
    this.router.navigate(['/levels']);
  }
  check(e:Event, i:number,text:string){
    e.preventDefault(); 
    if(text==this.serwis.decToAny(Number(this.tmp[i]),Number(localStorage.getItem("base")))){
        if(this.sec[i]){
          this.done++;
          this.sec[i]=false;
       }
        if(this.done==3){
          let help = JSON.parse(localStorage.getItem('levels')||'{}');
          if(Number(localStorage.getItem("level"))==Number(help[Number(localStorage.getItem("index"))])){
            help[Number(localStorage.getItem("index"))]=Number(help[Number(localStorage.getItem("index"))])+1;
            localStorage.setItem("levels",JSON.stringify(help));
          }
          
          this.router.navigate(['/levels']);
        }
    }
    
    if(this.done==3){
      let help = JSON.parse(localStorage.getItem('levels')||'{}');
      if(Number(localStorage.getItem("level"))==Number(help[Number(localStorage.getItem("index"))])){
        help[Number(localStorage.getItem("index"))]=Number(help[Number(localStorage.getItem("index"))])+1;
        localStorage.setItem("levels",JSON.stringify(help));
      }
      
      this.router.navigate(['/levels']);
    }
  }
  start(){
    this.sec.fill(true);
    this.s=false;
    let tmp = localStorage.getItem("number")?.split("\n");
    if(tmp){
      this.tmp[0]=tmp[0];
      this.tmp[1]=tmp[1];
      this.tmp[2]=tmp[2];
    }
  }
  ngOnInit(){
    this.serwis.random(Number(localStorage.getItem("power")),Number(localStorage.getItem("level")),10);
    if(this.tmp[0]==""){
      alert("test");
      window.location.reload();
    }
    console.log(localStorage.getItem("power"));
    console.log(localStorage.getItem("level"));
    
  }
}
