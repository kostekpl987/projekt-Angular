import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerwisService {

  constructor() { }
  
  countIndex():number{
    let index:number=0;
    let current=localStorage.getItem("current");
    let difficulty=localStorage.getItem("difficulty");
    localStorage.setItem("power","1");
    localStorage.setItem("base","2");
    if(difficulty=="Intermediate"){
      index+=3;
      localStorage.setItem("power","10");
    }
      
    if(difficulty=="Advanced"){
      index+=6;
      localStorage.setItem("power","100");
    }
    if(current=="OCT"){
      index+=1;
      localStorage.setItem("base","8");
    }
    if(current=="HEX"){
      index+=2;
      localStorage.setItem("base","16");
    }
    return index;
  }
  random(power:number,level:number,base:number){

    let url:string;
    if(level>5)
      level*=3;
        url='https://www.random.org/integers/?num=3&min='+level*power+'&max='+level*5*power+'&col=1&base='+base+'&format=plain&rnd=new';
        fetch(url)
          .then((response) => response.text())
          .then((json) =>{
            localStorage.setItem("number",json);
          });      
        }  

    decToAny(n:number,base:number):string{
      return (n).toString(base);
    }
}
