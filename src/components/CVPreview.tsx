import { useDialog } from '../hooks/useDialog'

interface CVPreviewProps {
  cvSrc: string
  label: string
  onClose: () => void
}

export function CVPreview({ cvSrc, label, onClose }: CVPreviewProps) {
  const base = cvSrc.replace(/\.pdf$/i, '')
  const dialogRef = useDialog<HTMLDivElement>(onClose)

  return (
    <div
      ref={dialogRef}
      className="lightbox-overlay cv-preview"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onClick={onClose}
    >
      <div className="cv-preview-frame" onClick={(event) => event.stopPropagation()}>
        <div className="cv-toolbar">
          <p className="cv-toolbar-title">{label} Preview</p>
          <div className="cv-toolbar-actions">
            <a className="button primary cv-download" href={cvSrc} download>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
            <button
              className="cv-close"
              type="button"
              aria-label="Close CV preview"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </div>
        <div className="cv-document">
          <img className="cv-page" src={`${base}-1.png`} alt="Resume — page 1" />
          <img className="cv-page" src={`${base}-2.png`} alt="Resume — page 2" />
        </div>
      </div>
    </div>
  )
}