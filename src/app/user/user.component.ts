import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  storeImg:any = {img:''};
  
  
 constructor(public auth:AuthService,private DB:DataBaseService){
  for(var i = 0;i < this.studentsArr.length;i++){
    this.studentsArr[i] = i;
    
  }

}


makeCanvasToImg(){
  var counterx = 1;
  var countery = 10;
  for(var i = 0;i < this.studentsArr.length;i++){
    var canvas = <HTMLCanvasElement>document.getElementById('c' + i);
    var mainCanvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
    var ctx = mainCanvas.getContext('2d');
    ctx.drawImage(canvas,counterx*50,countery,45,28);
    counterx++;
    if(i % 6 ==0){
       countery += 35;
       counterx = 1;
    }
    
  }

}

readURL(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
     var img = reader.result;
    this.storeImg.img = img;
    }
  }
}

addimg(){
  
   this.DB.addImg(this.storeImg);
}

 studentsArr:Array<number> = new Array<number>(16);
 teachersArr:Array<number> = new Array<number>(4);
 range:Array<number> = new Array<number>(16);
 range2:Array<number> = new Array<number>(16);
 range3:Array<number> = new Array<number>(16);
 stuName:Array<string> = new Array<string>(16);
 
 imgS:Array<any> = new Array<any>(this.studentsArr.length);

 setStudentsArrey(event){
 
    this.studentsArr.length = event;
    this.range.length = event;
    this.range2.length = event;
    this.range3.length = event;
    this.stuName.length = event;

    for(var i = 0;i < this.range.length;i++){
      this.range[i] = 50;
      this.range2[i] = 50;
      this.range3[i] = 0;
    }

    for(let i = 0;i < this.studentsArr.length;i++){
     this.studentsArr[i] = i;
   }
   
    this.imgS.length = event;
 }

 setTechersArrey(event){
   this.teachersArr.length = event;
 }

  ngOnInit() {
  }

}
