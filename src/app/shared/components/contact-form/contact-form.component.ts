import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form class="contact-form" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" [(ngModel)]="formData.message" required></textarea>
      </div>
      
      <button type="submit" class="btn">Send Message</button>
      <p *ngIf="message" class="message">{{ message }}</p>
    </form>
  `,
  styles: [`
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: inherit;
    }
    textarea {
      min-height: 150px;
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
      text-align: center;
    }
  `]
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  message = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.submitContactForm(this.formData).subscribe({
      next: () => {
        this.message = 'Thank you for your message! We\'ll get back to you soon.';
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      },
      error: () => {
        this.message = 'Message sending failed. Please try again.';
      }
    });
  }
}
