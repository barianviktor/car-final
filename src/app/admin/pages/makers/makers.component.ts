import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imaker } from 'src/app/interfaces/imaker';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.scss'],
})
export class MakersComponent implements OnInit {
  makers$: Observable<Imaker[]>;
  constructor(private makerService: MakerService) {
    this.makers$ = makerService.getMakers();
  }
  ngOnInit(): void {}
}
