/**
 * Pulli Divider — a subtle dotted-line kolam divider between homepage sections.
 * Extracted from pattern library B-06 (Pulli Divider).
 */
export function SectionDivider() {
  return (
    <>
      <div className="kolam-section-divider" aria-hidden="true">
        <svg
          viewBox="0 0 800 100"
          preserveAspectRatio="xMidYMid meet"
          className="kolam-section-divider__svg"
        >
          <g stroke="var(--magil-red-deep)" strokeWidth="1.2" fill="none">
            <line x1="20" y1="50" x2="370" y2="50" />
            <line x1="430" y1="50" x2="780" y2="50" />
          </g>
          <g
            transform="translate(400 50)"
            stroke="var(--magil-red-deep)"
            strokeWidth="1.6"
            fill="none"
          >
            <circle r="20" />
            <circle r="10" fill="var(--magil-gold)" stroke="var(--magil-red-deep)" />
            <circle r="3" fill="var(--magil-red-deep)" stroke="none" />
          </g>
          <g fill="var(--magil-red-deep)">
            <circle cx="60" cy="50" r="2" />
            <circle cx="120" cy="50" r="2" />
            <circle cx="180" cy="50" r="2" />
            <circle cx="240" cy="50" r="2" />
            <circle cx="300" cy="50" r="2" />
            <circle cx="500" cy="50" r="2" />
            <circle cx="560" cy="50" r="2" />
            <circle cx="620" cy="50" r="2" />
            <circle cx="680" cy="50" r="2" />
            <circle cx="740" cy="50" r="2" />
          </g>
        </svg>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .kolam-section-divider {
          display: flex;
          justify-content: center;
          padding: 8px 24px;
          pointer-events: none;
        }
        .kolam-section-divider__svg {
          width: 100%;
          max-width: 200px;
          height: auto;
          opacity: 0.15;
        }
        @media (max-width: 767px) {
          .kolam-section-divider__svg {
            max-width: 140px;
            opacity: 0.1;
          }
        }
      `,
        }}
      />
    </>
  );
}
