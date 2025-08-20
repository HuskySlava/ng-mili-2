import { Injectable } from '@angular/core';
import { sleep } from '@shared/utils';

@Injectable({
  providedIn: 'root'
})
export class InitService {
	constructor() {}

	public async init() : Promise<void> {
		// FIXME:
		// Remove Simulate init
		await sleep(1000)
	}

}
