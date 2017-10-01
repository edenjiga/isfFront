import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() name: string;
  @Input() provider: string;
  @Input() totalHours: number;
  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
