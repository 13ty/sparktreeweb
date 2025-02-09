import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, CommonModule],
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us for any inquiries or collaborations.</p>
      
      <div class="contact-info">
        <div class="info-item">
          <h3>Email</h3>
          <a href="mailto:sparktreehere@gmail.com">sparktreehere@gmail.com</a>
        </div>
        <div class="info-item">
          <h3>Website</h3>
          <a href="https://sparktree.life" target="_blank">sparktree.life</a>
        </div>
      </div>
      
      <app-contact-form></app-contact-form>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    .contact-info {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 30px 0;
    }
    .info-item {
      padding: 20px;
      background-color: #f4f4f4;
      border-radius: 8px;
    }
    .info-item h3 {
      color: #FFC107;
      margin-bottom: 10px;
    }
    .info-item a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .info-item a:hover {
      color: #FFC107;
    }
  `]
})
export class ContactComponent {}
