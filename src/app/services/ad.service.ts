import { Injectable } from '@angular/core';

import { JobAdComponent } from '../components/job-ad/job-ad.component';
import { UniversityAdComponent } from '../components/university-ad/university-ad.component';
import { AdItem } from '../ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(JobAdComponent, { headline: 'Nurse', body: 'We need a nurse!' }),
      new AdItem(JobAdComponent, { headline: 'Web Developer', body: 'Looking for web developer, we really need one!' }),
      new AdItem(UniversityAdComponent, { name: 'UTM', description: 'Call for applicats!!!' })
    ]
  }
}
