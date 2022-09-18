import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icolor } from 'src/app/interfaces/icolor';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  colors$: Observable<Icolor[]>;
  constructor(private colorService: ColorService) {
    this.colors$ = colorService.getColors();
  }

  ngOnInit(): void {}
}
