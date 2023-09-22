'use client';
import TrashIcon from '@/components/SVG/icons/heroIcons/TrashIcon';
import ButtonWithIconAnimated from '@/components/basic/buttons/buttonWithIcon/ButtonWithIconAnimated';
import BasicLink from '@/components/basic/links/linksWithIcon/basicLink/BasicLink';

import CardFrameGrid from '@/components/forMultiPage/catalogs/allCards/cardFrame/CardFrameGrid';
import { styles } from '@/styles';

const ItemUI = () => {
  return (
    <li
      className={`h-[220px] md:h-[240px] lg:h-[280px] group select-none no-sparkling`}
    >
      <CardFrameGrid innerContainerStyle="grid relative col-span-full row-span-full w-full h-full rounded-md bg-dark z-10">
        <div className="flex w-full h-full">
          <div className="w-8/12 h-full fc min-w-[200px]">
            <div className="fc w-full h-[90%] border-r border-greyShade2">
              description
            </div>
          </div>
          <div className="flex items-center justify-between w-4/12 min-w-[80px] h-full px-6">
            <ButtonWithIconAnimated
              stateSetter={function (
                value: React.SetStateAction<boolean>
              ): void {
                throw new Error('Function not implemented.');
              }}
              containerStyle={`block group/button items-center px-4 py-2 rounded-sm border border-corpo hover:bg-corpo group/link ${styles.lazyAnimation}`}
              ariaLabel="Usuń"
            >
              <TrashIcon
                containerStyle={`fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover/button:stroke-dark group-hover/button:rotate-45 group-hover/button:translate-x-1 group-hover/button:stroke-2 ${styles.lazyAnimation} origin-center flex-shrink-0`}
              />
            </ButtonWithIconAnimated>

            <BasicLink href="/mongoTest/editItem/123" />
          </div>
        </div>
      </CardFrameGrid>
    </li>
  );
};

export default ItemUI;
