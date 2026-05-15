import {useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {HeartIcon} from '~/shared/icons';

interface GalleryImage {
  url: string;
  altText?: string | null;
  width?: number;
  height?: number;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  title: string;
}

export function ProductGallery({images, title}: ProductGalleryProps) {
  const [activeImg, setActiveImg] = useState(0);
  const mainImage = images[activeImg] ?? images[0];

  if (!images.length) {
    return (
      <div style={styles.placeholder}>
        <span className="serif" style={{fontSize: 64, color: 'var(--magil-ink-soft)'}}>
          {title.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div>
      {/* Main image */}
      <div style={styles.mainWrap}>
        {mainImage && (
          <Image
            alt={mainImage.altText || title}
            data={mainImage}
            aspectRatio="1/1"
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        )}

        {/* Wishlist button */}
        <button
          style={styles.wishlistBtn}
          aria-label="Add to wishlist"
          type="button"
        >
          <HeartIcon size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={styles.thumbGrid} className="scroll-x">
          {images.map((img, i) => (
            <button
              key={img.url}
              onClick={() => setActiveImg(i)}
              type="button"
              aria-label={`View image ${i + 1}`}
              style={{
                ...styles.thumbBtn,
                border:
                  activeImg === i
                    ? '2px solid var(--magil-red-deep)'
                    : '1px solid var(--magil-line)',
              }}
            >
              <Image
                alt={img.altText || `${title} - image ${i + 1}`}
                data={img}
                aspectRatio="1/1"
                sizes="80px"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </button>
          ))}
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: galleryResponsiveStyles,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  mainWrap: {
    aspectRatio: '1 / 1',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid var(--magil-line)',
    background: 'var(--magil-cream-warm)',
  },
  placeholder: {
    aspectRatio: '1 / 1',
    borderRadius: 20,
    background: 'var(--magil-cream-warm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--magil-line)',
  },
  wishlistBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'rgba(255,255,255,0.9)',
    width: 44,
    height: 44,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--magil-red-deep)',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  thumbGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
    gap: 8,
    marginTop: 14,
  },
  thumbBtn: {
    aspectRatio: '1',
    borderRadius: 8,
    cursor: 'pointer',
    padding: 0,
    overflow: 'hidden',
    background: 'var(--magil-cream-warm)',
    minWidth: 0,
    minHeight: 44,
  },
};

const galleryResponsiveStyles = /* css */ `
  @media (max-width: 767px) {
    .pdp-gallery__thumbs {
      display: flex;
      overflow-x: auto;
      gap: 8px;
      scroll-snap-type: x mandatory;
    }
    .pdp-gallery__thumbs button {
      flex-shrink: 0;
      width: 60px;
      scroll-snap-align: start;
    }
  }
`; // Gallery is already full width on mobile via single-column grid in ProductPage
