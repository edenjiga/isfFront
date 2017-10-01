import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  @Input() imgId: string;
  @Input() name: string;
  @Input() provider: string;
  @Input() totalHours: number;
  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }
}
