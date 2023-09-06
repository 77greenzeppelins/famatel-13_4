/*
___1. used in: sliders | svgImageSwitcher | ... |  <SvgTechSelector>
___2. kind of "index file", colects all files with svgTech staff
*/

//___category_1
import { svgTech_1_1 } from './1_wtyczki-gniazda/1.1_przenosne/svgTech_1.1';
import { svgTech_1_2 } from './1_wtyczki-gniazda/1.2_tablicowe/svgTech_1.2';
import { svgTech_1_3 } from './1_wtyczki-gniazda/1.3_scienne/svgTech_1.3';
import { svgTech_1_4 } from './1_wtyczki-gniazda/1.4_schuko-tablicowe/svgTech_1.4';
import { svgTech_1_5 } from './1_wtyczki-gniazda/1.5_schuko/svgTech_1.5';
import { svgTech_1_6 } from './1_wtyczki-gniazda/1.6_niskie-napiecia/svgTech_1.6';
import { svgTech_1_7 } from './1_wtyczki-gniazda/1.7_kontenerowe/svgTech_1.7';
import { svgTech_1_8 } from './1_wtyczki-gniazda/1.8_estradowe/svgTech_1.8';
import { svgTech_1_9 } from './1_wtyczki-gniazda/1.9_campingowe/svgTech_1.9';
//___category_2
import { svgTech_2_1 } from './2_gniazda-z-blokada/2.1_tablicowe/svgTech_2.1';
import { svgTech_2_2 } from './2_gniazda-z-blokada/2.2_stale/svgTech_2.2';
import { svgTech_2_3 } from './2_gniazda-z-blokada/2.3_z-opcjami/svgTech_2.3';
//___category_3
import { svgTech_3_1_2_3 } from './3_adaptery-przemyslowe/svgTech_3.1_2_3';
//___category_4
import SVG_28000_size from './4_gniazda-podwieszane/SVG_28000_size';
import SVG_28000_front from './4_gniazda-podwieszane/SVG_28000_front';
import SVG_28000_side from './4_gniazda-podwieszane/SVG_28000_side';
//___category_5
import SvgTechSchuko from './5_przedluzacze-bebnowe/SvgTechSchuko';
import SvgTechPrzemyslowe from './5_przedluzacze-bebnowe/SvgTechPrzemyslowe';
//___category_6
import SvgTechWylacznikBezpieczenstwa from './6_wylacznik-bezpieczenstwa/SvgTechWylacznikBezpieczenstwa';
//___category_7
import SVG_7_1_96000_size from './7_ladowarki/SVG_7.1_96000_size';
//___category_8
import { svgTech_8_1 } from './8_obudowy-rozdzielnice/8.1_puste/svgTech_8.1';
import { svgTech_8_2 } from './8_obudowy-rozdzielnice/8.2_przemyslowe/svgTech_8.2';
import { svgTech_8_3 } from './8_obudowy-rozdzielnice/8.3_gumowe/svgTech_8.3';
//___category_9
import { svgTech_9_1 } from './9_rozdzielnice-modulowe/9.1_scienne/svgTech_9.1';
import { svgTech_9_2 } from './9_rozdzielnice-modulowe/9.2_modulowe/svgTech_9.2';
//___category_10
import { svgTech_10_1 } from './10_puszki/10.1_zamykane/svgTech_10.1';

