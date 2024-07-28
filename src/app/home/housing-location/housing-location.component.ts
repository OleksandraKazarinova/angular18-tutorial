import {Component, Input} from '@angular/core';
import {HousingLocationInterface} from "../../interfaces/housing-location.interface";

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationInterface;
}
