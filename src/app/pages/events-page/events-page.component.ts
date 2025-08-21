import { Component } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import {LiveEvent} from '@shared/models/live-event.model';
import {LiveEventsService} from '@core/services/live-events.service';

@Component({
  standalone: true,
  selector: 'app-events-page',
  imports: [EventCardComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

		public readonly liveEvents: LiveEvent[] = [];

		constructor(private liveEventService: LiveEventsService) {
			this.liveEvents = this.liveEventService.getLiveEvents();
		}
}
