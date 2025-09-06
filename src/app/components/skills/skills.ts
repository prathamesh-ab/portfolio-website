import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  selectedTech: any = null;
  isSkillVisible = false;

  skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      iconClass: 'fas fa-laptop-code',
      skills: [
        {
          name: 'Angular',
          level: 90,
          experience: '2+ years',
          iconClass: 'fab fa-angular',
          color: '#dd0031',
          gradient: 'linear-gradient(45deg, #dd0031, #c3002f)',
          description: 'Expert in building scalable SPAs with Angular framework, reactive forms, and state management',
          projects: ['BusinessCom CRM', 'Data Shield', 'TraceSphere']
        },
        {
          name: 'TypeScript',
          level: 85,
          experience: '2+ years',
          iconClass: 'fab fa-js',
          color: '#3178c6',
          gradient: 'linear-gradient(45deg, #3178c6, #235a97)',
          description: 'Strong typing and modern JavaScript development with ES6+ features',
          projects: ['All Frontend Projects', 'Type-safe APIs']
        },
        {
          name: 'HTML/CSS',
          level: 95,
          experience: '3+ years',
          iconClass: 'fab fa-html5',
          color: '#e34f26',
          gradient: 'linear-gradient(45deg, #e34f26, #f06529)',
          description: 'Semantic HTML and modern CSS with animations and responsive design',
          projects: ['All UI Projects', 'Component Libraries']
        },
        {
          name: 'JavaScript',
          level: 88,
          experience: '2+ years',
          iconClass: 'fab fa-js-square',
          color: '#f7df1e',
          gradient: 'linear-gradient(45deg, #f7df1e, #f0d91d)',
          description: 'ES6+ features, async programming, and modern development patterns',
          projects: ['Interactive Features', 'Real-time Applications']
        }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications',
      iconClass: 'fas fa-server',
      skills: [
        {
          name: 'ASP.NET Core',
          level: 90,
          experience: '2+ years',
          iconClass: 'fab fa-microsoft',
          color: '#512bd4',
          gradient: 'linear-gradient(45deg, #512bd4, #3c1a8b)',
          description: 'Building enterprise-grade web APIs, microservices, and authentication systems',
          projects: ['BusinessCom CRM', 'Data Shield', 'TraceSphere']
        },
        {
          name: 'C#',
          level: 88,
          experience: '2+ years',
          iconClass: 'fas fa-code',
          color: '#239120',
          gradient: 'linear-gradient(45deg, #239120, #1e7e34)',
          description: 'Object-oriented programming, LINQ, async/await patterns, and .NET ecosystem',
          projects: ['All Backend Services', 'Business Logic Layer']
        },
        {
          name: 'Entity Framework',
          level: 85,
          experience: '1.5+ years',
          iconClass: 'fas fa-database',
          color: '#68217a',
          gradient: 'linear-gradient(45deg, #68217a, #512bd4)',
          description: 'Code-first approach, migrations, and complex query optimization',
          projects: ['Database Layer', 'Data Access Layer']
        },
        {
          name: 'Web APIs',
          level: 92,
          experience: '2+ years',
          iconClass: 'fas fa-cloud',
          color: '#0066cc',
          gradient: 'linear-gradient(45deg, #0066cc, #004499)',
          description: 'RESTful API design, authentication, authorization, and documentation',
          projects: ['All Backend Projects', 'Integration Services']
        }
      ]
    },
    {
      title: 'Database & Tools',
      description: 'Data management and development tools',
      iconClass: 'fas fa-tools',
      skills: [
        {
          name: 'MySQL',
          level: 80,
          experience: '2+ years',
          iconClass: 'fas fa-database',
          color: '#4479a1',
          gradient: 'linear-gradient(45deg, #4479a1, #336791)',
          description: 'Database design, query optimization, indexing, and stored procedures',
          projects: ['All Database Projects', 'Data Analytics']
        },
        {
          name: 'Git/GitHub',
          level: 85,
          experience: '2+ years',
          iconClass: 'fab fa-git-alt',
          color: '#f05032',
          gradient: 'linear-gradient(45deg, #f05032, #bd2c00)',
          description: 'Version control, branching strategies, and collaborative development',
          projects: ['All Projects', 'Team Collaboration']
        },
        {
          name: 'Visual Studio',
          level: 90,
          experience: '2+ years',
          iconClass: 'fas fa-laptop-code',
          color: '#5c2d91',
          gradient: 'linear-gradient(45deg, #5c2d91, #472071)',
          description: 'IDE expertise for .NET development, debugging, and performance profiling',
          projects: ['Development Environment', 'Code Quality']
        },
        {
          name: 'Docker',
          level: 75,
          experience: '1+ years',
          iconClass: 'fab fa-docker',
          color: '#2496ed',
          gradient: 'linear-gradient(45deg, #2496ed, #0db7ed)',
          description: 'Containerization, Docker Compose, and deployment strategies',
          projects: ['DevOps', 'Microservices']
        }
      ]
    }
  ];

  floatingTech = [
    {
      name: 'Angular',
      iconClass: 'fab fa-angular',
      color: '#dd0031',
      category: 'Frontend',
      rating: 5,
      experience: '2+ years',
      description: 'My primary frontend framework for building enterprise applications with reactive forms, routing, and state management.'
    },
    {
      name: 'ASP.NET',
      iconClass: 'fab fa-microsoft',
      color: '#512bd4',
      category: 'Backend',
      rating: 5,
      experience: '2+ years',
      description: 'Backend framework for building scalable web APIs, implementing authentication, and database integration.'
    },
    {
      name: 'TypeScript',
      iconClass: 'fab fa-js',
      color: '#3178c6',
      category: 'Language',
      rating: 4,
      experience: '2+ years',
      description: 'Type-safe JavaScript development with enhanced IDE support and error catching.'
    },
    {
      name: 'MySQL',
      iconClass: 'fas fa-database',
      color: '#4479a1',
      category: 'Database',
      rating: 4,
      experience: '2+ years',
      description: 'Primary database for designing normalized schemas, writing optimized queries, and implementing indexing.'
    },
    {
      name: 'Git',
      iconClass: 'fab fa-git-alt',
      color: '#f05032',
      category: 'DevOps',
      rating: 4,
      experience: '2+ years',
      description: 'Version control with branching strategies, pull requests, and maintaining clean commit histories.'
    },
    {
      name: 'Docker',
      iconClass: 'fab fa-docker',
      color: '#2496ed',
      category: 'DevOps',
      rating: 3,
      experience: '1+ years',
      description: 'Containerization for consistent deployment across different environments.'
    },
    {
      name: 'GCP',
      iconClass: 'fas fa-cloud',
      color: '#4285f4',
      category: 'Cloud',
      rating: 3,
      experience: '1+ years',
      description: 'Google Cloud Platform services for hosting, databases, storage, and serverless computing.'
    },
    {
      name: 'Bootstrap',
      iconClass: 'fab fa-bootstrap',
      color: '#7952b3',
      category: 'CSS Framework',
      rating: 4,
      experience: '2+ years',
      description: 'Responsive design framework for rapid UI development.'
    },
    {
      name: 'Postman',
      iconClass: 'fas fa-paper-plane',
      color: '#ff6c37',
      category: 'Testing',
      rating: 4,
      experience: '2+ years',
      description: 'API testing, documentation, and automation for development workflow.'
    }
  ];

  ngOnInit() {
    // Trigger animations after component loads
    setTimeout(() => {
      this.isSkillVisible = true;
    }, 500);
  }

  onSkillHover(skill: any) {
    // Add hover effects or additional info
  }

  onSkillLeave() {
    // Remove hover effects
  }

  selectTech(tech: any) {
    this.selectedTech = this.selectedTech === tech ? null : tech;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

    @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event) {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && !this.isSkillVisible) {
        this.isSkillVisible = true;
      }
    }
  }
}
