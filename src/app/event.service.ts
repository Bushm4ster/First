import { Injectable } from '@angular/core';
import { GLOBAL } from './app-confing';
import { Event } from 'src/Modals/event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  tabEvent: any[] = GLOBAL._DB.events;

  constructor(private httpClient:HttpClient) { }

  // getAll(): Observable<Event[]> {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events');
  // }

  getAll(): any{
    return this.tabEvent;
  }

  // saveEvent(eventToSave: Event): Observable<Event[]> {
  //   return this.httpClient.post<Event[]>('http://localhost:8080/api/events');
  // }

  saveEvent(eventToSave: any): Observable<Event[]> {
    const NewEvent = {
      ...eventToSave,
      id: eventToSave.id ?? Math.ceil(Math.random() * 1000).toString(),
    }
    console.log(NewEvent);
    this.tabEvent = [NewEvent, ...this.tabEvent.filter(item => item.id != NewEvent.id)]
    return new Observable(observer => {observer.next()});
  }
  
}
