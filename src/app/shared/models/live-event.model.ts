import moment, { Moment } from 'moment';

interface EventLocation {
	locationId: number;
	locationName: string;
	locationGoogleMapUrl: string;
}

interface LiveEventData {
	id: number;
	name: string;
	location: EventLocation;
	startTimeUnix: number;
	endTimeUnix: number;
	orderImgUrl: string;
	orderUrl: string;
}

export class LiveEvent implements LiveEventData {

	public startTimeMoment: Moment;
	public endTimeMoment: Moment;

	public id: number;
	public name: string;
	public location: EventLocation;
	public orderImgUrl: string;
	public orderUrl: string;
	public startTimeUnix: number;
	public endTimeUnix: number;

	constructor(eventData: LiveEventData) {
		this.id = eventData.id;
		this.name = eventData.name;
		this.location = eventData.location;
		this.orderImgUrl = eventData.orderImgUrl;
		this.orderUrl = eventData.orderUrl;

		this.startTimeUnix = eventData.startTimeUnix;
		this.endTimeUnix = eventData.endTimeUnix;

		// Assuming Unix timestamp is in seconds
		this.startTimeMoment = moment(eventData.startTimeUnix * 1000);
		this.endTimeMoment = moment(eventData.endTimeUnix * 1000);
	}

	openOrderUrl() {
		return window.open(this.orderUrl, '_self');
	}
}
