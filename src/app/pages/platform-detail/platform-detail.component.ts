import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../../core/services/platform.service';
import { Platform } from '../../core/models/platform.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="platform" class="platform-detail">
      <h1>{{ platform.name }}</h1>
      <h2>{{ platform.tagline }}</h2>
      <p>{{ platform.description }}</p>
      
      <section class="features">
        <h3>Key Features</h3>
        <ul>
          <li *ngFor="let feature of platform.features">{{ feature }}</li>
        </ul>
      </section>
    </div>
  `,
  styles: [`
    .platform-detail {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    .features {
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
    }
  `]
})
export class PlatformDetailComponent implements OnInit {
  platform: Platform | undefined;

  constructor(
    private route: ActivatedRoute,
    private platformService: PlatformService
  ) {}

  ngOnInit() {
    const platformId = this.route.snapshot.paramMap.get('id');
    if (platformId) {
      this.platform = this.platformService.getPlatformById(platformId);
    }
  }
}
