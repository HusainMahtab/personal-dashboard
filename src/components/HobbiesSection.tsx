// src/components/HobbiesSection.tsx
import { ProfileData } from "@/types/type";

interface HobbiesSectionProps {
  data: ProfileData;
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ data }) => {
  return (
    <section id="hobbies" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Hobbies & Interests</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">{hobby}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;