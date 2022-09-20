import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idesign } from 'src/app/interfaces/idesign';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  designs$: Observable<Idesign[]>;
  constructor(private designService: DesignService) {
    this.designs$ = this.designService.getDesigns();
  }
  ngOnInit(): void {}
}
