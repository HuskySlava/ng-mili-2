import { Injectable } from '@angular/core';
import {LiveEventsService} from '@core/services/live-events.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
	constructor(private liveEventsService: LiveEventsService) {

	}

	public async init() : Promise<void> {
		await this.liveEventsService.init();
	}

}
