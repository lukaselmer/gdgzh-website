import * as request from 'request-promise';
import { MeetupEvents } from './meetupInterfaces';

/**
 * Meetup Events API Endpoint URL
 *
 * Generate the url here: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
 * check "Prefer secure photo links"
 * for :urlname, insert GDG-Zurich
 * for scroll, insert future_or_past
 * for page, insert 1000
 *
 * meetupEventsApiUrl is the signed url.
 */
const meetupEventsApiUrl =
  // tslint:disable-next-line:max-line-length
  'https://api.meetup.com/GDG-Zurich/events?scroll=future_or_past&photo-host=secure&page=1000&sig_id=13174207&sig=f953bb9fe67f36478d0ff811dc417c2cd11b7fd3';

export async function fetchMeetupEvents(): Promise<MeetupEvents> {
  const response = await request(meetupEventsApiUrl);
  return JSON.parse(response);
}
