interface Props {
  data: CatalogItemVar2Type;
}

const CatalogTableVer2 = ({ data }: Props) => {
  return (
    <div className="flex-col w-full fc gap-y-4">
      <p>CatalogTableVer1</p>
      <p>{data.tableType}</p>
    </div>
  );
};

export default CatalogTableVer2;
