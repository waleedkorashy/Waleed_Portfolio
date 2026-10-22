import type { Project } from '../types/project'
import { useDialog } from '../hooks/useDialog'

interface ScreenshotLightboxProps {
  image: NonNullable<Project['image']>
  onClose: () => void
}

export function ScreenshotLightbox({ image, onClose }: ScreenshotLightboxProps) {
  const dialogRef = useDialog<HTMLDivElement>(onClose)

  return (
    <div
      ref={dialogRef}
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshot preview"
      tabIndex={-1}
      onClick={onClose}
    >
      <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1248px) 1200px, 94vw"
          width={image.width}
          height={image.height}
          alt={image.alt}
          decoding="async"
        />
        <figcaption>{image.alt}</figcaption>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          &times;
        </button>
      </figure>
    </div>
  )
}
