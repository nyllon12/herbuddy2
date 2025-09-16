import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-girl-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="welcome-title">Welcome, {{ currentUser?.name }}! 👧</h1>
          <p class="welcome-subtitle">Your Girl Dashboard</p>
          <button class="logout-btn" (click)="logout()">Logout</button>
        </div>
      </div>

      <div class="dashboard-content">
        <div class="dashboard-cards">
          <div class="dashboard-card">
            <div class="card-icon">🗺️</div>
            <h3>Find Travel Buddies</h3>
            <p>Connect with other girls for safe travels</p>
            <button class="card-btn">Explore</button>
          </div>

          <div class="dashboard-card">
            <div class="card-icon">🛡️</div>
            <h3>Safety Features</h3>
            <p>Access emergency contacts and safety tools</p>
            <button class="card-btn">View Safety</button>
          </div>

          <div class="dashboard-card">
            <div class="card-icon">📱</div>
            <h3>My Trips</h3>
            <p>Manage your upcoming and past trips</p>
            <button class="card-btn">View Trips</button>
          </div>

          <div class="dashboard-card">
            <div class="card-icon">👥</div>
            <h3>Community</h3>
            <p>Join discussions and share experiences</p>
            <button class="card-btn">Join Community</button>
          </div>
        </div>

        <div class="user-info">
          <h3>Your Profile</h3>
          <div class="info-item">
            <strong>Role:</strong> {{ currentUser?.role | titlecase }}
          </div>
          <div class="info-item">
            <strong>Email:</strong> {{ currentUser?.email }}
          </div>
          <div class="info-item">
            <strong>Phone:</strong> {{ currentUser?.phone }}
          </div>
          <div class="info-item">
            <strong>Member since:</strong> {{ formatDate(currentUser?.createdAt) }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .dashboard-header {
      background: linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%);
      color: #ffffff;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .welcome-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }

    .welcome-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
      margin-bottom: 2rem;
    }

    .logout-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .logout-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .dashboard-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .dashboard-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .dashboard-card {
      background: #ffffff;
      border-radius: 1.5rem;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .dashboard-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .dashboard-card h3 {
      font-size: 1.3rem;
      color: #0a1f44;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .dashboard-card p {
      color: #6c757d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .card-btn {
      background: #1e90ff;
      color: #ffffff;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 2rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .card-btn:hover {
      background: #0080ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
    }

    .user-info {
      background: #ffffff;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      height: fit-content;
    }

    .user-info h3 {
      color: #0a1f44;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .info-item {
      padding: 0.75rem 0;
      border-bottom: 1px solid #f8f9fa;
      color: #495057;
    }

    .info-item:last-child {
      border-bottom: none;
    }

    .info-item strong {
      color: #0a1f44;
    }

    @media (max-width: 768px) {
      .welcome-title {
        font-size: 2rem;
      }

      .logout-btn {
        position: static;
        margin-top: 1rem;
      }

      .dashboard-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem 1rem;
      }

      .dashboard-cards {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class GirlDashboardComponent implements OnInit {
  currentUser: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Get current user from localStorage
    const userStr = localStorage.getItem('herbuddy_current_user');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    } else {
      // If no user session, redirect to login
      this.router.navigate(['/auth/login']);
    }
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return 'Unknown';
    return new Date(dateStr).toLocaleDateString();
  }

  logout() {
    localStorage.removeItem('herbuddy_current_user');
    this.router.navigate(['/auth/welcome']);
  }
}