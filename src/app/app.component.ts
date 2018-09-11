import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { container } from '@angular/core/src/render3/instructions';
import { AdItem } from './ad-item';
import { AdService } from './services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
