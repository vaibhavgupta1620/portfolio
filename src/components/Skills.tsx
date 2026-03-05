import {
  Code,
  Database,
  Settings,
  Lightbulb,
  Globe,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'MERN Stack',
      icon: Code,
      skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Programming',
      icon: GitBranch,
      skills: ['JavaScript (ES6+)', 'Java (Core)', 'DSA'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Frontend/UI',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend/Concepts',
      icon: Database,
      skills: ['RESTful APIs', 'JWT Authentication', 'OOPS', 'DBMS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'Render', 'Vercel'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Core Foundation',
      icon: Lightbulb,
      skills: ['Responsive Design', 'Clean Code', 'Web Security', 'Version Control'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for full-stack web development and problem solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-glow p-6 group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-badge"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Azure Data Fundamentals', 'Advanced ML', 'Tableau', 'Big Data'].map((skill, index) => (
              <span
                key={skill}
                className="skill-badge border-dashed border-primary/50 text-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;