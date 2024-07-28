import {Component, inject} from '@angular/core';
import {HousingLocationInterface} from "../interfaces/housing-location.interface";
import {HousingService} from "../services/housing.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  housingService = inject(HousingService);
  housingLocationList!: HousingLocationInterface[];
  filteredLocationList: HousingLocationInterface[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocationInterface[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
