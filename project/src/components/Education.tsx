import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, institution, description, index }: {
  year: string;
  title: string;
  institution: string;
  description: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 group"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-purple-500/20">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="absolute top-0 left-0 w-full bg-purple-500/50"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"
        />
      </div>
      <div className="space-y-2 transform transition-transform duration-300 group-hover:-translate-y-1">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.2 }}
          className="text-purple-500"
        >
          {year}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="text-xl text-white"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-gray-400"
        >
          {institution}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-gray-500"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <TimelineItem
            index={0}
            year="2022-On Going"
            title="Bachelor's in Software Engineering"
            institution="Sharda University"
            description="Focused on Software Development and CS related skills"
          />
          <TimelineItem
            index={1}
            year="2022"
            title="Senior Schooling"
            institution="Laxmi Public School"
            description="Completed senior secondary education with a major in Science"
          />
          <TimelineItem
            index={2}
            year="2020"
            title="HighSchool Schooling"
            institution="Williamsburg Charter HighSchool"
            description="Completed high secondary education"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;