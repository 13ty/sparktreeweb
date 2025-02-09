import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="newsletter">
      <h3>Stay Updated</h3>
      <p>Subscribe to our newsletter for the latest updates and news.</p>
      <form (ngSubmit)="onSubmit()">
        <input 
          type="email" 
          [(ngModel)]="email" 
          name="email" 
          placeholder="Enter your email"
          required
        >
        <button type="submit" class="btn">Subscribe</button>
      </form>
      <p *ngIf="message" class="message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .newsletter {
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    input {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
      width: 250px;
    }
    .btn {
      background-color: #FFC107;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #e0a800;
    }
    .message {
      margin-top: 10px;
      color: #333;
    }
  `]
})
export class NewsletterComponent {
  email = '';
  message = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.subscribeToNewsletter(this.email).subscribe({
      next: () => {
        this.message = 'Thank you for subscribing!';
        this.email = '';
      },
      error: () => {
        this.message = 'Subscription failed. Please try again.';
      }
    });
  }
}
