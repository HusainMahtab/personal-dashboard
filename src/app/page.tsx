// src/app/page.tsx
import Navbar from '@/components/Navbar';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { profileData } from '@/data/profileData';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <ProfileSection data={profileData} />
          <ExperienceSection 
            academics={profileData.academics} 
            experience={profileData.experience} 
          />
          <SkillsSection skills={profileData.skills} />
          <ContactSection contact={profileData.contact} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}