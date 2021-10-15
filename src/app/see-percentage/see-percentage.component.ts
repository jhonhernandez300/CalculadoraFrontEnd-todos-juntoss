import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { IPercentage } from '../data/ipercentage';

@Component({
  selector: 'app-see-percentage',
  templateUrl: './see-percentage.component.html',
  styleUrls: ['./see-percentage.component.css']
})
export class SeePercentageComponent implements OnInit {

  percentage: IPercentage = {
    itemType: null,
    frequency: null,
    relFrequency: null,
    porcentageFrecuency: null    
  };

  items: IPercentage;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPercentage().then((response) => {
      console.log('response', response);
      this.items = response.percentage
    })
    .catch((error) => {
      console.error(': ', error);
    })        
  }

}
