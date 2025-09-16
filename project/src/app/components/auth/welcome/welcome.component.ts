import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container">
      <div class="welcome-content">
        <div class="logo-section">
          <h1 class="app-title">HerBuddy</h1>
          <p class="app-subtitle">Empowering Girls to Travel Safe Together</p>
        </div>
        
        <div class="auth-buttons">
          <button class="auth-btn signup-btn" (click)="navigateToSignup()">
            <span class="btn-icon">👋</span>
            <span class="btn-text">Sign Up</span>
            <span class="btn-subtitle">Join our community</span>
          </button>
          
          <button class="auth-btn login-btn" (click)="navigateToLogin()">
            <span class="btn-icon">🔐</span>
            <span class="btn-text">Login</span>
            <span class="btn-subtitle">Welcome back</span>
          </button>
        </div>

        <div class="back-link">
          <button class="back-button" (click)="goBack()">← Back to Home</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .welcome-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .welcome-content {
      max-width: 500px;
      width: 100%;
      text-align: center;
      color: #ffffff;
    }

    .logo-section {
      margin-bottom: 4rem;
    }

    .app-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #ffffff, #1e90ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .app-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .auth-buttons {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .auth-btn {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 1.5rem;
      padding: 2rem;
      color: #ffffff;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      overflow: hidden;
    }

    .auth-btn:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    .signup-btn:hover {
      border-color: #1e90ff;
      box-shadow: 0 15px 40px rgba(30, 144, 255, 0.3);
    }

    .login-btn:hover {
      border-color: #1e90ff;
      box-shadow: 0 15px 40px rgba(30, 144, 255, 0.3);
    }

    .btn-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .btn-text {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .btn-subtitle {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .back-link {
      margin-top: 2rem;
    }

    .back-button {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1rem;
      cursor: pointer;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    .back-button:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .app-title {
        font-size: 2.5rem;
      }

      .app-subtitle {
        font-size: 1rem;
      }

      .auth-btn {
        padding: 1.5rem;
      }

      .btn-text {
        font-size: 1.3rem;
      }
    }
  `]
})
export class AuthWelcomeComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/auth/signup']);
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}