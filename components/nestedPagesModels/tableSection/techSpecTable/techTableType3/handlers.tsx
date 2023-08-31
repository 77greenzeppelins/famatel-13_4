import HeaderCellMulticolor from '@/components/basic/tables/mixed/_atoms/headerStaff/HeaderCellMulticolor';

export const createHeader = ({
  header,
}: {
  header: string[][] | undefined;
}) => {
  if (!header) {
    return null;
  }
  return header.map((rowData, i) => {
    if (i === 0) {
      return (
        <tr key={i}>
          {rowData.map((cellData, j) => {
            if (j == 0) {
              return (
                <HeaderCellMulticolor
                  key={j}
                  label={cellData}
                  colSpan={2}
                  tailwindStyle="bg-dark group-hover:bg-corpo"
                />
              );
            }

            return (
              <HeaderCellMulticolor
                key={j}
                label={cellData}
                colSpan={1}
                tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
              />
            );
          })}
        </tr>
      );
    }
    return (
      <tr className="group" key={i}>
        {rowData.map((cellData, j) => {
          if (j == 0) {
            return (
              <HeaderCellMulticolor
                key={j}
                label={cellData}
                colSpan={2}
                tailwindStyle="bg-greyShade2 group-hover:bg-corpo"
              />
            );
          }

          return (
            <HeaderCellMulticolor
              key={j}
              label={cellData}
              colSpan={1}
              tailwindStyle="bg-greyTint2 group-hover:bg-light"
              textStyle="text-center text-xs text-dark"
            />
          );
        })}
      </tr>
    );
  });
};

export const createTableBody = ({
  tableBody,
}: {
  tableBody: string[][] | undefined;
}) => {
  if (!tableBody) {
    return null;
  }
  return tableBody.map((rowData, i) => (
    <tr className="group" key={i}>
      {rowData.map((cellData, j) => (
        <HeaderCellMulticolor
          key={j}
          label={cellData}
          colSpan={j === 0 ? 2 : 6}
          tailwindStyle={
            j === 0
              ? 'bg-greyShade2 group-hover:bg-corpo'
              : 'bg-greyTint2 group-hover:bg-light'
          }
          textStyle={
            j === 0
              ? 'text-center text-xs text-light'
              : 'text-center text-xs text-dark'
          }
        />
      ))}
    </tr>
  ));
};

export const createFeatures = () => {
  return null;
};
