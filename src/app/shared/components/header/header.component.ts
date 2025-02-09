import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header>
      <nav>
        <a routerLink="/" class="logo">Spark Network</a>
        <div class="nav-links">
          <a routerLink="/platform/spark-tree" routerLinkActive="active">Spark Tree</a>
          <a routerLink="/platform/spark-leaf" routerLinkActive="active">Spark Leaf</a>
          <a routerLink="/platform/spark-seed" routerLinkActive="active">Spark Seed</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #FFC107;
      padding: 15px;
      color: white;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo {
      font-size: 1.5em;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    .nav-links a {
      color: white;
      margin-left: 20px;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    .nav-links a:hover {
      background-color: rgba(255,255,255,0.1);
    }
    .nav-links a.active {
      background-color: rgba(255,255,255,0.2);
    }
  `]
})
export class HeaderComponent {}
