/*
___1. is used in rootLayour | mongoLayout
*/
import BasicLink from '@/components/basic/links/linksWithIcon/basicLink/BasicLink';

const Header = () => {
  /**JSX**/
  return (
    <div className="flex justify-between w-full">
      <BasicLink href="/mongoTest" linkLabel="Data Base" />
      <BasicLink href="/mongoTest/addItem" linkLabel="Add item" />
    </div>
  );
};

export default Header;
