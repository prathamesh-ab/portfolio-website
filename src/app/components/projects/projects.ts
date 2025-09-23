import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  activeFilter = 'all';
  selectedProject: any = null;
  filteredProjects: any[] = [];

  projects = [
    {
      title: 'Email Generation App',
      description: 'AI-powered email management platform that streamlines communication with smart composition, auto-reply functionality, and tone formalization.',
      fullDescription: 'A comprehensive email management application designed to revolutionize business communication. Features advanced AI integration for email composition, intelligent auto-reply systems, and professional tone adjustment capabilities.',
      iconClass: 'fas fa-envelope',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'web-app',
      status: 'Deployed',
      liveUrl: 'https://mailcraft.prathameshbhanse.live/',
      githubUrl: '#',
      features: [
        'Smart email composition with AI assistance',
        'Intelligent auto-reply functionality',
        'Professional tone formalization',
        'Real-time email preview and editing',
        'Template management system',
        'Multi-language support',
        'Email analytics and tracking',
        'Integration with popular email providers'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'MySQL', 'AI/ML APIs', 'TypeScript', 'Entity Framework'],
      mainTech: [
        { icon: 'fab fa-angular', color: '#dd0031', gradient: 'linear-gradient(135deg, #dd0031, #c3002f)', name: 'Angular' },
        { icon: 'fab fa-microsoft', color: '#512bd4', gradient: 'linear-gradient(135deg, #512bd4, #3c1a8b)', name: 'ASP.NET' },
        { icon: 'fas fa-database', color: '#4479a1', gradient: 'linear-gradient(135deg, #4479a1, #336791)', name: 'MySQL' }
      ],
      technicalDetails: [
        {
          title: 'AI Integration',
          description: 'Leveraging OpenAI GPT models for intelligent email composition and tone adjustment with custom prompts and fine-tuning.'
        },
        {
          title: 'Real-time Processing',
          description: 'Implementing SignalR for real-time email preview and collaboration features with sub-second response times.'
        },
        {
          title: 'Security',
          description: 'End-to-end encryption for email content with OAuth 2.0 integration for secure email provider connections.'
        }
      ],
      challenges: [
        {
          challenge: 'AI Response Consistency',
          solution: 'Implemented custom prompt engineering and response validation to ensure consistent email tone and format across different use cases.'
        },
        {
          challenge: 'Email Provider Integration',
          solution: 'Created abstraction layer supporting multiple email providers (Gmail, Outlook, etc.) with unified API interface.'
        }
      ]
    },
    {
      title: 'Salon Booking System',
      description: 'Comprehensive salon management platform featuring online appointment booking, multi-salon support, and admin dashboard with approval workflow.',
      fullDescription: 'A complete salon management ecosystem designed to streamline operations for salon owners and enhance customer experience. Features intelligent booking management, resource optimization, and comprehensive business analytics.',
      iconClass: 'fas fa-cut',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'web-app',
      status: 'planned',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Online appointment booking system',
        'Multi-salon registration and management',
        'Service catalog with pricing',
        'Staff scheduling and management',
        'Customer profile management',
        'Email notifications and reminders',
        'Payment integration',
        'Analytics dashboard for salon owners',
        'Mobile-responsive design',
        'Review and rating system'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'MySQL', 'Entity Framework', 'PayPal API', 'SMS API'],
      mainTech: [
        { icon: 'fab fa-angular', color: '#dd0031', gradient: 'linear-gradient(135deg, #dd0031, #c3002f)', name: 'Angular' },
        { icon: 'fab fa-microsoft', color: '#512bd4', gradient: 'linear-gradient(135deg, #512bd4, #3c1a8b)', name: 'ASP.NET' },
        { icon: 'fas fa-credit-card', color: '#00457c', gradient: 'linear-gradient(135deg, #00457c, #003366)', name: 'PayPal' }
      ],
      technicalDetails: [
        {
          title: 'Booking Algorithm',
          description: 'Smart scheduling algorithm that optimizes appointment slots based on service duration, staff availability, and peak hours analysis.'
        },
        {
          title: 'Multi-tenant Architecture',
          description: 'Scalable multi-tenant system allowing independent salon management while maintaining data isolation and security.'
        },
        {
          title: 'Payment Processing',
          description: 'Secure payment gateway integration with support for multiple payment methods and automated refund processing.'
        }
      ],
      challenges: [
        {
          challenge: 'Complex Scheduling Logic',
          solution: 'Developed intelligent algorithm considering service duration, staff breaks, overlapping appointments, and buffer times for optimal scheduling.'
        },
        {
          challenge: 'Multi-tenant Data Security',
          solution: 'Implemented row-level security and tenant isolation strategies ensuring complete data separation between salons.'
        }
      ]
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Smart personal finance management application with expense tracking, budget planning, investment monitoring, and detailed analytics dashboard.',
      fullDescription: 'A comprehensive personal finance management platform that empowers users to take control of their financial health. Features intelligent categorization, predictive analytics, and actionable financial insights.',
      iconClass: 'fas fa-chart-line',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'web-app',
      status: 'planned',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Automated expense categorization',
        'Budget planning with smart alerts',
        'Investment portfolio tracking',
        'Bill reminder system',
        'Financial goal setting and tracking',
        'Interactive charts and analytics',
        'Monthly/yearly financial reports',
        'Bank account integration',
        'Secure data encryption',
        'Export to Excel/PDF',
        'Multi-currency support',
        'Financial insights and recommendations'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'MySQL', 'Chart.js', 'Plaid API', 'AES Encryption'],
      mainTech: [
        { icon: 'fab fa-angular', color: '#dd0031', gradient: 'linear-gradient(135deg, #dd0031, #c3002f)', name: 'Angular' },
        { icon: 'fas fa-chart-bar', color: '#ff6384', gradient: 'linear-gradient(135deg, #ff6384, #ff4757)', name: 'Chart.js' },
        { icon: 'fas fa-shield-alt', color: '#36a2eb', gradient: 'linear-gradient(135deg, #36a2eb, #2980b9)', name: 'Security' }
      ],
      technicalDetails: [
        {
          title: 'Machine Learning Integration',
          description: 'Advanced ML algorithms for expense categorization, spending pattern analysis, and predictive budgeting recommendations.'
        },
        {
          title: 'Real-time Synchronization',
          description: 'Seamless bank account integration with real-time transaction syncing and automated categorization using Plaid API.'
        },
        {
          title: 'Data Visualization',
          description: 'Interactive charts and graphs using Chart.js with drill-down capabilities and customizable date ranges for comprehensive analysis.'
        }
      ],
      challenges: [
        {
          challenge: 'Financial Data Security',
          solution: 'Implemented bank-level security with AES-256 encryption, secure tokenization, and PCI DSS compliance for financial data protection.'
        },
        {
          challenge: 'Real-time Data Processing',
          solution: 'Designed efficient caching strategy and background job processing to handle large volumes of financial transactions without performance impact.'
        }
      ]
    }
  ];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === filter);
    }
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  getStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      'completed': 'fas fa-check-circle',
      'in-progress': 'fas fa-clock',
      'planned': 'fas fa-calendar-plus'
    };
    return icons[status] || 'fas fa-info-circle';
  }

  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'planned': 'Planned'
    };
    return texts[status] || 'Unknown';
  }

  launchApp(project: any) {
    if (project.liveUrl && project.liveUrl !== '#') {
      window.open(project.liveUrl, '_blank');
    } else {
      // Show coming soon message or demo
      alert('App will be available soon! 🚀');
    }
  }

  getParticles() {
    return Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
  }
}

