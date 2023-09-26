import { MetadataRoute } from 'next';
/**Basic Data**/
import {
    mainPagesPaths,
    baseUrl,
    mainCategoriesPath,
    wtyczkiGniazdaSubCatFullPaths,
    gniazdaZBlokadaSubCatFullPaths,
    adapteryPrzemysloweSubCatFullPaths,
    przedluzaczeBebnoweSubCatFullPaths,
    obudowyAndRozdzielniceSubCatFullPaths,
    rozdzielniceModuloweSubCatFullPaths,
    puszkiInstalacyjneSubCatFullPaths
} from '@/data/routingData';
import { catalogStructureData } from '@/data/catalogStructureData';

//___create Main Pages
const mainPages = Object.values(mainPagesPaths).slice(1);
const createMainPages = mainPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
}));

//___create Main Categories
const mainCategories = Object.values(mainCategoriesPath);
const createMainCategories = mainCategories.map((cat) => ({
    url: `${baseUrl}${mainPages[0]}/${cat}`,
    lastModified: new Date()
}));
//___create Categories_1 / subcategories
const cat_1 = Object.values(wtyczkiGniazdaSubCatFullPaths);
const createCat1 = cat_1.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));
//___create Categories_2 / subcategories
const cat_2 = Object.values(gniazdaZBlokadaSubCatFullPaths);
const createCat2 = cat_2.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));
//___create Categories_3 / subcategories
const cat_3 = Object.values(adapteryPrzemysloweSubCatFullPaths);
const createCat3 = cat_3.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));
//___create Categories_5 / subcategories
const cat_5 = Object.values(przedluzaczeBebnoweSubCatFullPaths);
const createCat5 = cat_5.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));
//___create Categories_8 / subcategories
const cat_8 = Object.values(obudowyAndRozdzielniceSubCatFullPaths);
const createCat8 = cat_8.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));
//___create Categories_9 / subcategories
const cat_9 = Object.values(rozdzielniceModuloweSubCatFullPaths);
const createCat9 = cat_9.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));

//___create Categories_10 / subcategories
const cat_10 = Object.values(puszkiInstalacyjneSubCatFullPaths);
const createCat10 = cat_10.map((subCat) => ({
    url: `${baseUrl}${subCat}`,
    lastModified: new Date()
}));

const createCat_1_subCats = catalogStructureData[0].catAllModels.flatMap((subCats, i) => {
    return subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_1[i]}/${modelPathSegmant}`, lastModified: new Date() }));
});
const createCat_2_subCats = catalogStructureData[1].catAllModels.flatMap((subCats, i) => {
    return subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_2[i]}/${modelPathSegmant}`, lastModified: new Date() }));
});
const createCat_3_subCats = catalogStructureData[2].catAllModels.flatMap((subCats, i) => {
    return subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_3[i]}/${modelPathSegmant}`, lastModified: new Date() }));
});

const createCat_8_subCats = catalogStructureData[7].catAllModels.flatMap((subCats, i) => {
    return subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_8[i]}/${modelPathSegmant}`, lastModified: new Date() }));
});

// const createCat_9_subCats = [
//     ...new Set(catalogStructureData[8].catAllModels.flatMap((subCats, i) => subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_9[i]}/${modelPathSegmant}`, lastModified: new Date() }))))
// ];
// const createCat_9_subCats = catalogStructureData[8].catAllModels.flatMap((subCats, i) =>
//     subCats.map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_9[i]}/${modelPathSegmant}`, lastModified: new Date() })).filter(({ url }) => url !== '')
// );

const createCat_9_1_subCats = catalogStructureData[8].catAllModels[0].map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_9[0]}/${modelPathSegmant}`, lastModified: new Date() }));

const createCat_9_2_subCats = catalogStructureData[8].catAllModels[1].map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_9[1]}/${modelPathSegmant}`, lastModified: new Date() }));

const createCat_10_1_subCats = catalogStructureData[9].catAllModels[0].map(({ modelPathSegmant }) => ({ url: `${baseUrl}${cat_10[0]}/${modelPathSegmant}`, lastModified: new Date() }));

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date()
            // changeFrequency: 'yearly',
            // priority: 1
        },
        {
            url: `${baseUrl}/nota-prawna`,
            lastModified: new Date()
        },
        ...createMainPages,
        ...createMainCategories,
        ...createCat1,
        ...createCat2,
        ...createCat3,
        ...createCat5,
        ...createCat8,
        ...createCat9,
        ...createCat10,
        ...createCat_1_subCats,
        ...createCat_2_subCats,
        ...createCat_3_subCats,
        ...createCat_8_subCats,
        ...createCat_9_1_subCats,
        ...createCat_9_2_subCats,
        ...createCat_10_1_subCats
    ];
}
