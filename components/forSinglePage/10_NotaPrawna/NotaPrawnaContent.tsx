import { notaPrawnaPageText } from '@/data/textData';

const NotaPrawnaContent = () => {
  const textArray = notaPrawnaPageText.header.split(' ');
  //   console.log('textArray:', textArray);
  /**JSX**/
  return (
    <div className="min-h-screen w-full pt-[64px] lg:pt-[78px] wrapper-1">
      <h1 className="text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[4.5rem] xxl:text-[5rem] font-bold tracking-[5px] leading-tight pt-20 pb-10 md:inner-px-md-xl-xxl">
        {textArray[0]}
        <br />
        {textArray[1]}
      </h1>
      <div className="flex flex-col gap-y-6 md:inner-px-md-xl-xxl">
        {notaPrawnaPageText.text.map((textPart, i) => (
          <p
            key={i}
            className="text-[0.75rem]  lg:text-[1rem] tracking-[2px] leading-5 lg:leading-6 word-spacing-0125 lg:word-spacing-025 text-light"
          >
            {textPart}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NotaPrawnaContent;
