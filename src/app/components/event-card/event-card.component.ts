import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LiveEvent} from '@shared/models/live-event.model';

@Component({
  standalone: true,
  selector: 'app-event-card',
  // imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent implements OnChanges {
	@Input() liveEvent: LiveEvent | undefined;

	public startTimePretty: string = '';
	public endTimePretty: string = '';

	constructor() {

	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['liveEvent'] && this.liveEvent) {
			this.startTimePretty = this.liveEvent.startTimeMoment.format('DD/MM/YYYY - hh:mm');
			this.endTimePretty = this.liveEvent.endTimeMoment.format('DD/MM/YYYY - hh:mm');
		}
	}
}
