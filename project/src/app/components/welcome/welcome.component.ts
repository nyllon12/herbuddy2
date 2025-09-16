import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container">
      <div class="welcome-content">
        <h1 class="welcome-title">Welcome to HerBuddy!</h1>
        <p class="welcome-subtitle">Choose how you'd like to get started</p>
        
        <div class="auth-options">
          <div class="auth-card">
            <h3>New to HerBuddy?</h3>
            <p>Create your account and start connecting with fellow travelers</p>
            <button class="auth-button primary" (click)="navigateToSignup()">Sign Up</button>
          </div>
          
          <div class="auth-card">
            <h3>Already a Member?</h3>
            <p>Welcome back! Sign in to continue your journey</p>
            <button class="auth-button secondary" (click)="navigateToLogin()">Log In</button>
          </div>
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
      max-width: 800px;
      text-align: center;
      color: #ffffff;
    }

    .welcome-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .welcome-subtitle {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      opacity: 0.9;
    }

    .auth-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .auth-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1.5rem;
      padding: 2.5rem;
      transition: all 0.3s ease;
    }

    .auth-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.15);
    }

    .auth-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .auth-card p {
      opacity: 0.9;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .auth-button {
      width: 100%;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border: none;
      border-radius: 0.75rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .auth-button.primary {
      background: #1e90ff;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
    }

    .auth-button.primary:hover {
      background: #0080ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(30, 144, 255, 0.4);
    }

    .auth-button.secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .auth-button.secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
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
    }

    .back-button:hover {
      color: #ffffff;
    }

    @media (max-width: 768px) {
      .welcome-title {
        font-size: 2.5rem;
      }

      .welcome-subtitle {
        font-size: 1.1rem;
      }

      .auth-options {
        grid-template-columns: 1fr;
      }

      .auth-card {
        padding: 2rem;
      }
    }
  `]
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    // For demo purposes, just show an alert
    alert('Signup feature coming soon!');
  }

  navigateToLogin() {
    // For demo purposes, just show an alert
    alert('Login feature coming soon!');
  }

  goBack() {
    this.router.navigate(['/']);
  }
}