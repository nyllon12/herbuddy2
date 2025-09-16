import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">HerBuddy – Empowering Girls to Travel Safe Together</h1>
          <p class="hero-subtitle">Join a professional safe travel platform designed for independent girls.</p>
          <button class="cta-button" (click)="navigateToWelcome()">
            Let's do something interesting 🚀
          </button>
        </div>
      </section>

      <!-- Image Grid -->
      <section class="image-grid">
        <h2 class="section-title">Explore the World Safely</h2>
        <div class="grid">
          <div class="grid-item">
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Girls traveling together" />
            <div class="overlay">
              <h3>Travel Together</h3>
              <p>Connect with like-minded travelers</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://images.pexels.com/photos/2404959/pexels-photo-2404959.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Safe destinations" />
            <div class="overlay">
              <h3>Safe Destinations</h3>
              <p>Verified safe travel locations</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Adventure awaits" />
            <div class="overlay">
              <h3>Adventure Awaits</h3>
              <p>Create unforgettable memories</p>
            </div>
          </div>
          <div class="grid-item">
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Community support" />
            <div class="overlay">
              <h3>Community Support</h3>
              <p>24/7 guardian support system</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      padding-top: 80px;
      min-height: 100vh;
    }

    .hero {
      background: linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%);
      padding: 6rem 2rem;
      text-align: center;
      color: #ffffff;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 2.5rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .cta-button {
      background: #1e90ff;
      color: #ffffff;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
    }

    .cta-button:hover {
      background: #0080ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(30, 144, 255, 0.4);
    }

    .image-grid {
      padding: 4rem 2rem;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      color: #0a1f44;
      margin-bottom: 3rem;
    }

    .grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .grid-item {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      height: 250px;
    }

    .grid-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    .grid-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .grid-item:hover img {
      transform: scale(1.05);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: #ffffff;
      padding: 2rem 1.5rem 1.5rem;
    }

    .overlay h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .overlay p {
      opacity: 0.9;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .cta-button {
        padding: 0.8rem 2rem;
        font-size: 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToWelcome() {
    this.router.navigate(['/welcome']);
  }
}