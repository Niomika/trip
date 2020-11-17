import { TripsService } from '../services/trips.service';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestsAndBugsData } from '../TestsAndBugsData'


@Component({
  selector: 'add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.css']
})
export class AddNewDataComponent {

  constructor(private tripsService: TripsService){}

  newDataForm = new FormGroup({
    date: new FormControl(''),
    manualTests: new FormControl(''),
    succesManualTests: new FormControl(''),
    automaticTests: new FormControl(''),
    succesAutomaticTests: new FormControl(''),
    bugsFromTeam: new FormControl(''),
    bugsFromClients: new FormControl(''),
    criticalBugs: new FormControl(''),
    regressionBugs: new FormControl(''),
    legacyBugs: new FormControl(''),
    newBugsFromTeam: new FormControl(''),
    newBugsFromClients: new FormControl(''),
    newFixedBugsFromTeam: new FormControl(''),
    newFixedBugsFromClients: new FormControl('')
  });

  onSubmit() {
    this.tripsService.addNewTestsAndBugsData(this.newDataForm.value).subscribe(res => {
      console.log(res);
      this.newDataForm.reset();
    });
  }
}
