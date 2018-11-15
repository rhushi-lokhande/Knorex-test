import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {

	@Input() weatherDetails;
	@Input() isToday;
	constructor() { }


	getIcon() {
		return `http://openweathermap.org/img/w/${this.weatherDetails.weather[0].icon}.png`
	}

	

	getDate() {
		let d = new Date(this.weatherDetails.dt * 1000);
		return d.getDate() + '/' + (d.getMonth() + 1);
	}
}
