import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartpoint-icon',
  templateUrl: './smartpoint-icon.component.html',
  styleUrls: ['./smartpoint-icon.component.scss'],
})
export class SmartpointIconComponent implements OnInit {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
