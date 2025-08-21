import { Injectable } from '@angular/core';
import {LiveEvent} from '@shared/models/live-event.model';
import {sleep} from '@shared/utils';

@Injectable({
	providedIn: 'root'
})
export class LiveEventsService {
	private liveEvents: LiveEvent[] = [];
	constructor() {}

	public async init() : Promise<void> {
		// FIXME: api sim
		const event = new LiveEvent({
			id: 0,
			name: 'Rock Is Back',
			location: {
				locationId: 0,
				locationName: "The good place",
				locationGoogleMapUrl: "https://www.google.com",
			},
			startTimeUnix: 1756166400,
			endTimeUnix: 1756249200,
			orderImgUrl: "https://cdnpad.eventbuzz.co.il/924d6bb7e02ee4163bed8ca1079e823b.jpg",
			orderUrl: "https://google.com",
		})
		this.liveEvents.push(event);
		await sleep(1000);
	}

	public getLiveEvents(){
		return this.liveEvents;
	}

}
