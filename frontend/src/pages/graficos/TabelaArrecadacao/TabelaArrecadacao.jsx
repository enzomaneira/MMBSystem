import React, { useState, useEffect } from 'react';
import Container from "../../../components/Container";
import styles from "./TabelaArrecadacao.module.css";
import Navbar from "../../../components/Navbar";
import { Table, Button } from 'antd';

const TabelaArrecadacao = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rangeAnoMes, setRangeAnoMes] = useState({ startYear: null, endYear: null, startMonth: null, endMonth: null });
  const [orderBy, setOrderBy] = useState('time');
  const [showPlaceholders, setShowPlaceholders] = useState(true); // Estado para controlar a exibição dos placeholders

  const fetchData = async () => {
    setLoading(true);
    const url = `http://localhost:8080/revenue/findByRange?startYear=${rangeAnoMes.startYear}&endYear=${rangeAnoMes.endYear}&startMonth=${rangeAnoMes.startMonth}&endMonth=${rangeAnoMes.endMonth}&orderBy=${orderBy}`;
    console.log('URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [rangeAnoMes, orderBy]);

  const columns = [
    {
      title: 'Ano',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Mês',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'R$',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.options} style={{ marginTop: '20px' }}>
          <input type="number" style={{ width: '80px', marginRight: '10px' }} placeholder={showPlaceholders ? 'Ano Inicial' : ''} value={rangeAnoMes.startYear !== null ? rangeAnoMes.startYear : ''} onChange={(e) => setRangeAnoMes({ ...rangeAnoMes, startYear: parseInt(e.target.value) })} onFocus={() => setShowPlaceholders(false)} />
          <input type="number" style={{ width: '80px', marginRight: '10px' }} placeholder={showPlaceholders ? 'Ano Final' : ''} value={rangeAnoMes.endYear !== null ? rangeAnoMes.endYear : ''} onChange={(e) => setRangeAnoMes({ ...rangeAnoMes, endYear: parseInt(e.target.value) })} onFocus={() => setShowPlaceholders(false)} />
          <input type="number" style={{ width: '80px', marginRight: '10px' }} placeholder={showPlaceholders ? 'Mês Inicial' : ''} value={rangeAnoMes.startMonth !== null ? rangeAnoMes.startMonth : ''} onChange={(e) => setRangeAnoMes({ ...rangeAnoMes, startMonth: parseInt(e.target.value) })} onFocus={() => setShowPlaceholders(false)} />
          <input type="number" style={{ width: '80px', marginRight: '10px' }} placeholder={showPlaceholders ? 'Mês Final' : ''} value={rangeAnoMes.endMonth !== null ? rangeAnoMes.endMonth : ''} onChange={(e) => setRangeAnoMes({ ...rangeAnoMes, endMonth: parseInt(e.target.value) })} onFocus={() => setShowPlaceholders(false)} />
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)} style={{ marginRight: '10px' }}>
            <option value="time">Tempo</option>
            <option value="amount">R$</option>
          </select>
        </div>
        <Table columns={columns} dataSource={data} loading={loading} style={{ marginTop: '20px' }} />
      </Container>
    </div>
  );
}

export default TabelaArrecadacao;

