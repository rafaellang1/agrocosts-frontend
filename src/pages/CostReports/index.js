import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../../services/ProductsService';
import FarmsService from '../../services/FarmsService';
import Loader from '../../components/Loader';

import {
  ReportContainer, FarmReport, Header,
  HighCostReport,
} from './styles';

export default function CostReports() {
  const { harvest } = useParams();
  const [farmReports, setFarmReports] = useState([]);
  const [highCostReports, setHighCostReports] = useState([]);
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
    const bagSoya = 60;
    if (products.length === 0 || farms.length === 0) return;

    const reports = farms.map((farm) => {
      // Filtrar id fazenda cad prod igual fazenda cadastrada
      // E se safra cadastrada no produto igual ao safra referencia
      const farmProducts = products.filter((product) => (
        product.farm_id === farm.id && product.current_harvest === harvest));

      const totalValue = farmProducts.reduce((total, product) => (
        total + product.total_value), 0);

      const totalArea = Number(farm.size);

      // saco da soja 60kg
      const costPerHectare = (totalValue / totalArea) / bagSoya;

      return {
        farmName: farm.name,
        totalValue,
        totalArea,
        costPerHectare,
        farmProducts, // Adicionando farmProducts ao relatório
      };
    });

    // Filtrar relatórios para fazendas que têm produtos na safra atual
    const filteredReports = reports.filter((report) => report.totalValue > 0);

    // Fazendas com alto Custo de Producao
    const highCostReportsFiltered = filteredReports.map((report) => {
      const highCostProducts = report.farmProducts.filter((product) => {
        const productCostPerHectare = (
          product.total_value / report.totalArea) / bagSoya;
        return productCostPerHectare > 30;
      });

      const highCostTotalValue = highCostProducts.reduce((total, product) => (
        total + product.total_value), 0);

      // O tamanho da área para produtos de alto custo deve ser o mesmo da fazenda inteira
      const highCostTotalArea = report.totalArea;

      const highCostCostPerHectare = (highCostTotalValue / highCostTotalArea) / bagSoya;

      return {
        farmName: report.farmName,
        totalValue: highCostTotalValue,
        totalArea: highCostTotalArea,
        costPerHectare: highCostCostPerHectare,
      };
    }).filter((report) => report.totalValue > 0);

    setFarmReports(filteredReports);
    setHighCostReports(highCostReportsFiltered);
  }, [harvest, products, farms]);

  return (
    <ReportContainer>
      <Header>
        Relatório de Custos -
        {' '}
        <span>
          Safra
          {' '}
          {harvest}
        </span>
      </Header>
      {isLoading ? (
        <>
          <Loader isLoading />
          <p>Carregando...</p>
        </>
      ) : (
        farmReports.map((report) => (
          <React.Fragment key={report.farmName}>
            <FarmReport>
              <h3>
                Fazenda:
                {' '}
                <span>{report.farmName}</span>
              </h3>
              <p>
                Gasto Total:
                {' '}
                <strong>
                  R$
                  {report.totalValue.toFixed(2)}
                </strong>
              </p>
              <p>
                Área da Fazenda:
                {' '}
                <strong>
                  {report.totalArea}
                  {' '}
                  hectares
                </strong>
              </p>
              <p>
                Custo por Hectare:
                {' '}
                <i>
                  {report.costPerHectare.toFixed(2)}
                  {' '}
                  sc/ha
                </i>
              </p>
            </FarmReport>
          </React.Fragment>
        ))
      )}
      {highCostReports.length > 0 && (
        <HighCostReport>
          <h2>
            Fazendas com
            {' '}
            <i>Alto Custo</i>
            {' '}
            de produção
          </h2>
          <h4>[Maior que 30 sc/ha]</h4>
          {highCostReports.map((report) => (
            <div key={report.farmName}>
              <h3>
                Fazenda:
                {' '}
                <span>{report.farmName}</span>
              </h3>
              <p>
                Gasto Total:
                {' '}
                <strong>
                  R$
                  {report.totalValue.toFixed(2)}
                </strong>
              </p>
              <p>
                Área da Fazenda:
                {' '}
                <strong>
                  {report.totalArea}
                  {' '}
                  hectares
                </strong>
              </p>
              <p>
                Custo por Hectare:
                {' '}
                <i>
                  {report.costPerHectare.toFixed(2)}
                  {' '}
                  sc/ha
                </i>
              </p>
            </div>
          ))}
        </HighCostReport>
      )}
    </ReportContainer>
  );
}
