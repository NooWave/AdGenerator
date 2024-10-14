import React from 'react';
import { Image } from 'lucide-react';

interface TemplateLibraryProps {
  onTemplateSelected: (templateId: string) => void;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({ onTemplateSelected }) => {
  const templates = [
    { id: '1', name: 'Modern Minimalist' },
    { id: '2', name: 'Bold and Vibrant' },
    { id: '3', name: 'Elegant Luxury' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Template Library</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => onTemplateSelected(template.id)}
          >
            <Image className="h-6 w-6 mr-2 text-gray-400" />
            <span>{template.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;