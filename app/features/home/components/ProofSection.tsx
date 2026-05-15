const PROOFS = [
  {
    title: 'Glyphosate-Free',
    body: 'Every batch independently lab-tested. We name the farm, name the farmer, and publish the results. No banned herbicides, ever.',
    stamp: 'GR',
  },
  {
    title: 'Siddha-Verified',
    body: 'Registered Siddha practitioners from Madurai review every formula against 3,000-year-old texts. No modern shortcuts.',
    stamp: 'SI',
  },
  {
    title: 'FSSC 22000 Certified',
    body: 'Our village facility meets the same international food-safety standards as top global brands. Clean rooms, not just clean labels.',
    stamp: 'F22',
  },
];

export function ProofSection() {
  return (
    <section className="proof-section">
      <div className="proof-section__inner">
        <div className="proof-section__header">
          <div className="eyebrow">Proof, not promises</div>
          <h2 className="serif proof-section__heading">
            We test what we{' '}
            <em className="proof-section__accent">sell</em>. You see the results.
          </h2>
        </div>

        <div className="proof-section__grid">
          {PROOFS.map((p) => (
            <div key={p.title} className="proof-section__card">
              <div className="proof-section__stamp">{p.stamp}</div>
              <h3 className="serif-bold proof-section__card-title">
                {p.title}
              </h3>
              <p className="proof-section__card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: proofStyles}} />
    </section>
  );
}

const proofStyles = /* css */ `
  .proof-section {
    padding: 90px 24px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .proof-section { padding: 90px 48px; }
  }

  .proof-section__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .proof-section__header {
    text-align: center;
    margin-bottom: 50px;
  }
  .proof-section__heading {
    font-size: clamp(32px, 5vw, 56px);
    margin: 10px 0;
    color: var(--magil-ink);
    line-height: 1;
  }
  .proof-section__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
    font-style: italic;
  }

  .proof-section__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
  }
  @media (min-width: 768px) {
    .proof-section__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .proof-section__card {
    background: var(--magil-cream);
    border: 1px solid var(--magil-line);
    border-radius: 20px;
    padding: 40px 36px;
    position: relative;
  }

  .proof-section__stamp {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--magil-gold-light) 0%, var(--magil-gold) 100%);
    border: 3px solid var(--magil-red-deep);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    color: var(--magil-red-deep);
    margin-bottom: 24px;
    box-shadow: inset 0 -4px 12px rgba(139,14,32,0.2);
  }

  .proof-section__card-title {
    font-size: 26px;
    margin: 0;
    color: var(--magil-ink);
  }
  .proof-section__card-body {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--magil-ink-soft);
  }
`;
