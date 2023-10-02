/**Components**/
import CatalogChapters from './sectionCatalogChapters/CatalogChapters';
import DeclarationsList from './sectionDeclarations/DeclarationsList';

const PageSections = () => {
    /**JSX**/
    return (
        <div className="flex flex-col w-full gap-y-20">
            {/* <CatalogChapters /> */}
            <DeclarationsList />
        </div>
    );
};

export default PageSections;
