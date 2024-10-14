import React from 'react';
import { Wand2 } from 'lucide-react';

interface AdGeneratorProps {
  uploadedImages: File[];
  selectedTemplate: string | null;
  onAdsGenerated: (ads: string[]) => void;
}

const AdGenerator: React.FC<AdGeneratorProps> = ({ uploadedImages, selectedTemplate, onAdsGenerated }) => {
  const handleGenerateAds = () => {
    // TODO: Implement AI-powered ad generation
    const mockGeneratedAds = [
      'https://source.unsplash.com/random/800x600?ad=1',
      'https://source.unsplash.com/random/800x600?ad=2',
      'https://source.unsplash.com/random/800x600?ad=3',
    ];
    onAdsGenerated(mockGeneratedAds);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Generate Ads</h2>
      <button
        className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleGenerateAds}
        disabled={uploadedImages.length === 0 || !selectedTemplate}
      >
        <Wand2 className="h-5 w-5 mr-2" />
        Generate Ads
      </button>
    </div>
  );
};

export default AdGenerator;