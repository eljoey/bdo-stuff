import React from 'react';
import { Table } from 'react-materialize';
import helpers from '../utils/helpers';
import numeral from 'numeral';

const ResultsTable = ({ data, sortBy }) => {
  const sortedData = data
    .filter((item) => item.perStatCost[sortBy] > 0)
    .sort((a, b) => a.perStatCost[sortBy] - b.perStatCost[sortBy]);

  return (
    <Table>
      <thead>
        <tr>
          <th data-field='name'>Item Name</th>
          <th data-field='slot'>Slot</th>
          <th data-field='enhLevel'>Enhance Level</th>
          <th data-field='price'>Price</th>
          <th data-field='statChange'>Stat Change</th>
          <th data-field='cost'>Stat per Billion</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr>
            <td className={helpers.getTextColor(item.grade)}>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.enhLevel}</td>
            <td>{numeral(item.price).format('($ 0.00 a)')}</td>
            <td>{item.statChange[sortBy]}</td>
            <td>{numeral(item.perStatCost[sortBy]).format('00.00')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
