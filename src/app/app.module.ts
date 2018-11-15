import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// component
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';

// services
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
