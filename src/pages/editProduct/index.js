import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import ProductForm from '../../components/ProductForm';
import Loader from '../../components/Loader';

import ProductsService from '../../services/ProductsService';

export default function EditProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const [productName, setProductName] = useState('');

  const { id } = useParams();
  const history = useHistory();
  const productFormRef = useRef(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const product = await ProductsService.getProductById(
          id,
        );

        productFormRef.current.setFieldValues(product);
        setIsLoading(false);
        setProductName(product.name);
      } catch (error) {
        console.log('error', error);
        history.push('/listproduct');

        alert('Produto nao encontrado!');
      }
    }
    loadProduct();
  }, [id, history]);

  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    try {
      const product = {
        name: formData.name,
        description: formData.description,
        quantity: formData.quantity,
        aplication_area: formData.aplicationArea,
        unit_value: formData.unitValue,
        farm_id: formData.farmsId,
        harvest_id: formData.harvestsId,
      };
      const response = await ProductsService.updateProducts(id, product);
      console.log(response);

      const updatedProductData = await ProductsService.updateProducts(
        id,
        product,
      );
      setProductName(updatedProductData.name);
      console.log(response);
      alert('Produto editado com sucesso');
    } catch {
      alert('Erro ao editar produto');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <ContentHeader
        title={isLoading ? 'Carregando...' : `Editar produto ${productName}`}
        link="/listproduct"
      />
      <ProductForm
        ref={productFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
