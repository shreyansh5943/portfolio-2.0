import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 90 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Java', level: 60 },
  { name: 'C/C++', level: 60 },
  { name: 'Python', level: 50 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Adaptation is the key to survival in the digital era!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={index * 0.1}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="prose dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                With over 5 years of experience in web development, I've worked on various
                projects ranging from small business websites to large-scale applications.
                I specialize in creating responsive, accessible, and performant web applications
                using modern technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ 
  skill, 
  delay, 
  inView 
}: { 
  skill: { name: string; level: number }; 
  delay: number;
  inView: boolean;
}) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 0.8, delay }}
        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
      />
    </div>
  </div>
);

export default About;