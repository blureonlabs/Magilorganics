/**
 * Kodi Eli Border — vine wave border from pattern library B-02.
 * Used as a decorative top border on the footer.
 */
export function KodiBorder() {
  return (
    <div className="kolam-kodi-border" aria-hidden="true">
      <svg
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
        className="kolam-kodi-border__svg"
      >
        <g
          stroke="var(--magil-gold)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M20 50 Q 80 20 140 50 T 260 50 T 380 50 T 500 50 T 620 50 T 740 50 T 800 50" />
          <path d="M20 50 Q 80 80 140 50 T 260 50 T 380 50 T 500 50 T 620 50 T 740 50 T 800 50" />
          {/* leaves */}
          <path
            d="M 80 32 Q 70 18 78 12 Q 86 22 84 36 Z"
            fill="var(--magil-gold)"
          />
          <path
            d="M 200 68 Q 210 82 202 88 Q 194 78 196 64 Z"
            fill="var(--magil-gold)"
          />
          <path
            d="M 320 32 Q 310 18 318 12 Q 326 22 324 36 Z"
            fill="var(--magil-gold)"
          />
          <path
            d="M 440 68 Q 450 82 442 88 Q 434 78 436 64 Z"
            fill="var(--magil-gold)"
          />
          <path
            d="M 560 32 Q 550 18 558 12 Q 566 22 564 36 Z"
            fill="var(--magil-gold)"
          />
          <path
            d="M 680 68 Q 690 82 682 88 Q 674 78 676 64 Z"
            fill="var(--magil-gold)"
          />
        </g>
      </svg>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .kolam-kodi-border {
          width: 100%;
          pointer-events: none;
          overflow: hidden;
          height: 20px;
          opacity: 0.15;
        }
        .kolam-kodi-border__svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        @media (max-width: 767px) {
          .kolam-kodi-border {
            height: 14px;
            opacity: 0.1;
          }
        }
      `,
        }}
      />
    </div>
  );
}
