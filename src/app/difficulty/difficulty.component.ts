import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-difficulty',
  standalone: true,
  imports: [],
  templateUrl: './difficulty.component.html',
  styleUrl: './difficulty.component.css'
})
export class DifficultyComponent {
  @Output('diff') diffEvent = new EventEmitter<string>();
  @Output('type') typeEvent = new EventEmitter<string>();
  indexD:number=0;
  indexT:number=0;
  diff:Array<string>=["Beginner","Intermediate","Advanced"];
  type:Array<string>=["BIN","OCT","HEX"];
  changeD(c:number){
    this.indexD+=c;
    if(this.indexD==-1)
      this.indexD=2;
    if(this.indexD==3)
      this.indexD=0;
    this.diffEvent.emit(this.diff[this.indexD]);
  }
  changeT(c:number){
    this.indexT+=c;
    if(this.indexT==-1)
      this.indexT=2;
    if(this.indexT==3)
      this.indexT=0;
    this.typeEvent.emit(this.type[this.indexT]);
  }
}
