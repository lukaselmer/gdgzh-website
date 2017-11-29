import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Meetup } from './meetup';

@Component({
  selector: 'gw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Observable<Meetup[]>;

  constructor(db: AngularFirestore) {
    this.events = db.collection<Meetup>('events').valueChanges();
  }

  ngOnInit() {}
}
