import { Component, OnInit } from "@angular/core";
import { TestsAndBugsData } from "../TestsAndBugsData";
import { TestAndBugsDataService } from "../services/test-and-bugs-data.service";

export interface Option {
  name: string;
  id: number;
}

export interface DateOption {
  date: Date;
  id: number;
}

@Component({
  selector: "app-new-and-fixed-chart",
  templateUrl: "./new-and-fixed-chart.component.html",
  styleUrls: ["./new-and-fixed-chart.component.css"],
})
export class NewAndFixedChartComponent implements OnInit {
  data: any;
  datasetNewBugsFromTeam = [];
  datasetNewBugsFromClients = [];
  datasetNewFixedBugsFromTeam = [];
  datasetNewFixedBugsFromClients = [];
  labels = [];
  last: TestsAndBugsData;
  pieChartLoaded = false;
  newBugsData: any;
  fixedBugsData: any;
  dates: DateOption[];
  datesLoaded = false;

  chartTypes: Option[] = [
    { name: "line", id: 1 },
    { name: "bar", id: 2 },
    { name: "radar", id: 3 },
    { name: "pie", id: 4 },
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
    this.datasetNewBugsFromClients = [];
    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      x.forEach((test) => {
        this.labels.push(test.date);
        this.datasetNewBugsFromClients.push(test.newBugsFromClients);
        this.datasetNewBugsFromTeam.push(test.newBugsFromTeam);
        this.datasetNewFixedBugsFromClients.push(test.newFixedBugsFromClients);
        this.datasetNewFixedBugsFromTeam.push(test.newFixedBugsFromTeam);
      });
      this.generateChartsData();
    });
  }

  generateChartsData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: "New bugs reported by team",
          data: this.datasetNewBugsFromTeam,
          fill: false,
          borderColor: "pink",
          backgroundColor: "pink",
        },
        {
          label: "New bugs reported by Clients",
          data: this.datasetNewBugsFromClients,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "New fixed bugs reported by team",
          data: this.datasetNewFixedBugsFromTeam,
          fill: false,
          borderColor: "mediumspringgreen",
          backgroundColor: "mediumspringgreen",
        },
        {
          label: "New fixed bugs reported by clients",
          data: this.datasetNewFixedBugsFromClients,
          fill: false,
          borderColor: "green",
          backgroundColor: "green",
        },
      ],
    };
    this.chartLoaded = true;
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

  preparePieData(date: Date) {
    let datasetNewUser = [];
    let datasetNewTeam = [];
    let datasetFixedUser = [];
    let datasetFixedTeam = [];
    let labels = [];

    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.filter(
        (x) => new Date(x.date).getTime() === new Date(date).getTime()
      );
      console.log(x);
      x.forEach((test) => {
        labels.push(test.date);
        datasetNewUser.push(test.newBugsFromClients);
        datasetNewTeam.push(test.newBugsFromTeam);
        datasetFixedUser.push(test.newFixedBugsFromClients);
        datasetFixedTeam.push(test.newFixedBugsFromTeam);
      });
      this.generatePieData(
        datasetNewUser,
        datasetNewTeam,
        datasetFixedUser,
        datasetFixedTeam
      );
    });
  }

  async generatePieData(
    datasetNewUser,
    datasetNewTeam,
    datasetFixedUser,
    datasetFixedTeam
  ) {
    this.newBugsData = {
      labels: ["Bugs reported by team", "Bugs reported by Clients"],
      datasets: [
        {
          data: [datasetNewUser, datasetNewTeam],
          backgroundColor: ["gold", "maroon"],
        },
      ],
    };

    this.fixedBugsData = {
      labels: ["Bugs reported by team", "Bugs reported by Clients"],
      datasets: [
        {
          data: [datasetFixedUser, datasetFixedTeam],
          backgroundColor: ["gold", "maroon"],
        },
      ],
    };
    await this.delay(100);
    this.pieChartLoaded = true;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
