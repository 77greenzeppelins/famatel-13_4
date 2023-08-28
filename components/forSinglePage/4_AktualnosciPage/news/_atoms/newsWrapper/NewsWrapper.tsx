import React from 'react';
/**Components**/
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';

/**TS**/
interface Props {
  children: React.ReactNode;
  date: string;
}

const NewsWrapper = ({ children, date }: Props) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full gap-8 pt-24">
      <div className="flex gap-2 wrapper-1">
        <BasicHeader
          hasVerticalOrnament={false}
          hasBox={true}
          text="Aktualności"
        />

        <BasicHeader
          hasVerticalOrnament={true}
          hasBox={false}
          text={date}
          ornamentStyle="border-l-[2px] pl-[10px]"
          ornamentColor="border-grey"
        />
      </div>
      {children}
    </div>
  );
};

export default NewsWrapper;
