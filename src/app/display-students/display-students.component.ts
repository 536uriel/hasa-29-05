import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit ,AfterViewChecked{
  @Input() arrStudents:Array<number>;
  @Input() imageSrc:Array<any>;
  @Input() RHW:Array<number>;
  @Input() RGS:Array<number>;
  @Input() RR:Array<number>;
  @Input() name:Array<string>;
 
  constructor() { 
  }

  upperthree:boolean = true;

  drowImg(event){
    var str:string = event;
    var canvas = <HTMLCanvasElement>document.getElementById(str);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2,canvas.height / 2);
    var img = <HTMLImageElement>document.getElementById("i" + str.slice(1,3));
    img.style.filter = "grayscale(" + this.RGS[parseInt(str.slice(1,3))] + "%)";
    ctx.filter = "grayscale(" + this.RGS[parseInt(str.slice(1,3))] + "%)";
    img.style.transform = "rotate(" + this.RR[parseInt(str.slice(1,3))] + "deg)";
    ctx.rotate(this.RR[parseInt(str.slice(1,3))] * Math.PI / 180);
    ctx.drawImage(img,-img.width / 2,-img.height / 2,img.width,img.height);
    ctx.restore();
    
    if(this.name[parseInt(str.slice(1,3))]){
    ctx.font = "15px Arial";
    ctx.fillText(this.name[parseInt(str.slice(1,3))],60,canvas.height - 10)
    }

  }
      
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        var str:string = event.target.id;
        const reader = new FileReader();
        reader.readAsDataURL(file);
   
        reader.onload = (e) => {this.imageSrc[str.slice(1,3)] = reader.result;}
    
  
    }
}

  ngOnInit() {
    this.RHW = new Array<number>(32);
    this.RGS = new Array<number>(32);
    this.RR = new Array<number>(32);
    this.name = new Array<string>(32);

    
    for(var i = 0;i < this.RGS.length;i++){
      this.RHW[i] = 50;
      this.RGS[i] = 50;
      this.RR[i] = 0;
    
    }
  }

  ngAfterViewChecked(){
    for(var i = 0; i < this.arrStudents.length;i++){
      var canvas = <HTMLCanvasElement>document.getElementById('c' + i);
      var img = <HTMLImageElement>document.getElementById('Portrait');
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
    }
 

  }

}


