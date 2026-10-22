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
      aria-label={`${label} preview`}
      tabIndex={-1}
      onClick={onClose}
    >
      <div className="cv-preview-frame" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" aria-label="Close CV preview" onClick={onClose}>
          ×
        </button>
        <div className="cv-document">
          <img className="cv-page" src={`${base}-1.png`} alt="Resume — page 1" />
          <img className="cv-page" src={`${base}-2.png`} alt="Resume — page 2" />
          <a className="cv-download" href={cvSrc} download>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}