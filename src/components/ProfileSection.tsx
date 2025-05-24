// src/components/ProfileSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfileData } from '@/types/type';
import { ArrowDownIcon, EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/solid';

const ProfileSection = ({ data }: { data: ProfileData }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          <motion.div 
            variants={item}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="https://github.com/HusainMahtab/portfolioAssignment/blob/main/front_end/src/assets/profileImage.png?raw=true"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {data.name}
            </motion.h1>
            <motion.h2 
              variants={item}
              className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold mb-4"
            >
              {data.title}
            </motion.h2>
            <motion.p 
              variants={item}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {data.bio}
            </motion.p>

            <motion.div 
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl"
            >
              <motion.div variants={item} className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-2" />
                <a href={`mailto:${data.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  {data.contact.email}
                </a>
              </motion.div>
              <motion.div variants={item} className="flex items-center">
                <DevicePhoneMobileIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{data.contact.phone}</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{data.contact.location}</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center">
                <LinkIcon className="h-5 w-5 text-blue-500 mr-2" />
                <a onClick={()=>window.open(data.contact.github)} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#experience" className="animate-bounce">
            <ArrowDownIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;