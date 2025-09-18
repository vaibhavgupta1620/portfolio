import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'CODEALPHA',
      location: 'Virtual',
      duration: '1 Month',
      period: '2024',
      type: 'Internship',
      description: 'Gained hands-on experience in frontend technologies while assisting in the development of web applications.',
      achievements: [
        'Worked with modern frontend technologies and frameworks',
        'Collaborated with development team on real-world projects',
        'Enhanced skills in responsive web design',
        'Gained experience in version control and team workflows'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${index}`}
              className="relative mb-12 last:mb-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow" />

              {/* Content Card */}
              <div className="ml-20 card-glow p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-xl font-semibold mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      experience.type === 'Internship' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {experience.type}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    {experience.duration}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-primary">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-3 text-primary">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Looking for Opportunities */}
        <div className="text-center mt-16">
          <div className="card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Open to Opportunities</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm actively seeking full-time opportunities and internships where I can contribute 
              to meaningful projects while continuing to grow as a developer. I'm particularly 
              interested in roles that involve modern web technologies and collaborative team environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="skill-badge">Full-time Positions</span>
              <span className="skill-badge">Internships</span>
              <span className="skill-badge">Remote Work</span>
              <span className="skill-badge">Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;