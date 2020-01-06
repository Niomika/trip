import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private OrdersCollection: AngularFirestoreCollection<Order>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.OrdersCollection = this.db.collection<Order>('orders');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  getOrders(): Observable<Order[]> {
    const orders = this.OrdersCollection.valueChanges({ idField: 'id' });
    return orders;
  }

  getOrder(id: any): Observable<Order> {
    const order = this.db.doc<Order>(`/orders/${id}`).valueChanges();
    return order;
  }

  addOrder(order): Observable<Order> {
    this.OrdersCollection.add(order);
    return of(order);
  }

  deleteOrder(order: Order): Observable<Order> {
    this.db.doc<Order>(`/orders/${order.id}`).delete();
    return of(order);
  }
}
