import { useEffect } from 'react'

interface CVPreviewProps {
  cvSrc: string
  label: string
  onClose: () => void
}

export function CVPreview({ cvSrc, label, onClose }: CVPreviewProps) {
  const base = cvSrc.replace(/\.pdf$/i, '')

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="lightbox-overlay cv-preview"
      role="dialog"
      aria-modal="true"
      aria-label={label}
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