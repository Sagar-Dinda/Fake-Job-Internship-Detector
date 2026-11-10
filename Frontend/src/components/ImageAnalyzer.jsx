import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, Trash2, Scan, AlertCircle, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { SAMPLE_IMAGES } from '../utils/analyzer';

export default function ImageAnalyzer({ onAnalyze, isAnalyzing }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [imageMeta, setImageMeta] = useState(null);
  const fileInputRef = useRef(null);

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const handleFileProcess = (file, meta = null) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
      setError('Unsupported file type. Please upload a JPG, JPEG, PNG, or WEBP image.');
      return;
    }

    // 10MB limit
    if (file.size > 10 * 1024 * 1024) {
      setError('File size too large. Please select an image under 10MB.');
      return;
    }

    setError('');
    setSelectedImage(file);
    setImageMeta(meta);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl('');
    setImageMeta(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleLoadSample = (sample) => {
    setError('');
    setImageMeta(sample);
    setPreviewUrl(sample.preview);
    // Create a mock file object for consistency
    const blob = new Blob(['sample-content'], { type: 'image/png' });
    const mockFile = new File([blob], sample.name, { type: 'image/png' });
    setSelectedImage(mockFile);
  };

  const handleAnalyzeClick = () => {
    if (!selectedImage && !previewUrl) {
      setError('Please select or upload a screenshot first.');
      return;
    }
    setError('');
    onAnalyze({
      type: 'image',
      fileName: selectedImage?.name || 'recruitment_ad.png',
      imageMeta: imageMeta,
      previewUrl: previewUrl
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-indigo-400" /> Option B: Screenshot & Poster Image Analysis
          </h3>
          <p className="text-sm text-slate-400">
            Upload WhatsApp messages, Instagram hiring stories, Telegram chat ads, or offer letters.
          </p>
        </div>

        <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-400 border border-indigo-800/60">
          Visual OCR & Signature Scanner
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Box / Preview Area */}
      {!previewUrl ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragging
              ? 'border-cyan-400 bg-cyan-950/30 shadow-lg shadow-cyan-500/20'
              : 'border-slate-700/80 hover:border-cyan-500/50 bg-slate-900/50 hover:bg-slate-900/80'
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-7 h-7 text-indigo-400" />
            </div>

            <div>
              <p className="text-base font-semibold text-white">
                Drag and drop your screenshot here, or{' '}
                <span className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
                  browse files
                </span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Supports JPG, JPEG, PNG, WEBP (Max 10MB)
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Automatic text & UPI payment detection simulated</span>
            </div>
          </div>
        </div>
      ) : (
        /* Image Preview Box with Scanning Effect */
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-4">
          {/* Scanning Animation Line during Analysis */}
          {isAnalyzing && (
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scan z-20 pointer-events-none" />
          )}

          <div className="relative max-h-80 w-full overflow-hidden rounded-xl flex items-center justify-center bg-slate-900/90 border border-slate-800">
            <img
              src={previewUrl}
              alt="Uploaded job offer preview"
              className="max-h-80 w-auto object-contain rounded-lg"
            />

            {/* Scanning Overlay State */}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10 text-cyan-300 font-mono text-sm">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                <span className="animate-pulse">Performing Simulated Visual OCR...</span>
              </div>
            )}
          </div>

          {/* File Meta and Action Row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2 overflow-hidden">
              <ImageIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                {selectedImage?.name || 'sample_screenshot.png'}
              </span>
              {imageMeta && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300 border border-purple-800/40">
                  {imageMeta.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRemoveImage}
                disabled={isAnalyzing}
                className="px-3.5 py-2 text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/50 rounded-lg transition-all flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Image</span>
              </button>

              <button
                onClick={handleAnalyzeClick}
                disabled={isAnalyzing}
                className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-400 hover:to-pink-500 shadow-md shadow-indigo-500/20 rounded-lg transition-all flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Scan className="w-3.5 h-3.5" />
                    <span>Analyze Image</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Validation Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm px-1">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Demo Preset Images */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Or test with built-in sample screenshot ads:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SAMPLE_IMAGES.map((img) => (
            <button
              key={img.id}
              onClick={() => handleLoadSample(img)}
              disabled={isAnalyzing}
              className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                img.scenario === 'scam'
                  ? 'bg-rose-950/20 border-rose-800/50 hover:bg-rose-900/30 text-rose-200'
                  : 'bg-emerald-950/20 border-emerald-800/50 hover:bg-emerald-900/30 text-emerald-200'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  img.scenario === 'scam'
                    ? 'bg-rose-900/50 text-rose-400'
                    : 'bg-emerald-900/50 text-emerald-400'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold truncate">{img.company}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {img.description}
                </div>
                <div className="text-[10px] font-mono mt-1 text-slate-300">
                  Click to preview & analyze &rarr;
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
