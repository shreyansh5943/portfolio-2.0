import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = {
  fullstack: [
    {
      title: 'Code Snippet manager',
      description: 'A modern web application built with React and Node.js',
      image: 'https://myaolcc.com/wp-content/uploads/2022/12/Considering-a-Coding-Bootcamp-Trends-to-Expect-in-2023-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Workout tracker',
      description: 'Dynamic dashboard with real-time updates',
      image: 'https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?s=612x612&w=0&k=20&c=d0F_7Rs2bysfEL9zr9JVN1TLzVOlEycNkz-vd19OANA=',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ],
  aiTools: [
    {
      title: 'AI Content Generator',
      description: 'Automated content generation using GPT-3',
      image: 'https://cdn.prod.website-files.com/64be86eaa29fa71f24b00685/6566021e312a8bb43bae53a5_How%20Workflow%20Automation%20Transforms%20Modern%20Business_%20(1).jpg',
      tags: ['Python', 'OpenAI', 'FastAPI'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Automation Pipeline',
      description: 'Workflow automation tool for data processing',
      image: 'https://krispcall.com/blog/wp-content/uploads/2024/04/What-is-workflow-automation.webp',
      tags: ['Python', 'TensorFlow', 'Docker'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('fullstack');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore my latest work across different domains
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('fullstack')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === 'fullstack'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Fullstack Development
            </button>
            <button
              onClick={() => setActiveCategory('aiTools')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === 'aiTools'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              AI Tools & Automation
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeCategory].map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  inView 
}: { 
  project: any; 
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
  >
    <div className="relative overflow-hidden group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <a
          href={project.demoUrl}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Projects;