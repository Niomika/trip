import { Component, OnInit } from '@angular/core';
import { TestAndBugsDataService } from "../services/test-and-bugs-data.service";
import { TestsAndBugsData } from '../TestsAndBugsData';

export interface Option {
  name: string;
  id: number;
}
export interface DateOption {
  date: Date;
  id: number;
}

@Component({
  selector: 'app-bugs-chart',
  templateUrl: './bugs-chart.component.html',
  styleUrls: ['./bugs-chart.component.css']
})

export class BugsChartComponent implements OnInit {
  data: any;
  dataforPie: any;
  datasetBugsFromTeam = [];
  datasetBugsFromClients = [];
  datasetCriticalBugs = [];
  datasetRegressionBugs = [];
  labels = [];
  pieChartLoaded = false;
  dates: DateOption[];
  datesLoaded = false;

  chartTypes: Option[] = [
    { name: "line", id: 1 },
    { name: "bar", id: 2 },
    { name: "radar", id: 3 },
    { name: "pie", id: 4}
  ];

  chartType: Option;
  chartLoaded = false;

  constructor(private _testAndBugsDataService: TestAndBugsDataService) {
    this.chartType = this.chartTypes[0];
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    {
    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      x.forEach((test) => {
        this.labels.push(test.date);
        this.datasetBugsFromClients.push(test.bugsFromClients);
        this.datasetBugsFromTeam.push(test.bugsFromTeam);
        this.datasetCriticalBugs.push(test.criticalBugs);
        this.datasetRegressionBugs.push(test.regressionBugs);
      });
        this.generateChartsData();
      });
    }
  }

  generateChartsData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: "Bugs reported by team",
          data: this.datasetBugsFromTeam,
          fill: false,
          borderColor: "gold",
          backgroundColor: "gold"
        },
        {
          label: "Bugs reported by Clients",
          data: this.datasetBugsFromClients,
          fill: false,
          borderColor: "maroon",
          backgroundColor: "maroon"
        },
        {
          label: "Not fixed critical bugs",
          data: this.datasetCriticalBugs,
          fill: false,
          borderColor: "red",
          backgroundColor: "red"
        },
        {
          label: "Not fixed regression bugs",
          data: this.datasetRegressionBugs,
          fill: false,
          borderColor: "pink",
          backgroundColor: "pink"
        },
      ],
    };
    this.chartLoaded = true;
  }


  preparePieData(date: Date) {
    let datasetOtherBugs = [];
    let datasetCriticalBugs = [];
    let datasetRegression = [];
    let labels = [];

    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.filter(
        (x) => new Date(x.date).getTime() === new Date(date).getTime()
      );
      console.log(x);
      x.forEach((test) => {
        labels.push(test.date);
        let otherBugs = test.bugsFromClients+test.bugsFromTeam-test.criticalBugs-test.regressionBugs;
        datasetOtherBugs.push(otherBugs);
        datasetCriticalBugs.push(test.criticalBugs);
        datasetRegression.push(test.regressionBugs);
      });
      this.generatePieData(
        datasetOtherBugs,
        datasetCriticalBugs,
        datasetRegression
      );
    });
  }

  async generatePieData(
    datasetOtherBugs,
    datasetCriticalBugs,
    datasetRegression
  ) {
    this.dataforPie = {
      labels: ["Other bugs", "Criticalbugs", "Regression bugs"],
      datasets: [
        {
          data: [datasetOtherBugs,datasetCriticalBugs,datasetRegression],
          backgroundColor: ["lightgreen", "red", "pink"],
        },
      ],
    };
    await this.delay(100);
    this.pieChartLoaded = true;
  }

  loadDates() {
    this._testAndBugsDataService.getData().subscribe((x) => {
      this.dates = [];
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      x.forEach((test) => {
        this.dates.push({ id: x.indexOf(test), date: test.date });
      });
      console.log(this.dates);
    });
  }

  async detectDateChange($event) {
    this.pieChartLoaded = false;
    this.preparePieData($event.value.date);
  }

  // method needed to properly reload chart
  async detectChartTypeChange($event) {
    this.chartLoaded = false;
    this.pieChartLoaded = false;
    this.datesLoaded = false;
    this.chartType = $event.value;
    if (this.chartType.name === "pie") {
      this.loadDates();
      await this.delay(100);
      this.datesLoaded = true;
    } else {
      await this.delay(100);
      this.chartLoaded = true;
    }
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
