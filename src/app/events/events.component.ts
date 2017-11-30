import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MeetupEvent, MeetupEvents } from '../../../functions/src/meetupInterfaces';

@Component({
  selector: 'gw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Observable<MeetupEvents>;

  constructor(store: AngularFirestore) {
    this.events = store
      .collection<MeetupEvent>('events')
      .valueChanges()
      .map(events => events.reverse());
  }

  ngOnInit() {}
}
