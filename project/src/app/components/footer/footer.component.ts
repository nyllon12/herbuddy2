import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 HerBuddy – Empowering Safe Travel for Girls</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a1f44;
      color: #ffffff;
      padding: 2rem 0;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content p {
      margin: 0;
      opacity: 0.9;
      font-size: 0.95rem;
    }
  `]
})
export class FooterComponent {}