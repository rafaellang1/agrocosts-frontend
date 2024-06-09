import ContentHeader from '../../components/ContentHeader';
import ProductForm from '../../components/ProductForm';

export default function EditProduct() {
  return (
    <>
      <ContentHeader
        title="Editar Produtos"
      />
      <ProductForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
