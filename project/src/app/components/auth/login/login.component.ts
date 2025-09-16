import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LoginData {
  role: 'girl' | 'guardian';
  phone: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-content">
        <div class="header">
          <h1 class="title">Welcome Back</h1>
          <p class="subtitle">Sign in to your HerBuddy account</p>
        </div>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="login-form">
          <!-- Role Selection -->
          <div class="form-group">
            <label class="form-label">I am a:</label>
            <div class="role-toggle">
              <button 
                type="button"
                class="role-btn"
                [class.active]="formData.role === 'girl'"
                (click)="selectRole('girl')"
              >
                👧 Girl
              </button>
              <button 
                type="button"
                class="role-btn"
                [class.active]="formData.role === 'guardian'"
                (click)="selectRole('guardian')"
              >
                👨‍👩‍👧‍👦 Guardian
              </button>
            </div>
          </div>

          <!-- Phone -->
          <div class="form-group">
            <label for="phone" class="form-label">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              [(ngModel)]="formData.phone" 
              required 
              #phone="ngModel"
              class="form-input"
              placeholder="Enter your phone number"
            />
            <div *ngIf="phone.invalid && phone.touched" class="error-message">
              Phone number is required
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password" class="form-label">Password *</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              [(ngModel)]="formData.password" 
              required 
              #password="ngModel"
              class="form-input"
              placeholder="Enter your password"
            />
            <div *ngIf="password.invalid && password.touched" class="error-message">
              Password is required
            </div>
          </div>

          <!-- Error Message -->
          <div *ngIf="errorMessage" class="login-error">
            {{ errorMessage }}
          </div>

          <button 
            type="submit" 
            class="submit-btn" 
            [disabled]="!loginForm.valid"
          >
            Sign In
          </button>
        </form>

        <div class="footer-links">
          <p>Don't have an account? 
            <button class="link-btn" (click)="navigateToSignup()">Sign up here</button>
          </p>
          <button class="back-btn" (click)="goBack()">← Back to Welcome</button>
        </div>
      </div>

      <!-- Toast Message -->
      <div *ngIf="showToast" class="toast" [class.show]="showToast" [class.error]="toastType === 'error'">
        <div class="toast-content">
          <span class="toast-icon">{{ toastType === 'error' ? '❌' : '✅' }}</span>
          <span class="toast-message">{{ toastMessage }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
    }

    .login-content {
      background: #ffffff;
      border-radius: 2rem;
      padding: 3rem;
      max-width: 450px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0a1f44;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #6c757d;
      font-size: 1.1rem;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-label {
      font-weight: 600;
      color: #0a1f44;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .role-toggle {
      display: flex;
      gap: 1rem;
    }

    .role-btn {
      flex: 1;
      padding: 1rem;
      border: 2px solid #e9ecef;
      border-radius: 1rem;
      background: #f8f9fa;
      color: #6c757d;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .role-btn.active {
      border-color: #1e90ff;
      background: #1e90ff;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
    }

    .form-input {
      padding: 1rem;
      border: 2px solid #e9ecef;
      border-radius: 1rem;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f8f9fa;
    }

    .form-input:focus {
      outline: none;
      border-color: #1e90ff;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
    }

    .form-input::placeholder {
      color: #adb5bd;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.85rem;
      margin-top: 0.5rem;
      font-weight: 500;
    }

    .login-error {
      background: #f8d7da;
      color: #721c24;
      padding: 1rem;
      border-radius: 0.75rem;
      border: 1px solid #f5c6cb;
      font-weight: 500;
      text-align: center;
    }

    .submit-btn {
      background: #1e90ff;
      color: #ffffff;
      border: none;
      padding: 1.2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      background: #0080ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(30, 144, 255, 0.4);
    }

    .submit-btn:disabled {
      background: #6c757d;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .footer-links {
      text-align: center;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .footer-links p {
      color: #6c757d;
      margin: 0;
    }

    .link-btn {
      background: none;
      border: none;
      color: #1e90ff;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
    }

    .back-btn {
      background: none;
      border: none;
      color: #6c757d;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }

    .back-btn:hover {
      background: #f8f9fa;
      color: #0a1f44;
    }

    .toast {
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: #28a745;
      color: #ffffff;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transform: translateX(400px);
      transition: transform 0.3s ease;
      z-index: 1000;
    }

    .toast.error {
      background: #dc3545;
    }

    .toast.show {
      transform: translateX(0);
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .toast-icon {
      font-size: 1.2rem;
    }

    .toast-message {
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .login-content {
        padding: 2rem;
        margin: 1rem;
      }

      .title {
        font-size: 2rem;
      }

      .role-toggle {
        flex-direction: column;
      }

      .toast {
        right: 1rem;
        left: 1rem;
        transform: translateY(-100px);
      }

      .toast.show {
        transform: translateY(0);
      }
    }
  `]
})
export class LoginComponent {
  formData: LoginData = {
    role: 'girl',
    phone: '',
    password: ''
  };

  errorMessage = '';
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private router: Router) {}

  selectRole(role: 'girl' | 'guardian') {
    this.formData.role = role;
    this.errorMessage = ''; // Clear error when role changes
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.formData.phone && this.formData.password) {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('herbuddy_users') || '[]');
      
      // Find matching user
      const user = users.find((u: any) => 
        u.phone === this.formData.phone && 
        u.password === this.formData.password && 
        u.role === this.formData.role
      );

      if (user) {
        // Store current user session
        localStorage.setItem('herbuddy_current_user', JSON.stringify(user));
        
        // Show success toast
        this.showToastMessage(`Welcome back, ${user.name}!`, 'success');

        // Navigate based on role
        setTimeout(() => {
          if (user.role === 'girl') {
            this.router.navigate(['/dashboard/girl']);
          } else {
            this.router.navigate(['/dashboard/guardian']);
          }
        }, 1500);
      } else {
        this.errorMessage = 'Invalid credentials or role mismatch. Please check your phone number, password, and selected role.';
        this.showToastMessage('Login failed! Please check your credentials.', 'error');
      }
    }
  }

  showToastMessage(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  navigateToSignup() {
    this.router.navigate(['/auth/signup']);
  }

  goBack() {
    this.router.navigate(['/auth/welcome']);
  }
}