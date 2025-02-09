import { Component } from '@angular/core';
import { PlatformService } from '../../core/services/platform.service';
import { Platform } from '../../core/models/platform.model';
import { PlatformCardComponent } from '../../shared/components/platform-card/platform-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlatformCardComponent, CommonModule],
  template: `
    <div class="home-container">
      <h1>Spark Network</h1>
      <p class="tagline">Grow Local. Grow Together.</p>
      
      <section class="platforms">
        <app-platform-card 
          *ngFor="let platform of platforms" 
          [platform]="platform">
        </app-platform-card>
      </section>

      <section class="mission">
        <h2>Our Mission</h2>
        <p>
          Spark Network is a revolutionary platform that connects creators 
          and companies to support local businesses and foster sustainable 
          growth through collaboration.
        </p>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .tagline {
      font-size: 1.5em;
      color: #FFC107;
      margin-bottom: 30px;
    }
    .platforms {
      display: flex;
      justify-content: space-around;
      margin-bottom: 40px;
    }
    .mission {
      background-color: #f4f4f4;
      padding: 30px;
      border-radius: 10px;
    }
  `]
})
export class HomeComponent {
  platforms: Platform[];

  constructor(private platformService: PlatformService) {
    this.platforms = this.platformService.getPlatforms();
  }
}
