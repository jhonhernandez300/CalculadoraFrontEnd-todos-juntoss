import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { IFrequency } from '../data/ifrequency';

@Component({
  selector: 'app-see-orders-sales',
  templateUrl: './see-orders-sales.component.html',
  styleUrls: ['./see-orders-sales.component.css']
})
export class SeeOrdersSalesComponent implements OnInit {

  frequency: IFrequency = {
    bin: null,
    frequency: null,
    intervalsStart: null,
    intervalsEnd: null    
  };

  items: IFrequency;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
     this.getData();
  }

  async getData(){
    try {
      const response = await this.dataService.getSalesOrders();
      console.log('response', response);
      this.items = response.salesOrders     
    } catch (error) {
      
    }
    
    
  }
}
