import {bootstrapApplication} from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import {appConfig} from './app/app.config';
import {App} from './app/app';
import {InitService} from '@core/services/init.service';

function initApp(initService: InitService) {
	return async () => {
		await initService.init();
		const loaderAnimationOverlay: HTMLElement | null = document.querySelector('#loader-animation');
		if(loaderAnimationOverlay){
			loaderAnimationOverlay.style.display = 'none';
		}
	}
}

bootstrapApplication(App, {
		...appConfig,
		providers: [
			InitService,
			{
				provide: APP_INITIALIZER,
				useFactory: initApp,
				multi: true,
				deps: [InitService]
			}
		],
	}
).catch((err) => console.error(err));
