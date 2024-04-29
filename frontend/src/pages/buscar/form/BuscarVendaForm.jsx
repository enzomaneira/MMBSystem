import React, { useState } from "react";
import styles from "./Form.module.css";
import Input from "../../../components/Input";

const BuscarVendaForm = ({ onSubmit }) => {
  const [buscaVenda, setBuscaVenda] = useState({
    nomeProduto: "",
    nomeCliente: "",
    valorMinimo: "",
    valorMaximo: "",
    dataMinima: "",
    dataMaxima: "",
    status: "",
  });

  const handleChange = (name, value) => {
    setBuscaVenda({
      ...buscaVenda,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(buscaVenda);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.column}>
        <Input
          type="text"
          text="Nome do Produto"
          name="nomeProduto"
          placeholder="Nome do Produto"
          handleOnChange={handleChange}
          value={buscaVenda.nomeProduto}
        />
        <Input
          type="text"
          text="Nome do Cliente"
          name="nomeCliente"
          placeholder="Nome do Cliente"
          handleOnChange={handleChange}
          value={buscaVenda.nomeCliente}
        />
        <Input
          type="number"
          text="Valor Mínimo"
          name="valorMinimo"
          placeholder="Valor Mínimo"
          handleOnChange={handleChange}
          value={buscaVenda.valorMinimo}
        />
        <Input
          type="number"
          text="Valor Máximo"
          name="valorMaximo"
          placeholder="Valor Máximo"
          handleOnChange={handleChange}
          value={buscaVenda.valorMaximo}
        />
        <Input
          type="date"
          text="Data Mínima"
          name="dataMinima"
          placeholder="Data Mínima"
          handleOnChange={handleChange}
          value={buscaVenda.dataMinima}
        />
        <Input
          type="date"
          text="Data Máxima"
          name="dataMaxima"
          placeholder="Data Máxima"
          handleOnChange={handleChange}
          value={buscaVenda.dataMaxima}
        />
        <div className={styles.field}>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={buscaVenda.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="">Selecione o Status</option>
            <option value="1">Em Espera</option>
            <option value="2">Em Confecção</option>
            <option value="3">Pronto</option>
            <option value="4">Entregue</option>
            <option value="5">Pago</option>
            <option value="6">Cancelado</option>
          </select>
        </div>
        <div className={styles.fullWidth}>
          <button type="submit" className={styles.button}>
            Buscar Vendas
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuscarVendaForm;
