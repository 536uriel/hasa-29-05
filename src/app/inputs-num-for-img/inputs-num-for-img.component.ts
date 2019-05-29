import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs-num-for-img',
  templateUrl: './inputs-num-for-img.component.html',
  styleUrls: ['./inputs-num-for-img.component.scss']
})
export class InputsNumForImgComponent implements OnInit {
@Output() outStudents:EventEmitter<number> = new EventEmitter<number>();
@Output() outTeachers:EventEmitter<number> = new EventEmitter<number>();

  numOfStudents:number = 16;
  numOfTeachers:number = 4;

  sendNumForArrey(){
    if(this.numOfStudents > 1 && this.numOfTeachers > 1){
    this.outStudents.emit(this.numOfStudents);
    this.outTeachers.emit(this.numOfTeachers);
    }
  }

  plusStudents(){

      this.numOfStudents++
    
  }

  minusStudents(){
    if(this.numOfStudents > 1){
      this.numOfStudents--;
    }
  }

  plusTeachears(){
    this.numOfTeachers++;
  }

  minusTeachers(){
    if(this.numOfTeachers > 1){
      this.numOfTeachers--;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
