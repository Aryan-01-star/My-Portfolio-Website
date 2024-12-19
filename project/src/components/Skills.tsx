import React from 'react';
import { Palette, Code, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ title, skills, icon: Icon, delay }: {
  title: string;
  skills: string[];
  icon: any;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900 p-6 rounded-lg space-y-4 hover:bg-gray-800 transition-colors"
    >
      <div className="flex items-center space-x-3">
        <Icon className="text-purple-500" size={24} />
        <h3 className="text-xl text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="text-gray-400"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title="UI/UX Design"
            icon={Palette}
            skills={["Figma", "Wireframes Designing", "Prototyping", "User Research"]}
            delay={0.2}
          />
          <SkillCard
            title="Frontend Development"
            icon={Code}
            skills={["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "WordPress"]}
            delay={0.4}
          />
          <SkillCard
            title="Backend Development"
            icon={Wrench}
            skills={["Node.js", "Python", "MySQL", "PostgreSQL", "QA Testing(Beginner)"]}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;