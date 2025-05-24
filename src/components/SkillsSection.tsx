// src/components/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Skills } from '@/types/type';

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
        />
      </div>
    </div>
  );
};

const SkillsSection = ({ skills }: { skills: Skills }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Languages
            </h3>
            {skills.languages.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Frameworks
            </h3>
            {skills.frameworks.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Tools
            </h3>
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;