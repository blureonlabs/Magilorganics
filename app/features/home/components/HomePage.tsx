import {Hero} from './Hero';
import {CategoryRow} from './CategoryRow';
import {ValueStrip} from './ValueStrip';
import {TopPicks} from './TopPicks';
import {FeatureStrip} from './FeatureStrip';
import {ShopByConcern} from './ShopByConcern';
import {ProofSection} from './ProofSection';
import {VillageStories} from './VillageStories';
import {MostLoved} from './MostLoved';
import {Heritage} from './Heritage';

interface HomePageProps {
  products: any[];
}

export function HomePage({products}: HomePageProps) {
  return (
    <div>
      <Hero />
      <CategoryRow />
      <ValueStrip />
      <TopPicks products={products} />
      <FeatureStrip />
      <ShopByConcern />
      <ProofSection />
      <VillageStories />
      <MostLoved products={products} />
      <Heritage />
    </div>
  );
}
