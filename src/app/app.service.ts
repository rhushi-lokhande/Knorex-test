import { Injectable } from '@angular/core';
import { CONST } from './constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(private http: HttpClient) { }

	getWeatherData(city: String, cnt: Number = 4) {
		return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${CONST.appId}&units=metric`);
	}
}
