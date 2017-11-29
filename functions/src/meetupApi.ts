import * as request from 'request-promise';

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

// The meetup events api endpoint will return a json of type MeetupEvents
export type MeetupEvents = MeetupEvent[];

export async function fetchMeetupEvents(): Promise<MeetupEvents> {
  const response = await request(meetupEventsApiUrl);
  return JSON.parse(response);
}

export interface MeetupEvent {
  created: number;
  id: string;
  name: string;
  status: string;
  time: number;
  local_date: string;
  local_time: string;
  updated: number;
  utc_offset: number;
  waitlist_count: number;
  yes_rsvp_count: number;
  venue: MeetupVenue;
  group: MeetupGroup;
  link: string;
  description: string;
  visibility: string;
  pro_is_email_shared: boolean;
}

export interface MeetupVenue {
  id: number;
  name: string;
  lat: number;
  lon: number;
  repinned: boolean;
  address_1: string;
  city: string;
  country: string;
  localized_country_name: string;
}

export interface MeetupGroup {
  created: number;
  name: string;
  id: number;
  join_mode: string;
  lat: number;
  lon: number;
  urlname: string;
  who: string;
  localized_location: string;
  region: string;
}
