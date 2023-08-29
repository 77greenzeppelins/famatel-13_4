import Image from 'next/image';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data / arrays of images for each category **/
import { cat2_sliderImages } from '@/public/images/all_products/c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { cat1_sliderImages } from '@/public/images/all_products/c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { cat3_sliderImages } from '@/public/images/all_products/c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { cat4_sliderImages } from '@/public/images/all_products/c4_gniazda-podwieszane/imgGniazdaPodwieszane';
import { cat5_sliderImages } from '@/public/images/all_products/c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';
import { cat6_sliderImages } from '@/public/images/all_products/c6_rozlacznik-bezpieczenstwa/imgRozlacznikBezpieczenstwa';
import { cat7_sliderImages } from '@/public/images/all_products/c7_ladowarki/imgLadowarki';
import { cat8_sliderImages } from '@/public/images/all_products/c8_obudowy-rozdzielnice/imgObudowyRozdzielnice';
import { cat9_sliderImages } from '@/public/images/all_products/c9_rozdzielnice-modulowe/imgRozdzielniceModulowe';
import { cat10_sliderImages } from '@/public/images/all_products/c10_puszki-instalacyjne/imgPuszkiInstalacyjne';

const arrOfImages = [
  cat1_sliderImages,
  cat2_sliderImages,
  cat3_sliderImages,
  cat4_sliderImages,
  cat5_sliderImages,
  cat6_sliderImages,
  cat7_sliderImages,
  cat8_sliderImages,
  cat9_sliderImages,
  cat10_sliderImages,
];

/**----------------------------------------------------**/
const ImageContnent: React.FunctionComponent<{
  categoryIndex: number;
  slideIndex: number;
}> = ({ categoryIndex, slideIndex }) => {
  /**Basic Data**/
  const categoryImages = arrOfImages[categoryIndex];

  /**JSX**/
  return (
    // <div className="relative w-full h-full p-5 overflow-hidden rounded-sm pointer-events-none bg-light">
    <AnimatePresence initial={true} mode="wait">
      <motion.div
        key={categoryIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
        className="relative w-full h-full p-5 overflow-hidden rounded-md pointer-events-none fc bg-light"
      >
        <Image
          alt="produkt z kategorii"
          src={categoryImages[slideIndex].path}
          width={300}
          height={300}
          // fill
          // sizes="400"
        />
      </motion.div>
    </AnimatePresence>
    // </div>
  );
};

export default ImageContnent;
