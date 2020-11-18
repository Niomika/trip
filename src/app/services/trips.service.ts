import { Injectable } from '@angular/core';
import { TestsAndBugsData } from '../TestsAndBugsData';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private TestAndBugsDataCollection: AngularFirestoreCollection<TestsAndBugsData>;
  private CommentsCollection: AngularFirestoreCollection<Comment>;
  Trips: Observable<TestsAndBugsData[]>;

  private backendUrl = 'api/trips';
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.TestAndBugsDataCollection = this.db.collection<TestsAndBugsData>('test');
    this.CommentsCollection = this.db.collection<Comment>('comments');
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
    // API
    return this.http.post<TestsAndBugsData>(this.backendUrl, NewData, this.httpOptions)
      .pipe(tap(_ => console.log('added new data')),
        catchError(this.handleError<TestsAndBugsData>('addNewTestsAndBugsData')));
  }


  getData(): Observable<TestsAndBugsData[]> {
    // Firebase
    const testAndBugsData = this.TestAndBugsDataCollection.valueChanges({ idField: 'id' });
    return testAndBugsData;
    // API
    return this.http.get<TestsAndBugsData[]>(this.backendUrl)
      .pipe(tap(_ => console.log('gotten Data from API')),
        catchError(this.handleError<TestsAndBugsData[]>('getDataFromAPI', [])));
  }

  getTrip(id: any): Observable<TestsAndBugsData> {
    // Firebase
    const Trip = this.db.doc<TestsAndBugsData>(`/trips/${id}`).valueChanges();
    return Trip;
    // API
    const url = `${this.backendUrl}/${id}`;
    return this.http.get<TestsAndBugsData>(url)
      .pipe(tap(_ => console.log('gotten Trip')),
        catchError(this.handleError<TestsAndBugsData>('getTrip')));
  }


  deleteTrip(Trip: TestsAndBugsData): Observable<TestsAndBugsData> {
    // Firebase
    this.db.doc<TestsAndBugsData>(`/trips/${Trip.id}`).delete();
    return of(Trip);
    // API
    const url = `${this.backendUrl}/${Trip.id}`;
    return this.http.delete<TestsAndBugsData>(url, this.httpOptions)
      .pipe(tap(_ => console.log('removed Trip')),
        catchError(this.handleError<TestsAndBugsData>('removeTrip')));
  }

  getComments(tripId: string) {
    return this.db.collection<Comment>('comments',  ref => ref.where('trip_id', '==', tripId )).valueChanges();
  }

  addComment(comment: Comment): Observable<Comment> {
    console.log(comment);
    this.CommentsCollection.add(comment);
    return of(comment);
  }
}
