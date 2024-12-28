import React, { useState } from "react";
import styles from "./Form.module.css";
import Input from "../../../components/Input";

const AddProdutoForm = () => {
  const [produtoInfo, setProdutoInfo] = useState({
    name: "",
    price: "",
    number: 0,
    releaseYear: null,
    productType: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (name, value) => {
    setProdutoInfo({
      ...produtoInfo,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]); // Agora o evento será passado corretamente
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 1. Upload da imagem para o backend (que faz o upload ao S3)
      const formData = new FormData();
      formData.append("file", imageFile);

      const uploadResponse = await fetch("http://52.2.29.147:8080/products/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Erro no upload da imagem: ${uploadResponse.statusText}`);
      }

      const { imageUrl } = await uploadResponse.json();

      // 2. Envio dos dados do produto com a URL da imagem
      const response = await fetch("http://52.2.29.147:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...produtoInfo, imgUrl: imageUrl }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao salvar o produto: ${response.statusText}`);
      }

      alert("Produto adicionado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      alert("Erro ao adicionar produto. Veja os logs para mais detalhes.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.column}>
            <div>
              <Input
                type="text"
                text="Nome do Produto"
                name="name"
                placeholder="Nome"
                handleOnChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="number"
                text="Preço do Produto"
                name="price"
                placeholder="Preço"
                handleOnChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="file"
                text="Upload da Foto"
                name="imgUrl"
                handleOnChange={handleFileChange}
              />
            </div>
            <div>
              <Input
                type="number"
                text="Número do Produto"
                name="number"
                placeholder="Número"
                handleOnChange={handleChange}
              />
            </div>
            <div>
              <label>Tipo de Produto:</label>
              <select
                name="productType"
                value={produtoInfo.productType}
                onChange={(e) => handleChange("productType", e.target.value)}
              >
                <option value="">Selecione o tipo</option>
                <option value="FELTRO">BONECA FELTRO</option>
                <option value="PANO">BONECA PANO</option>
                <option value="NATAL">NATAL</option>
                <option value="ESCOLAR">ESCOLAR</option>
                <option value="DECORACAO">DECORACAO</option>
                <option value="LEMBRANCINHA">LEMBRANCINHA</option>
                <option value="FANTASIA">FANTASIA</option>
                <option value="PASCOA">PASCOA</option>
                <option value="FANTOCHES">FANTOCHES</option>
                <option value="DIVERSOS">DIVERSOS</option>
                <option value="CONSERTO">CONSERTO</option>
                <option value="QUIETBOOK">QUIETBOOK</option>
                <option value="BRINQUEDOS">BRINQUEDOS</option>
                <option value="PAPELARIA">PAPELARIA</option>
              </select>
            </div>
            <div>
              <Input
                type="number"
                text="Ano de Lançamento"
                name="releaseYear"
                placeholder="Ano de Lançamento"
                handleOnChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.fullWidth}>
            <button type="submit">Adicionar Produto</button>
          </div>
        </form>
  );
};

export default AddProdutoForm;
