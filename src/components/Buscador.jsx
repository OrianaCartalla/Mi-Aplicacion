import React, { useState } from 'react';

function Buscador({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedData, setSortedData] = useState(data);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const sortedArray = [...data].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setSortedData(sortedArray);
  };

  const filteredData = sortedData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange}>
        <option value="">Ordenar por</option>
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
      </select>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Buscador;
