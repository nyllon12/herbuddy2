import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="content">
        <h1 class="title">About HerBuddy</h1>
        <div class="about-content">
          <p class="description">
            HerBuddy is a secure and empowering platform created to help girls travel safely together by connecting them with like-minded co-travelers and ensuring guardian support at every step.
          </p>
          <p class="description">
            Our mission is to break down barriers that prevent women from exploring the world independently. Through our innovative platform, we create a safe space where girls can find travel companions, share experiences, and build lasting friendships while maintaining the highest standards of safety and security.
          </p>
          
          <div class="features">
            <div class="feature-card">
              <div class="feature-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Comprehensive safety measures including real-time tracking and 24/7 guardian support.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤝</div>
              <h3>Trusted Community</h3>
              <p>Connect with verified travelers who share your passion for safe and meaningful adventures.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🌍</div>
              <h3>Global Network</h3>
              <p>Access to a worldwide network of safe destinations and trusted local contacts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding-top: 80px;
      min-height: 100vh;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    .title {
      font-size: 3rem;
      font-weight: 700;
      color: #0a1f44;
      text-align: center;
      margin-bottom: 3rem;
      letter-spacing: -0.02em;
    }

    .about-content {
      background: #ffffff;
      padding: 3rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .description {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #495057;
      margin-bottom: 2rem;
      text-align: justify;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature-card {
      background: linear-gradient(135deg, #1e90ff 0%, #0080ff 100%);
      color: #ffffff;
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(30, 144, 255, 0.3);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .feature-card p {
      opacity: 0.95;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }

      .about-content {
        padding: 2rem;
      }

      .description {
        font-size: 1.1rem;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}