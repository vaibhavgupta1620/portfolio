import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Rapidly adapting to new technologies and frameworks'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to problem-solving and development'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering impactful, user-centered solutions'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a motivated and detail-oriented web developer currently pursuing my Master's in Computer Applications
                at Medicaps University, Indore. With a solid foundation in both frontend and backend development,
                I specialize in creating responsive, interactive web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My technical expertise spans across HTML, CSS, JavaScript, and Node.js, with hands-on experience
                in modern frameworks like React and Express.js. I have a passion for clean code, user experience,
                and continuously learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As someone who thrives in collaborative environments, I'm eager to contribute to impactful projects
                and grow alongside talented teams. My goal is to build solutions that not only meet technical
                requirements but also create meaningful user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glow p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.04</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="card-glow p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;