import { Component, OnInit } from '@angular/core';
import { TestAndBugsDataService } from "../services/test-and-bugs-data.service";
import { TestsAndBugsData } from '../TestsAndBugsData';

export interface Option {
  name: string;
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
  datasetLegacyBugs = [];
  labels = [];
  last: TestsAndBugsData;

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
    this.getAndGenerateDoughnatData();
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
        this.datasetLegacyBugs.push(test.legacyBugs);
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
          label: "Not fixed legacy bugs",
          data: this.datasetLegacyBugs,
          fill: false,
          borderColor: "lightskyblue",
          backgroundColor: "lightskyblue"
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

  getAndGenerateDoughnatData() {
    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      this.last = x[x.length-1];
    this.dataforPie = {
      labels: ["Bugs reported by team", "Bugs reported by Clients", "Not fixed critical bugs", "Not fixed legacy bugs", "Not fixed regression bugs"],
      datasets: [
        {
          data: [
            this.last.bugsFromTeam,
            this.last.bugsFromClients,
            this.last.criticalBugs,
            this.last.legacyBugs,
            this.last.regressionBugs
          ],
          backgroundColor: [
            "gold",
            "maroon",
            "red",
            "lightskyblue",
            "pink"
          ]
        }]
      };
      this.chartLoaded = true;
    });
  }


  // method needed to properly reload chart
  async detectChartTypeChange($event) {
    this.chartLoaded = false;
    this.chartType = $event.value;
    await this.delay(100);
    this.chartLoaded = true;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
