import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImagesUploaded: (files: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesUploaded }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onImagesUploaded(acceptedFiles);
  }, [onImagesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*', multiple: true });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Product Images</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : ''
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag 'n' drop some images here, or click to select files
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;