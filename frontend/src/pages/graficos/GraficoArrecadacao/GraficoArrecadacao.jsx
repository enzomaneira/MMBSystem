import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import Container from '../../../components/Container';
import Navbar from '../../../components/Navbar';
import styles from './GraficoArrecadacao.module.css'; // Importando estilos CSS modules

function GraficoArrecadacao() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rangeAnoMes, setRangeAnoMes] = useState({
    startYear: null,
    endYear: null,
    startMonth: null,
    endMonth: null,
  });
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const url = `http://localhost:8080/revenue/findByRange?startYear=${rangeAnoMes.startYear}&endYear=${rangeAnoMes.endYear}&startMonth=${rangeAnoMes.startMonth}&endMonth=${rangeAnoMes.endMonth}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [rangeAnoMes]);

  const options = {
    chart: { type: 'line', height: 400 },
    xaxis: {
      categories: data.map(item => `${item.month}/${item.year}`),
      title: { text: 'Mês/Ano' },
    },
    yaxis: { title: { text: 'Arrecadação' } },
    tooltip: { x: { format: 'dd/MM/yyyy' } },
  };

  const series = [{ name: 'Revenue', data: data.map(item => item.amount) }];

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.inputContainer}> {/* Aplicando estilos CSS modules */}
          <input
            type="number"
            className={styles.input}
            placeholder={showPlaceholders ? 'Ano Inicial' : ''}
            value={rangeAnoMes.startYear !== null ? rangeAnoMes.startYear : ''}
            onChange={e =>
              setRangeAnoMes({ ...rangeAnoMes, startYear: parseInt(e.target.value) })
            }
            onFocus={() => setShowPlaceholders(false)}
          />
          <input
            type="number"
            className={styles.input}
            placeholder={showPlaceholders ? 'Ano Final' : ''}
            value={rangeAnoMes.endYear !== null ? rangeAnoMes.endYear : ''}
            onChange={e =>
              setRangeAnoMes({ ...rangeAnoMes, endYear: parseInt(e.target.value) })
            }
            onFocus={() => setShowPlaceholders(false)}
          />
          <input
            type="number"
            className={styles.input}
            placeholder={showPlaceholders ? 'Mês Inicial' : ''}
            value={rangeAnoMes.startMonth !== null ? rangeAnoMes.startMonth : ''}
            onChange={e =>
              setRangeAnoMes({ ...rangeAnoMes, startMonth: parseInt(e.target.value) })
            }
            onFocus={() => setShowPlaceholders(false)}
          />
          <input
            type="number"
            className={styles.input}
            placeholder={showPlaceholders ? 'Mês Final' : ''}
            value={rangeAnoMes.endMonth !== null ? rangeAnoMes.endMonth : ''}
            onChange={e =>
              setRangeAnoMes({ ...rangeAnoMes, endMonth: parseInt(e.target.value) })
            }
            onFocus={() => setShowPlaceholders(false)}
          />
        </div>
        <div className={styles.chartContainer}>
          <ApexChart options={options} series={series} type="line" />
        </div>
      </Container>
    </div>
  );
}

export default GraficoArrecadacao;
