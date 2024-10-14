import React from 'react';
import { Settings } from 'lucide-react';

interface CustomizationInterfaceProps {
  generatedAds: string[];
}

const CustomizationInterface: React.FC<CustomizationInterfaceProps> = ({ generatedAds }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Customize Ads</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {generatedAds.map((ad, index) => (
          <div key={index} className="relative">
            <img src={ad} alt={`Generated Ad ${index + 1}`} className="w-full h-auto rounded-lg" />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizationInterface;