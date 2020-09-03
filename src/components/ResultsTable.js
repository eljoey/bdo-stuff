import React from 'react';
import { Table } from 'react-materialize';

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
          <th data-field='cost'>{`Stat per Billion`}</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.enhLevel}</td>
            <td>{item.perStatCost[sortBy]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
