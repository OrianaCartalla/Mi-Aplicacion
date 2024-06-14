import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MiApi() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mindicador.cl/api');
        console.log(response.data); // Verifica la estructura de los datos
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <div>
      <h2>Indicadores Económicos de Chile</h2>
      <ul>
        {Object.keys(data).map(key => (
          <li key={key}>
            <strong>{data[key].nombre}</strong>: {data[key].valor} {data[key].unidad_medida}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiApi;
