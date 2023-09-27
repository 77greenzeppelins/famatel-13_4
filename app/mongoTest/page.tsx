import { Metadata } from 'next/types';
/**Components**/
import MongoTestContent from '@/components/forSinglePage/0_MongoTest/MongoPageContent';

export const metadata: Metadata = {
    title: 'Mongo Test',
    description: 'Mongo Test'
};

export default function MongoPage() {
    return (
        // <MainWrapper>
        <MongoTestContent />
        // </MainWrapper>
    );
}
