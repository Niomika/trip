import { Injectable } from '@angular/core';
import { Trip } from '../../app/trip';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  offersInShoppingCart = 0;
  shoppingCart = [];
  private TripsCollection: AngularFirestoreCollection<Trip>;
  Trips: Observable<Trip[]>;
  private backendUrl = 'api/trips';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.TripsCollection = this.db.collection<Trip>('trips');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  getTrips(): Observable<Trip[]> {
    // Firebase
    const trips = this.TripsCollection.valueChanges({ idField: 'id' });
    console.log('pobranewycieczki w service2');
    return trips;
    // API
    return this.http.get<Trip[]>(this.backendUrl)
      .pipe(tap(_ => console.log('gotten Trips from API')),
        catchError(this.handleError<Trip[]>('getTripsFromAPI', [])));
  }

  getTrip(id: any): Observable<Trip> {
    // Firebase
    const Trip = this.db.doc<Trip>(`/trips/${id}`).valueChanges();
    return Trip;
    // API
    const url = `${this.backendUrl}/${id}`;
    return this.http.get<Trip>(url)
      .pipe(tap(_ => console.log('gotten Trip')),
        catchError(this.handleError<Trip>('getTrip')));
  }

  addTrip(Trip: Trip): Observable<Trip> {
    // Firebase
    this.TripsCollection.add(Trip);
    return of(Trip);
    // API
    return this.http.post<Trip>(this.backendUrl, Trip, this.httpOptions)
      .pipe(tap(_ => console.log('added Trip')),
        catchError(this.handleError<Trip>('addTrip')));
  }

  deleteTrip(Trip: Trip): Observable<Trip> {
    // Firebase
    this.db.doc<Trip>(`/trips/${Trip.id}`).delete();
    return of(Trip);
    // API
    const url = `${this.backendUrl}/${Trip.id}`;
    return this.http.delete<Trip>(url, this.httpOptions)
      .pipe(tap(_ => console.log('removed Trip')),
        catchError(this.handleError<Trip>('removeTrip')));
  }

  addToShoppingCart(Trip: Trip, inCart: number, freePlaces: number) {
    this.db.doc<Trip>(`/trips/${Trip.id}`).update({ inCart: inCart, freePlaces: freePlaces });
    this.offersInShoppingCart += 1;
  }

  removeFromShoppingCart(Trip: Trip, inCart: number, freePlaces: number){
    this.db.doc<Trip>(`/trips/${Trip.id}`).update({ inCart: inCart, freePlaces: freePlaces });
    this.offersInShoppingCart -= 1;
  }

  updateTrip(trip: Trip) {
    this.db.doc<Trip>(`/trips/${trip.id}`).update(trip);
  }

  getOffersInShoppingCart(): number {
    console.log(this.offersInShoppingCart);
    return this.offersInShoppingCart;
  }

  removeOneTripFromCart(trip: Trip) {
    this.db.doc<Trip>(`/trips/${trip.id}`).update({ inCart: 0, freePlaces: trip.limit });
  }



  /*offersInShoppingCart = 0;
  trips: Trip[] = TRIPS;
  constructor() { }

  getTrips(): Trip[] {
    return this.trips;
  }

  getTrip(id: number): Trip {
    return this.trips.find(x => x.id === id);
  }

  addTrip(trip: Trip): void {
    this.trips.push(trip);
  }




*/
}
