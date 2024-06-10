import ContentHeader from '../../components/ContentHeader';

import ProductForm from '../../components/ProductForm';

export default function NewProduct() {
  return (

    <>
      <ContentHeader
        title="Cadastro de Produtos"
      />
      <ProductForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
