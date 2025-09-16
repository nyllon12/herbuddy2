import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="content">
        <h1 class="title">Contact Us</h1>
        <div class="contact-content">
          <div class="form-section">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" *ngIf="!showSuccess">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name" 
                  required 
                  #name="ngModel"
                  class="form-input"
                />
                <div *ngIf="name.invalid && name.touched" class="error-message">
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required 
                  email
                  #email="ngModel"
                  class="form-input"
                />
                <div *ngIf="email.invalid && email.touched" class="error-message">
                  <span *ngIf="email.errors?.['required']">Email is required</span>
                  <span *ngIf="email.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message" 
                  required 
                  #message="ngModel"
                  class="form-textarea" 
                  rows="6"
                ></textarea>
                <div *ngIf="message.invalid && message.touched" class="error-message">
                  Message is required
                </div>
              </div>

              <button 
                type="submit" 
                class="submit-button" 
                [disabled]="!contactForm.valid"
              >
                Send Message
              </button>
            </form>

            <div *ngIf="showSuccess" class="success-message">
              <div class="success-icon">✅</div>
              <h3>Thank you!</h3>
              <p>We will contact you soon.</p>
              <button class="back-button" (click)="resetForm()">Send Another Message</button>
            </div>
          </div>

          <div class="info-section">
            <h3>Get in Touch</h3>
            <p>Have questions about HerBuddy? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@herbuddy.com</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📱</div>
                <div>
                  <h4>Support</h4>
                  <p>24/7 Available</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">🌍</div>
                <div>
                  <h4>Global</h4>
                  <p>Worldwide Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding-top: 80px;
      min-height: 100vh;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .content {
      max-width: 1200px;
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

    .contact-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .form-section {
      background: #ffffff;
      padding: 3rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 2rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #0a1f44;
    }

    .form-input, .form-textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e9ecef;
      border-radius: 0.75rem;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-input:focus, .form-textarea:focus {
      outline: none;
      border-color: #1e90ff;
      box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-button {
      background: #1e90ff;
      color: #ffffff;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.75rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
      width: 100%;
    }

    .submit-button:hover:not(:disabled) {
      background: #0080ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(30, 144, 255, 0.4);
    }

    .submit-button:disabled {
      background: #6c757d;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .success-message {
      text-align: center;
      padding: 3rem 2rem;
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .success-message h3 {
      font-size: 2rem;
      color: #0a1f44;
      margin-bottom: 1rem;
    }

    .success-message p {
      font-size: 1.1rem;
      color: #495057;
      margin-bottom: 2rem;
    }

    .back-button {
      background: #1e90ff;
      color: #ffffff;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 0.75rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .back-button:hover {
      background: #0080ff;
    }

    .info-section {
      background: #ffffff;
      padding: 3rem 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      height: fit-content;
    }

    .info-section h3 {
      font-size: 1.8rem;
      color: #0a1f44;
      margin-bottom: 1rem;
    }

    .info-section p {
      color: #495057;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .info-icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #1e90ff, #0080ff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info-item h4 {
      color: #0a1f44;
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .info-item p {
      color: #495057;
      margin: 0;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-section, .info-section {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  showSuccess = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.showSuccess = true;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.showSuccess = false;
  }
}