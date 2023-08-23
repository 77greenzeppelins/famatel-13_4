import React from 'react';
import HeaderCell from './headerStaff/HeaderCell';
import RowWithSideHeafer from './bodyStaff/bodyRows/RowWithSideHeafer';

const BasicTable = ({ headerData, bodyData }: BasicTableDataType) => {
  return (
    <div
      className="relative pb-10 overflow-x-auto table-scrollbar"
      //___sm:rounded-lg
    >
      <table
        className="border-collapse table-fixed "
        //___border-separate border-spacing-[1px]
        //___border-collapse
      >
        <thead className="text-xs uppercase text-light bg-greyShade2">
          <tr>
            {headerData.map((cell, i) => (
              <HeaderCell key={i} label={cell} />
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((bodyRowData, i) => (
            <RowWithSideHeafer key={i} bodyRowData={bodyRowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
