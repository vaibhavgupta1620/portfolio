import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack MERN',
      description: 'Expertise in MongoDB, Express.js, React.js, and Node.js'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Strong foundation in DSA, OOPS, and Core Java'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Passionate about exploring and adapting to new technologies'
    },
    {
      icon: Users,
      title: 'Active Collaborator',
      description: 'Eager to take on challenges and improve as a developer'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building responsive and user-friendly web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am an MCA final-year student at Medicaps University with a strong interest in full-stack web development.
                I have hands-on experience working with the MERN stack (MongoDB, Express.js, React.js, and Node.js)
                and a good understanding of Core Java concepts, DSA, and OOPS.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I enjoy building responsive and user-friendly web applications, always striving to write clean and efficient code.
                My focus is on creating robust applications that provides great user experience while maintaining a
                well-structured backend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm a quick learner, passionate about exploring new technologies, and eager to take on challenges
                that help me improve my skills as a developer. I'm currently looking for opportunities where I can
                contribute my technical skills to meaningful projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glow p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.04</div>
                <div className="text-sm text-muted-foreground">MCA CGPA (Pursuing)</div>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.08</div>
                <div className="text-sm text-muted-foreground">Bachelor's CGPA</div>
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