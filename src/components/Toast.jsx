import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notification">
      <div className="toast-icon">
        <Sparkles size={18} className="text-cyan" />
      </div>
      <span className="toast-text">{message}</span>
      <button onClick={onClose} className="toast-close" aria-label="Close notification">
        <X size={15} />
      </button>
    </div>
  );
}
