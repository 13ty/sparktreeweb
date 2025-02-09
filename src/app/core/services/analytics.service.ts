import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private router: Router) {
    this.trackPageViews();
  }

  private trackPageViews() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.logPageView(event.urlAfterRedirects);
      });
  }

  logPageView(url: string) {
    console.log('Page viewed:', url);
    // Implement actual analytics tracking here
  }
}
