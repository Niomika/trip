import { Component, OnInit } from "@angular/core";
import { TestAndBugsDataService } from "../services/test-and-bugs-data.service";


export interface Option {
  name: string;
  id: number;
}

@Component({
  selector: "app-tests-chart",
  templateUrl: "./tests-chart.component.html",
  styleUrls: ["./tests-chart.component.css"],
})
export class TestsChartComponent implements OnInit {
  data: any;
  datasetManualTests = [];
  datasetPassedManualTests = [];
  datasetAutomaticTests = [];
  datasetPasssedAutomiticTests = [];
  labels = [];

  chartTypes: Option[] = [
    { name: "line", id: 1 },
    { name: "bar", id: 2 },
    { name: "radar", id: 3 }
  ];

  chartType: Option;
  chartLoaded = false;

  constructor(private _testAndBugsDataService: TestAndBugsDataService) {
    this.chartType = this.chartTypes[0];
  }

  ngOnInit() {
    this.getData();
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

  getData() {
    this._testAndBugsDataService.getData().subscribe((x) => {
      console.log(x);
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      x.forEach((test) => {
        this.labels.push(test.date);
        this.datasetManualTests.push(test.manualTests);
        this.datasetAutomaticTests.push(test.automaticTests);
        this.datasetPassedManualTests.push(test.succesManualTests);
        this.datasetPasssedAutomiticTests.push(test.succesAutomaticTests);
      });
      console.log(this.datasetManualTests);
      this.generateChartsData();
    });
  }

  generateChartsData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: "Manual Tests",
          data: this.datasetManualTests,
          fill: false,
          borderColor: "skyblue",
          backgroundColor: "skyblue"
        },
        {
          label: "Automatic Tests",
          data: this.datasetAutomaticTests,
          fill: false,
          borderColor: "blue",
          backgroundColor: "blue"
        },
        {
          label: "Passed Manual Tests",
          data: this.datasetPassedManualTests,
          fill: false,
          borderColor: "green",
          backgroundColor: "green"
        },
        {
          label: "Passed Automatic Tests",
          data: this.datasetPasssedAutomiticTests,
          fill: false,
          borderColor: "lawngreen",
          backgroundColor: "lawngreen"
        },
      ],
    };
    this.chartLoaded = true;
  }
}
