import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { IFrequency } from '../data/ifrequency';

@Component({
  selector: 'app-see-frequency',
  templateUrl: './see-frequency.component.html',
  styleUrls: ['./see-frequency.component.css']
})
export class SeeFrequencyComponent implements OnInit {

  frequency: IFrequency = {
    bin: null,
    frequency: null,
    intervalsStart: null,
    intervalsEnd: null    
  };

  items: IFrequency;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFrequencies().then((response) => {
      console.log('response', response);
      this.items = response.frequency
    })
    .catch((error) => {
      console.error(': ', error);
    })        
  }
}
