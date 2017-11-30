import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { MeetupEvent } from '../../../functions/src/meetupInterfaces';
import { MaterialModule } from '../material/material.module';
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
        imports: [MaterialModule],
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
    const title = element.querySelector('mat-card-title');
    if (!title) throw new Error('mat-card-title not found');

    expect((title as any).innerText).toEqual('Hello GDG Zurich');
  });
});
