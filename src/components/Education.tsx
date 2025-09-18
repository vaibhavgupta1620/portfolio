import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Medicaps University',
      location: 'Indore, Madhya Pradesh',
      duration: 'Aug 2024 - Jun 2026',
      grade: '8.04 CGPA',
      status: 'Currently Pursuing',
      description: 'Advanced studies in computer applications with focus on modern web technologies, software engineering, and database management.',
      highlights: [
        'Specialization in Web Development',
        'Advanced Programming Concepts',
        'Software Engineering Principles',
        'Database Design & Management'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Awadhesh Pratap Singh University',
      location: 'Rewa, Madhya Pradesh',
      duration: 'Aug 2021 - Jun 2024',
      grade: '8.08 CGPA',
      status: 'Completed',
      description: 'Comprehensive undergraduate program covering programming fundamentals, data structures, algorithms, and web development.',
      highlights: [
        'Strong Foundation in Programming',
        'Data Structures & Algorithms',
        'Web Development Fundamentals',
        'Software Development Life Cycle'
      ]
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'ECI Higher Secondary School',
      location: 'Rewa, Madhya Pradesh',
      duration: '2020',
      grade: '70.80%',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on mathematics and science subjects.',
      highlights: [
        'Mathematics Excellence',
        'Science Foundation',
        'Analytical Thinking',
        'Problem Solving Skills'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <div
              key={education.degree}
              className="card-glow p-8 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${education.status === 'Currently Pursuing'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                {education.status}
              </div>

              {/* Degree Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Degree Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {education.degree}
                </h3>

                <h4 className="text-lg font-semibold text-muted-foreground">
                  {education.institution}
                </h4>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {education.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {education.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-primary">{education.grade}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>

                {/* Highlights */}
                <div>
                  <h5 className="text-sm font-semibold mb-3 text-primary">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {education.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Academic Excellence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">8.04</div>
              <div className="text-sm text-muted-foreground">Current Master's CGPA</div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">8.08</div>
              <div className="text-sm text-muted-foreground">Bachelor's CGPA</div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">3+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Ongoing Learning</h3>
          <div className="card-glow p-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Continuously expanding my knowledge through online courses, tutorials, and hands-on projects. 
              Currently focusing on advanced React concepts, Node.js backend development, and modern 
              deployment practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="skill-badge">React Advanced Patterns</span>
              <span className="skill-badge">Node.js & Express</span>
              <span className="skill-badge">Database Design</span>
              <span className="skill-badge">Cloud Deployment</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;