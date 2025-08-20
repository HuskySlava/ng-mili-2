import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

interface MenuItem {
	id: string;
	title: string;
}

@Component({
	selector: 'app-header',
	// imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [
		NgClass
	],
	standalone: true
})
export class HeaderComponent {
	public readonly menuItems: MenuItem[] = [
		{
			id: 'events',
			title: 'Афиша'
		},
		{
			id: 'contact',
			title: 'Связь'
		},
		{
			id: 'about',
			title: 'О нас'
		}
	];
	public selectedMenuItem: MenuItem;

	constructor() {
		this.selectedMenuItem = this.menuItems[0];
	}

	public menuItemChange(menuItem: MenuItem) {
		this.selectedMenuItem = menuItem;
		// TODO: Router update
	}
}
