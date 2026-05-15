import {useState} from 'react';

interface AccordionSection {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductAccordionProps {
  descriptionHtml: string;
}

/**
 * Build accordion sections. The first section always uses the product's
 * description HTML. Other sections can later be powered by metafields;
 * for now we render static content placeholders.
 */
function buildSections(descriptionHtml: string): AccordionSection[] {
  return [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div
          dangerouslySetInnerHTML={{__html: descriptionHtml}}
          style={{fontSize: 15, lineHeight: 1.7, color: 'var(--magil-ink-soft)'}}
        />
      ),
    },
    {
      id: 'ingredients',
      label: 'What\u2019s Inside',
      content: (
        <p style={{fontSize: 15, lineHeight: 1.7, color: 'var(--magil-ink-soft)'}}>
          Every ingredient is sourced from named farms across Tamil Nadu. Check
          the product packaging for the full herb list, origin, and batch number.
          We believe you deserve to know exactly what goes into your body.
        </p>
      ),
    },
    {
      id: 'usage',
      label: 'How to Use',
      content: (
        <p style={{fontSize: 15, lineHeight: 1.7, color: 'var(--magil-ink-soft)'}}>
          Follow the dosage and preparation instructions on your product label.
          For best results, take consistently at the same time each day. If
          you have questions, our Siddha practitioners are happy to guide you
          &mdash; reach us on WhatsApp.
        </p>
      ),
    },
    {
      id: 'benefits',
      label: 'Key Benefits',
      content: (
        <p style={{fontSize: 15, lineHeight: 1.7, color: 'var(--magil-ink-soft)'}}>
          This product is formulated according to traditional Siddha texts.
          Benefits vary by individual constitution and consistency of use.
          Visit our blog for in-depth guides on how each herb works.
        </p>
      ),
    },
    {
      id: 'storage',
      label: 'Storage & Shelf Life',
      content: (
        <p style={{fontSize: 15, lineHeight: 1.7, color: 'var(--magil-ink-soft)'}}>
          Keep in a cool, dry spot away from sunlight. Always use a clean, dry
          spoon. Seal the pouch tightly after each use. Best consumed within
          90 days of opening for full potency.
        </p>
      ),
    },
  ];
}

export function ProductAccordion({descriptionHtml}: ProductAccordionProps) {
  const [openId, setOpenId] = useState<string | null>('description');
  const sections = buildSections(descriptionHtml);

  return (
    <section
      style={{
        background: 'var(--magil-cream)',
        padding: '0 48px 80px',
      }}
    >
      <div style={{maxWidth: 1100, margin: '0 auto'}}>
        {sections.map((section, i) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              style={{
                borderTop: i === 0 ? '1px solid var(--magil-line)' : 'none',
                borderBottom: '1px solid var(--magil-line)',
              }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : section.id)}
                type="button"
                style={{
                  width: '100%',
                  padding: '26px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--magil-red-deep)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                  minHeight: 44,
                }}
                aria-expanded={isOpen}
              >
                {section.label}
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: '1.5px solid var(--magil-red-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 400,
                    transition: 'transform 0.2s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div style={{paddingBottom: 30}}>
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: accordionResponsiveStyles,
        }}
      />
    </section>
  );
}

const accordionResponsiveStyles = /* css */ `
  @media (max-width: 767px) {
    section[style*="padding: 0 48px"] {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
  }
`;
