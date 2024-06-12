import ContentHeader from '../../components/ContentHeader';

import ProductForm from '../../components/ProductForm';
import ProductsService from '../../services/ProductsService';

export default function NewProduct() {
  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    const product = {
      name: formData.name,
      description: formData.description,
      quantity: formData.quantity,
      aplication_area: formData.aplicationArea,
      unit_value: formData.unitValue,
      farm_id: formData.farmsId,
      harvest_id: formData.harvestsId,
    };

    const response = await ProductsService.createProducts(product);

    console.log(response);
  }
  return (
    <>
      <ContentHeader
        title="Cadastro de Produtos"
        link="/"
      />
      <ProductForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        link="/listproduct"
      />
    </>
  );
}
