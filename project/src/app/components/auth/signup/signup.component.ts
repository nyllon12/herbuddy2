import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SignupData {
  role: 'girl' | 'guardian';
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="signup-container">
      <div class="signup-content">
        <div class="header">
          <h1 class="title">Create Account</h1>
          <p class="subtitle">Join HerBuddy community</p>
        </div>

        <form (ngSubmit)="onSubmit()" #signupForm="ngForm" class="signup-form">
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

          <!-- Name -->
          <div class="form-group">
            <label for="name" class="form-label">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              [(ngModel)]="formData.name" 
              required 
              #name="ngModel"
              class="form-input"
              placeholder="Enter your full name"
            />
            <div *ngIf="name.invalid && name.touched" class="error-message">
              Name is required
            </div>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email" class="form-label">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              [(ngModel)]="formData.email" 
              required 
              email
              #email="ngModel"
              class="form-input"
              placeholder="Enter your email"
            />
            <div *ngIf="email.invalid && email.touched" class="error-message">
              <span *ngIf="email.errors?.['required']">Email is required</span>
              <span *ngIf="email.errors?.['email']">Please enter a valid email</span>
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
              minlength="6"
              #password="ngModel"
              class="form-input"
              placeholder="Create a password"
            />
            <div *ngIf="password.invalid && password.touched" class="error-message">
              <span *ngIf="password.errors?.['required']">Password is required</span>
              <span *ngIf="password.errors?.['minlength']">Password must be at least 6 characters</span>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword" class="form-label">Confirm Password *</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              [(ngModel)]="formData.confirmPassword" 
              required 
              #confirmPassword="ngModel"
              class="form-input"
              placeholder="Confirm your password"
            />
            <div *ngIf="confirmPassword.invalid && confirmPassword.touched" class="error-message">
              Confirm password is required
            </div>
            <div *ngIf="formData.password !== formData.confirmPassword && confirmPassword.touched" class="error-message">
              Passwords do not match
            </div>
          </div>

          <button 
            type="submit" 
            class="submit-btn" 
            [disabled]="!isFormValid()"
          >
            Create Account
          </button>
        </form>

        <div class="footer-links">
          <p>Already have an account? 
            <button class="link-btn" (click)="navigateToLogin()">Login here</button>
          </p>
          <button class="back-btn" (click)="goBack()">← Back to Welcome</button>
        </div>
      </div>

      <!-- Toast Message -->
      <div *ngIf="showToast" class="toast" [class.show]="showToast">
        <div class="toast-content">
          <span class="toast-icon">✅</span>
          <span class="toast-message">{{ toastMessage }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .signup-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
    }

    .signup-content {
      background: #ffffff;
      border-radius: 2rem;
      padding: 3rem;
      max-width: 500px;
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

    .signup-form {
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
      .signup-content {
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
export class SignupComponent {
  formData: SignupData = {
    role: 'girl',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  showToast = false;
  toastMessage = '';

  constructor(private router: Router) {}

  selectRole(role: 'girl' | 'guardian') {
    this.formData.role = role;
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.password &&
      this.formData.confirmPassword &&
      this.formData.password === this.formData.confirmPassword &&
      this.formData.password.length >= 6 &&
      this.isValidEmail(this.formData.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    if (this.isFormValid()) {
      // Store user data in localStorage
      const userData = {
        role: this.formData.role,
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        password: this.formData.password,
        createdAt: new Date().toISOString()
      };

      // Get existing users or create new array
      const existingUsers = JSON.parse(localStorage.getItem('herbuddy_users') || '[]');
      
      // Check if user already exists
      const userExists = existingUsers.some((user: any) => 
        user.phone === userData.phone || user.email === userData.email
      );

      if (userExists) {
        this.showToastMessage('User already exists with this phone or email!');
        return;
      }

      // Add new user
      existingUsers.push(userData);
      localStorage.setItem('herbuddy_users', JSON.stringify(existingUsers));

      // Show success toast
      this.showToastMessage('Signup successful! Please login.');

      // Redirect to login after 2 seconds
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
    }
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goBack() {
    this.router.navigate(['/auth/welcome']);
  }
}