import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-chart',
  templateUrl: './tests-chart.component.html',
  styleUrls: ['./tests-chart.component.css']
})
export class TestsChartComponent implements OnInit {

  data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }
  ngOnInit() {
  }

}
