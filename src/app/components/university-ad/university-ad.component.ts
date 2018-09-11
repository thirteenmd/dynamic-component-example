import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-university-ad',
  templateUrl: './university-ad.component.html',
  styleUrls: ['./university-ad.component.css']
})
export class UniversityAdComponent implements AdComponent {

  @Input() data: any;

  constructor() { }
}
