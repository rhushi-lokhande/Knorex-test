import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	weatherData;
	cities = [
		{ name: 'Ho Chi Minh', value: 'Saigon' },
		{ name: 'Singapore', value: 'Singapore' },
		{ name: 'Kuala Lumpur', value: 'Kuala Lumpur' },
		{ name: 'Tokyo', value: 'Tokyo' },
		{ name: 'Athens', value: 'Athens' }]
	city;
	constructor(private appService: AppService, private cdf: ChangeDetectorRef) {
		this.city = this.cities[0].value;
	}

	ngOnInit() {
		this.getWeatherData();
	}
	getWeatherData() {
		this.weatherData = null;
		this.appService.getWeatherData(this.city).subscribe(res => {
			this.weatherData = res;
			this.cdf.markForCheck();
		})
	}

	getTodayData() {
		return this.weatherData.list[0];
	}

}
