import { Component, Input } from '@angular/core';
import { Platform } from '../../../core/models/platform.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-platform-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="platform-card">
      <h2>{{ platform.name }}</h2>
      <h3>{{ platform.tagline }}</h3>
      <p>{{ platform.description }}</p>
      <ul>
        <li *ngFor="let feature of platform.features">{{ feature }}</li>
      </ul>
      <a [routerLink]="['/platform', platform.id]" class="btn">Learn More</a>
    </div>
  `,
  styles: [`
    .platform-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      margin: 15px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .platform-card:hover {
      transform: scale(1.05);
    }
    .btn {
      display: inline-block;
      background-color: #FFC107;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  `]
})
export class PlatformCardComponent {
  @Input() platform!: Platform;
}
