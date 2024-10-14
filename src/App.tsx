import React, { useState } from 'react';
import { Upload, Image, Settings, Share2 } from 'lucide-react';
import ImageUpload from './components/ImageUpload';
import TemplateLibrary from './components/TemplateLibrary';
import AdGenerator from './components/AdGenerator';
import CustomizationInterface from './components/CustomizationInterface';
import ExportSharing from './components/ExportSharing';

function App() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedAds, setGeneratedAds] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI-Powered Ad Generator</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ImageUpload onImagesUploaded={setUploadedImages} />
            <TemplateLibrary onTemplateSelected={setSelectedTemplate} />
          </div>
          <div>
            <AdGenerator
              uploadedImages={uploadedImages}
              selectedTemplate={selectedTemplate}
              onAdsGenerated={setGeneratedAds}
            />
            <CustomizationInterface generatedAds={generatedAds} />
            <ExportSharing generatedAds={generatedAds} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;