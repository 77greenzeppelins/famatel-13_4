'use client';
import Header from '@/components/forSinglePage/0_MongoTest/header/Header';
import { useSelectedLayoutSegments } from 'next/navigation';

const MongoLayout = () => {
  const segments = useSelectedLayoutSegments();
  const mountingCondition = segments[0] === 'mongoTest';
  /**JSX**/
  return mountingCondition ? (
    <div className="w-full pt-24 wrapper-1">
      <Header />
    </div>
  ) : null;
};

export default MongoLayout;
