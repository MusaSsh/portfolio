import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeSection = signal('home');
  isMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  skills = [
    'Angular (14+)', 'TypeScript', 'RxJS', 'NgRx / Redux',
    'ReactJS', 'JavaScript (ES6+)', 'Tailwind & Bootstrap',
    'C# .NET', 'Entity Framework', 'SQL Server',
    'Nx Monorepo', 'Jasmine / Karma', 'CI/CD Pipelines', 'Agile Methodology'
  ];

  projects = [
    { 
      title: 'Immigration Case Management', 
      description: 'Comprehensive SAAS platform tailored for US immigration attorneys to manage cases, clients, and complex legal workflows efficiently.', 
      icon: 'gavel',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Tourism B2B & B2C Platforms', 
      description: 'Dual-facing tourism applications facilitating business-to-business operations and direct-to-consumer travel bookings.', 
      icon: 'flight_takeoff',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      title: 'Dynamic Questionnaire Engine', 
      description: 'Highly configurable questionnaire system with complex conditional logic, state management, and dynamic form generation.', 
      icon: 'dynamic_form',
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Education Management Software', 
      description: 'End-to-end management solution for educational institutions handling student data, courses, and administration.', 
      icon: 'school',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      title: 'E-Commerce Applications', 
      description: 'Scalable e-commerce platforms with optimized performance, NgRx state management, and seamless checkout experiences.', 
      icon: 'shopping_cart',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  certifications = [
    { name: 'JavascriptES6: The Complete Developer\'s Guide', details: 'Array Methods - Destructuring' },
    { name: 'React 18 Course 2025', details: 'React Hooks, Axios API, Router, Context API' },
    { name: 'Test Angular application using Jasmine and Karma', details: 'Angular, Jasmine, Karma' },
    { name: 'Introduction to RAG - Pandas Python', details: 'Data Manipulation, Python, Pandas, Vector DB' },
  ];

  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        animate('.hero-text', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: stagger(0.1) });
        
        const sections = document.querySelectorAll('.section-fade-in');
        sections.forEach((section) => {
          inView(section, () => {
            animate(section, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, ease: 'easeOut' });
          }, { margin: "-100px" });
        });
      }, 100);
    });
  }

  scrollTo(sectionId: string) {
    this.activeSection.set(sectionId);
    this.isMenuOpen.set(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
