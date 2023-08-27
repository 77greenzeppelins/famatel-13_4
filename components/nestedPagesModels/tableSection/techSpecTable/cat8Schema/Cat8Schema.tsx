/**Components**/
import BasicTable from '@/components/basic/tables/basic/BasicTable';

interface Props {
  data: ObudowaPustaTechDataType;
}

const Cat8Schema = ({ data }: Props) => {
  console.log('Cat8Schema / data:', data);
  const { description, header, tablesData, iconHolderData, norma } = data;

  /**JSX**/
  return (
    <div className="flex flex-col w-full">
      <>
        {header.map((header, i) => (
          <BasicTable
            key={i}
            headerData={header}
            bodyData={tablesData[i].map(item => [item.label, item.value])}
            headerColSpan={2}
            sideHeaderStyle="text-xs text-light"
          />
        ))}
      </>

      {/* <BasicTable headerData={header} bodyData={[]} /> */}
    </div>
  );
};

export default Cat8Schema;
