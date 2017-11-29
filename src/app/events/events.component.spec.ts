import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { MeetupEvent } from '../../../functions/src/meetupApi';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  const firestoreMock = {
    collection: () => {
      return {
        valueChanges: () => {
          return Observable.of<MeetupEvent[]>([
            {
              name: 'Hello GDG Zurich',
              description: 'Welcome...',
              hostedAt: '2000'
            } as any
          ]);
        }
      };
    }
  };

  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EventsComponent],
        providers: [
          {
            provide: AngularFirestore,
            useValue: firestoreMock
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the events', () => {
    const element: HTMLElement = fixture.nativeElement;
    const h2 = element.querySelector('h2');
    if (!h2) throw new Error('h2 not found');

    expect(h2.innerText).toEqual('Hello GDG Zurich');
  });
});
