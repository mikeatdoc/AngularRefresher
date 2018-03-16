import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterLink } from '@angular/router';


import { AppComponent } from "./app.component";
import { TimeCardComponent} from "./timecard/timecard.component";


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TimeCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
