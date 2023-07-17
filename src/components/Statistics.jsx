import React from 'react';
import data from 'components/data.json';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = () => {
  return (
    <section className="statistics container">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(item => (
          <li
            className="item"
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
