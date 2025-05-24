// src/components/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { AcademicItem, ExperienceItem } from "@/types/type";
import { BuildingOfficeIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const ExperienceSection = ({
  academics,
  experience,
}: {
  academics: AcademicItem[];
  experience: ExperienceItem[];
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Education and professional experience timeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {[...experience, ...academics]
              .sort((a, b) => {
                // Get start years safely
                const aYear = a.year ? parseInt(a.year.split(" - ")[0]) : 0;
                const bYear = b.year ? parseInt(b.year.split(" - ")[0]) : 0;
                return bYear - aYear;
              })
              .map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 p-6 rounded-xl shadow-lg ${
                      "responsibilities" in item
                        ? "bg-blue-50 dark:bg-gray-800"
                        : "bg-indigo-50 dark:bg-gray-800"
                    } ${index % 2 === 0 ? "ml-6 md:ml-12" : "mr-6 md:mr-12"}`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-full ${
                          "responsibilities" in item
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "bg-indigo-100 dark:bg-indigo-900"
                        }`}
                      >
                        {"responsibilities" in item ? (
                          <BuildingOfficeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <BookOpenIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {"company" in item ? item.company : item.institution}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {"position" in item ? item.position : item.degree}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {item.year}
                        </p>
                      </div>
                    </div>
                    {"description" in item ? (
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    ) : (
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
