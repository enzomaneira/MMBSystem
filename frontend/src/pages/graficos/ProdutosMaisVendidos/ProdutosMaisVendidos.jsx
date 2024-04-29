import React, { useState, useEffect } from 'react';
import ApexChart from "react-apexcharts";
import axios from 'axios';
import Container from "../../../components/Container";
import styles from "./ProdutosMaisVendidos.module.css";
import Navbar from "../../../components/Navbar";

function ProdutosMaisVendidos() {
  const [topProducts, setTopProducts] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/topSelling`);
      const topTenProducts = response.data.slice(0, 10); 
      setTopProducts(topTenProducts);
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const options = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: topProducts.map(product => product.name)
    },
    yaxis: {
      title: {
        text: 'Quantidade Vendida'
      }
    },
    legend: {
      labels: {
        colors: "#777",
        style: {
          fontSize: '14px'
        }
      }
    }
  };
  
  const series = [{
    name: 'Quantidade Vendida',
    data: topProducts.map(product => product.count)
  }];
  

  return (
  <div>
  <Navbar/>
    <Container>
      {showChart && (
        <div className={styles.chartContainer}>
          <ApexChart options={options} series={series} type="bar" />
        </div>
      )}
    </Container>
    </div>
  );
}

export default ProdutosMaisVendidos;
