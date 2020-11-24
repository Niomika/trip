import { Injectable } from '@angular/core';
import { TestsAndBugsData } from '../TestsAndBugsData';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TestAndBugsDataService {

  private TestAndBugsDataCollection: AngularFirestoreCollection<TestsAndBugsData>;
  tests: Observable<TestsAndBugsData[]>;

  constructor(private db: AngularFirestore) {
    this.TestAndBugsDataCollection = this.db.collection<TestsAndBugsData>('testsAndBugsData');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  addNewTestsAndBugsData(NewData: TestsAndBugsData): Observable<TestsAndBugsData> {
    // Firebase
    this.TestAndBugsDataCollection.add(NewData);
    return of(NewData);
  }


  getData(): Observable<TestsAndBugsData[]> {
    // Firebase
    const testAndBugsData = this.TestAndBugsDataCollection.valueChanges({ idField: 'id' });
    return testAndBugsData;
  }
}
