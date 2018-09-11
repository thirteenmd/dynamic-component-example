import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdDirective } from './directives/ad.directive';
import { JobAdComponent } from './components/job-ad/job-ad.component';
import { UniversityAdComponent } from './components/university-ad/university-ad.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';

import { AdService } from './services/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    JobAdComponent,
    UniversityAdComponent,
    AdBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [JobAdComponent, UniversityAdComponent]
})
export class AppModule { }