/*
used in: 
*/
export const allSvgTech: AllSvgTechArrayType = [
  [
    svgTech_1_1,
    svgTech_1_2,
    svgTech_1_3,
    svgTech_1_4,
    svgTech_1_5,
    svgTech_1_6,
    svgTech_1_7,
    svgTech_1_8,
    svgTech_1_9,
  ],
  [svgTech_2_1, svgTech_2_2, svgTech_2_3],
  [svgTech_3_1_2_3],
  [
    [
      { model: '28000', Component: SVG_28000_size },
      { model: '28000-F', Component: SVG_28000_front },
      { model: '28000-S', Component: SVG_28000_side },
      { model: '28000', Component: SVG_28000_size },
      { model: '28000-F', Component: SVG_28000_front },
      { model: '28000-S', Component: SVG_28000_side },
      { model: '28000', Component: SVG_28000_size },
    ],
  ],
  [
    [
      { model: '30017', Component: SvgTechSchuko },
      { model: '30013', Component: SvgTechPrzemyslowe },
      { model: '30017', Component: SvgTechSchuko },
      { model: '30013', Component: SvgTechPrzemyslowe },
      { model: '30017', Component: SvgTechSchuko },
      { model: '30013', Component: SvgTechPrzemyslowe },
      { model: '30017', Component: SvgTechSchuko },
    ],
  ],
  [
    [
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
      { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
    ],
  ],
  [
    [
      { model: '96000', Component: SVG_7_1_96000_size },
      { model: '96000', Component: SVG_7_1_96000_size },
      { model: '96000', Component: SVG_7_1_96000_size },
      { model: '96000', Component: SVG_7_1_96000_size },
      { model: '96000', Component: SVG_7_1_96000_size },
      { model: '96000', Component: SVG_7_1_96000_size },
    ],
  ],
  [svgTech_8_1, svgTech_8_2, svgTech_8_3],
  [svgTech_9_1, svgTech_9_2],
  [svgTech_10_1],
];

/*
used in: produktyPage | slider | ... | <SvgContent>
*/
const category1 = [
  svgTech_1_9[9],
  svgTech_1_2[2],
  svgTech_1_3[6],
  svgTech_1_4[4],
  svgTech_1_7[4],
  svgTech_1_5[1],
  svgTech_1_1[6],
  svgTech_1_1[7],
];
const category2 = [
  svgTech_2_1[1],
  svgTech_2_2[1],
  svgTech_2_3[1],
  svgTech_2_1[1],
  svgTech_2_2[1],
  svgTech_2_3[1],
  svgTech_2_1[1],
  svgTech_2_2[1],
];
const category3 = [
  svgTech_3_1_2_3[12],
  svgTech_3_1_2_3[2],
  svgTech_3_1_2_3[11],
  svgTech_3_1_2_3[5],
  svgTech_3_1_2_3[7],
  svgTech_3_1_2_3[1],
  svgTech_3_1_2_3[9],
  svgTech_3_1_2_3[2],
];

const category4 = [
  { model: '28000', Component: SVG_28000_size },
  { model: '28000-F', Component: SVG_28000_front },
  { model: '28000-S', Component: SVG_28000_side },
  { model: '28000', Component: SVG_28000_size },
  { model: '28000-F', Component: SVG_28000_front },
  { model: '28000-S', Component: SVG_28000_side },
  { model: '28000', Component: SVG_28000_size },
];

const category5 = [
  { model: '30017', Component: SvgTechSchuko },
  { model: '30013', Component: SvgTechPrzemyslowe },
  { model: '30017', Component: SvgTechSchuko },
  { model: '30013', Component: SvgTechPrzemyslowe },
  { model: '30017', Component: SvgTechSchuko },
  { model: '30013', Component: SvgTechPrzemyslowe },
  { model: '30017', Component: SvgTechSchuko },
];

const category6 = [
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
  { model: '25501', Component: SvgTechWylacznikBezpieczenstwa },
];
const category7 = [
  { model: '96000', Component: SVG_7_1_96000_size },
  { model: '96000', Component: SVG_7_1_96000_size },
  { model: '96000', Component: SVG_7_1_96000_size },
  { model: '96000', Component: SVG_7_1_96000_size },
  { model: '96000', Component: SVG_7_1_96000_size },
  { model: '96000', Component: SVG_7_1_96000_size },
];

const category8 = [
  svgTech_8_1[9],
  svgTech_8_2[2],
  svgTech_8_2[11],
  svgTech_8_1[4],
  svgTech_8_2[4],
  svgTech_8_3[2],
  svgTech_8_1[6],
  svgTech_8_2[7],
];
const category9 = [
  svgTech_9_1[9],
  svgTech_9_2[2],
  svgTech_9_1[4],
  svgTech_9_2[11],
  svgTech_9_1[6],
  svgTech_9_2[4],
  svgTech_9_1[6],
  svgTech_9_2[7],
];
const category10 = [
  svgTech_10_1[9],
  svgTech_10_1[2],
  svgTech_10_1[19],
  svgTech_10_1[11],
  svgTech_10_1[6],
  svgTech_10_1[4],
  svgTech_10_1[6],
  svgTech_10_1[7],
];

export const categoriesForSlider = [
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
];
