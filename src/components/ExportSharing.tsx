import React from 'react';
import { Download, Share2 } from 'lucide-react';

interface ExportSharingProps {
  generatedAds: string[];
}

const ExportSharing: React.FC<ExportSharingProps> = ({ generatedAds }) => {
  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Exporting ads:', generatedAds);
  };

  const handleShare = () => {
    // TODO: Implement sharing functionality
    console.log('Sharing ads:', generatedAds);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Export & Share</h2>
      <div className="flex space-x-4">
        <button
          className="flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={handleExport}
        >
          <Download className="h-5 w-5 mr-2" />
          Export
        </button>
        <button
          className="flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleShare}
        >
          <Share2 className="h-5 w-5 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ExportSharing;