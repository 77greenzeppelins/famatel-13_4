// import { wtyczkiGniazdaPrzenosne_tablesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_prodCat';
/**TS**/
interface DataTemplate {
  models: string[];
  url: string;
}

interface DeclarationsDataTemplate {
  models: string[];
  url: string;
  size: string;
  title: string;
}

function findUrlByModel(
  typedModel: string, // what user typed into <input>
  staticData: DataTemplate[], // array with all products
  setProductUrl: React.Dispatch<React.SetStateAction<string | null>>
) {
  console.log('...............findUrlByModel');
  const foundData = staticData.find(item => item.models.includes(typedModel));
  console.log(
    'findUrlByModel / foundData ? foundData.url : null:',
    foundData ? foundData.url : null
  );
  setProductUrl(foundData ? foundData.url : null);
}

function findDeclarationByModel(
  typedModel: string, // what user typed into <input>
  staticData: DeclarationsDataTemplate[], // array with all products
  setDeclarationUrl: React.Dispatch<React.SetStateAction<string | null>>
) {
  console.log('...............findUrlByModel');
  const foundData = staticData.find(item => item.models.includes(typedModel));
  // console.log(
  //   'findUrlByModel / foundData ? foundData.url : null:',
  //   foundData ? foundData.url : null
  // );
  setDeclarationUrl(foundData ? foundData.url : null);
}

// function findUrl(
//   typedModel: string,
//   staticData: DataTemplate[],
//   setState: React.Dispatch<React.SetStateAction<string | null>>
// ): string | null {
//   console.log('...............findUrlByModel');
//   const foundData = staticData.find(item => item.models.includes(typedModel));
//   console.log(
//     'findUrlByModel / foundData ? foundData.url : null:',
//     foundData ? foundData.url : null
//   );
//   setState(foundData ? foundData.url : null);
//   return foundData ? foundData.url : null;
// }

// function getUrlByModel(
//   model: string,
//   testStaticData: TestData[]
// ): string | null {
//   for (const data of testStaticData) {
//     if (data.models.includes(model)) {
//       console.log('getUrlByModel / data.url:', data.url);
//       return data.url;
//     }
//   }
//   return null; // if model is not found in any TestData.models array
// }

/**------------------------------------------------------------------------------**/

// function createArrayOfLongerStrings(): { [key: number]: string[] }[] {
//   return wtyczkiGniazdaPrzenosne_tablesData.map(item => {
//     const result: { [key: number]: string[] } = {};

//     item.tablesData.forEach(tableData => {
//       tableData.rowsData.forEach(rowData => {
//         const filteredRow = rowData.reduce(
//           (acc: string[], currentValue: string) => {
//             if (currentValue.length > 2) {
//               acc.push(currentValue);
//             }
//             return acc;
//           },
//           []
//         );

//         if (filteredRow.length > 0) {
//           const key = parseInt(rowData[0]); // use the first value as the key
//           result[key] = filteredRow;
//         }
//       });
//     });

//     return result;
//   });
// }

export {
  findUrlByModel,
  findDeclarationByModel,
  // , findUrl
};
