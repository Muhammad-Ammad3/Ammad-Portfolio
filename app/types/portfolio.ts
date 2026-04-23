export interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  image: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  education: {
    degree: string;
    college: string;
    institute: string;
    year: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    languages: string[];
  };
  projects: Project[];
  links: {
    github: string;
    linkedin: string;
  };
  contact: {
    email: string;
    phone: string;
  };
}