import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <span className="modal-image-title">{imageAlt}</span>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-image-container">
          <img src={imageSrc} alt={imageAlt} className="modal-large-img" />
        </div>
      </div>
    </div>
  );
}
