import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'MERN Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Frontend Specialist',
    'Backend Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/vaibhav-gupta',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/vaibhav-gupta',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:16vaibhavgupta@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        {/* Profile Picture */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">VG</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Vaibhav Gupta
          </span>
        </h1>

        {/* Animated Tagline */}
        <div className="h-16 mb-8 flex items-center justify-center animate-slide-in">
          <p className="text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary font-semibold">
              {titles[currentTitle]}
            </span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Passionate web developer with expertise in full-stack development.
          I create beautiful, responsive applications using modern technologies
          and love solving complex problems through clean, efficient code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => scrollToSection('#projects')}
            className="btn-hero group"
          >
            View My Work
            <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
          <a
            href="/Vaibhav_Gupta_Resume.pdf"
            download="Vaibhav_Gupta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-outline-hero">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-card/50 border border-border ${social.color} 
                          hover:scale-110 hover:shadow-glow transition-all duration-300 glow-effect`}
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;