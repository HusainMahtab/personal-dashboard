// src/components/AcademicsSection.tsx
import { ProfileData } from "@/types/type";

interface AcademicsSectionProps {
  data: ProfileData;
}

const AcademicsSection: React.FC<AcademicsSectionProps> = ({ data }) => {
  return (
    <section id="academics" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Academics & Experience</h2>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
          <div className="space-y-8">
            {data.academics.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h4 className="text-xl font-medium text-gray-900">{item.institution}</h4>
                  <span className="text-blue-600">{item.year}</span>
                </div>
                <h5 className="text-lg font-medium text-gray-700 mb-2">{item.degree}</h5>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
          <div className="space-y-8">
            {data.experience.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h4 className="text-xl font-medium text-gray-900">{item.company}</h4>
                  <span className="text-blue-600">{item.duration}</span>
                </div>
                <h5 className="text-lg font-medium text-gray-700 mb-2">{item.position}</h5>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;