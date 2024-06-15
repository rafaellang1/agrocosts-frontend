import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../../services/ProductsService';
import FarmsService from '../../services/FarmsService';

import { ReportContainer, FarmReport } from './styles';

export default function CostReports() {
  const { harvest } = useParams();
  const [farmReports, setFarmReports] = useState([]);
  const [products, setProducts] = useState([]);
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const productsList = await ProductsService.listProducts();
        setProducts(productsList);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    async function loadFarms() {
      try {
        const farmsList = await FarmsService.listFarms();
        setFarms(farmsList);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadProducts();
    loadFarms();
  }, []);

  useEffect(() => {
    if (products.length === 0 || farms.length === 0) return;

    const reports = farms.map((farm) => {
      // Filtrar produtos da fazenda e safra
      const farmProducts = products.filter((product) => (
        product.farm_id === farm.id && product.current_harvest === harvest));

      const totalValue = farmProducts.reduce((total, product) => (
        total + product.total_value), 0);

      const totalArea = Number(farm.size);

      // Preço da soja
      const sojaPrice = 120;
      const costPerHectare = (totalValue / totalArea) / sojaPrice;

      return {
        farmName: farm.name,
        totalValue,
        totalArea,
        costPerHectare,
      };
    });

    // Filtrar relatórios para fazendas que têm produtos na safra atual
    const filteredReports = reports.filter((report) => report.totalValue > 0);

    setFarmReports(filteredReports);
  }, [harvest, products, farms]);

  return (
    <ReportContainer>
      <h2>
        Relatório de Custos -
        {harvest}
      </h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        farmReports.map((report) => (
          <FarmReport key={report.farmName}>
            <h3>
              Fazenda:
              {report.farmName}
            </h3>
            <p>
              Gasto Total: R$
              {report.totalValue.toFixed(2)}
            </p>
            <p>
              Área da Fazenda:
              {report.totalArea}
              {' '}
              hectares
            </p>
            <p>
              Custo por Hectare:
              {report.costPerHectare.toFixed(2)}
              {' '}
              sc/ha
            </p>
          </FarmReport>
        ))
      )}
    </ReportContainer>
  );
}
