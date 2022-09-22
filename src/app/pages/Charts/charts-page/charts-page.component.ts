import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'charts-page',
  templateUrl: './charts-page.component.html',
  styles: [
  ]
})
export class ChartsPageComponent {

  public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
