import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-teachers',
  templateUrl: './display-teachers.component.html',
  styleUrls: ['./display-teachers.component.scss']
})
export class DisplayTeachersComponent implements OnInit {

@Input() arrTeachers:Array<number>;

  constructor() { }

  ngOnInit() {
  }

}
