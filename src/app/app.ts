import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
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
export class App implements OnInit {
  activeSection = signal('home');
  isMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  skills = [
    'Angular (14+)', 'TypeScript', 'RxJS', 'NgRx / Redux',
    'ReactJS', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap',
    'C# .NET', 'Entity Framework', 'SQL Server', 'REST APIs',
    'Nx Monorepo', 'Jasmine / Karma', 'Postman', 'JIRA'
  ];

  certifications = [
    { name: 'JavascriptES6: The Complete Developer\'s Guide', details: 'Array Methods - Destructuring' },
    { name: 'React 18 Course 2025', details: 'React Hooks, Axios API, Router, Context API' },
    { name: 'Test Angular application using Jasmine and Karma', details: 'Angular, Jasmine, Karma' },
    { name: 'Introduction to RAG - Pandas Python', details: 'Data Manipulation, Python, Pandas, Vector DB' },
  ];

  ngOnInit() {
    setTimeout(() => {
      animate('.hero-text', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: stagger(0.1) });
      
      const sections = document.querySelectorAll('.section-fade-in');
      sections.forEach((section) => {
        inView(section, () => {
          animate(section, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, ease: 'easeOut' });
        }, { margin: "-100px" });
      });
    }, 100);
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
