import { Metadata, ResolvingMetadata } from 'next';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';
import { cat10_allModelsCard_data } from '@/data/modelsData/cat_10_puszki-instalacyjne/cat10_allModelsCard_data';

/*
___CEO section
*/
type Props = {
    params: { model: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const model = params.model;

    const matchingObject = cat10_allModelsCard_data[0].find((item) => item.modelPathSegmant === model)?.model;

    //---
    return {
        title: { absolute: matchingObject as string },
        description: model,
        keywords: model,
        alternates: {
            canonical: `${metadataText.cat10.subCat1.canonical}/${model}`
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
