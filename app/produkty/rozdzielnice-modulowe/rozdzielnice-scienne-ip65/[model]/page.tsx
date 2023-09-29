import { Metadata, ResolvingMetadata } from 'next';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';
import { cat9_allModelsCard_data } from '@/data/modelsData/cat_9_rozdzielnice-modulowe/cat9_allModelsCard_data';

/*
___CEO section
*/
type Props = {
    params: { model: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const model = params.model;

    const matchingObject = cat9_allModelsCard_data[0].find((item) => item.modelPathSegmant === model)?.model;
    // console.log('...matchingObject', matchingObject);
    //---
    return {
        title: { absolute: matchingObject as string },
        description: model,
        keywords: model,
        alternates: {
            canonical: `${metadataText.cat9.subCat1.canonical}/${model}`
        }
    };
}

export default function ObudowyPustePage() {
    /**JSX**/
    return (
        <div className="flex flex-col w-full fc">
            <ModelPageContent />
        </div>
    );
}
