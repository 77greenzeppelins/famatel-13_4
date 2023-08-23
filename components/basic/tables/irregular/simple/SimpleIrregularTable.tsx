import React from 'react';

const SimpleIrregularTable = () => {
  return (
    <table className="border-separate border-spacing-[1px] border">
      <tr>
        <td className="border " colSpan={3}>
          1
        </td>
        <td className="border ">4</td>
        <td className="border " rowSpan={3}>
          5
        </td>
      </tr>

      <tr>
        <td className="border ">1</td>
        <td className="border " rowSpan={2}>
          2
        </td>
        <td className="border ">3</td>
        <td className="border ">4</td>
      </tr>

      <tr>
        <td className="border " rowSpan={2}>
          1
        </td>
        <td className="border ">3</td>
        <td className="border ">4</td>
      </tr>

      <tr>
        <td className="border " colSpan={3}>
          2
        </td>
        <td className="border ">5</td>
      </tr>

      <tr>
        <td className="border ">1</td>
        <td className="border ">2</td>
        <td className="border " colSpan={3}>
          3
        </td>
      </tr>
    </table>
  );
};

export default SimpleIrregularTable;
