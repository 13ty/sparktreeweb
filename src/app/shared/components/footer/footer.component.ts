import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Spark Network is dedicated to fostering local growth and collaboration.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a routerLink="/platform/spark-tree">Spark Tree</a></li>
            <li><a routerLink="/platform/spark-leaf">Spark Leaf</a></li>
            <li><a routerLink="/platform/spark-seed">Spark Seed</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@sparknetwork.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://facebook.com/sparktree" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.227 0 9 1.549 9 4.615V8z"/>
              </svg>
            </a>
            <a href="https://twitter.com/sparktree" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/sparktree" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Spark Network. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #333;
      color: white;
      padding: 40px 20px 20px;
      margin-top: 40px;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
    }
    .footer-section h3 {
      margin-bottom: 15px;
      color: #FFC107;
    }
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    .footer-section ul li {
      margin-bottom: 8px;
    }
    .footer-section a {
      color: white;
      text-decoration: none;
    }
    .footer-section a:hover {
      color: #FFC107;
    }
    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 10px;
    }
    .social-link {
      color: white;
      transition: color 0.3s ease;
    }
    .social-link:hover {
      color: #FFC107;
    }
    .social-link svg {
      width: 24px;
      height: 24px;
    }
    .footer-bottom {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #444;
    }
  `]
})
export class FooterComponent {}
