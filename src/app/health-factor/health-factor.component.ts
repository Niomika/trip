import { Component, OnInit } from '@angular/core';

import { TestAndBugsDataService } from "../services/test-and-bugs-data.service";
import { TestsAndBugsData } from '../TestsAndBugsData';

@Component({
  selector: 'app-health-factor',
  templateUrl: './health-factor.component.html',
  styleUrls: ['./health-factor.component.css']
})
export class HealthFactorComponent implements OnInit {
  factor;
  percentOfPassedTests = [];
  newClientBugsToAllNew = [];
  criticalAndRegressionToAll = [];
  dates = [];
  datesLoaded = false;

  constructor(private _testAndBugsDataService: TestAndBugsDataService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._testAndBugsDataService.getData().subscribe((x) => {
      x = x.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      x.shift();
      x.forEach((test) => {
        let allnew = test.newBugsFromClients+test.newBugsFromTeam;
        let allbugs =(test.bugsFromTeam+test.bugsFromClients);
        this.dates.push(test.date);
        this.percentOfPassedTests.push((test.succesManualTests+test.succesAutomaticTests)/(test.manualTests+test.automaticTests));
        this.newClientBugsToAllNew.push(test.newBugsFromTeam*0.7/allnew);
        this.criticalAndRegressionToAll.push((allbugs-(test.criticalBugs*2+test.regressionBugs*1.5))/allbugs);
      });
      this.CountFactor();
    });
  }

  CountFactor(){
    this.factor = Math.round((4/10*this.average(this.percentOfPassedTests)+3/10*this.average(this.newClientBugsToAllNew)+3/10*this.average(this.criticalAndRegressionToAll))*100)
    console.log(this.average(this.percentOfPassedTests));
    console.log(this.average(this.newClientBugsToAllNew));
    console.log(this.average(this.criticalAndRegressionToAll));
    console.log(this.factor);
  }

  average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

