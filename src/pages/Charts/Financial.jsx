import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  DateTime,
  Logarithmic,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import {
  financialChartData,
  FinancialPrimaryYAxis,
  FinancialPrimaryXAxis,
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="AAPLE Historical" />

      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        legendSettings={{ visible: true, background: 'white' }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject
          services={[
            HiloSeries,
            DateTime,
            Logarithmic,
            Tooltip,
            Category,
            Zoom,
            Crosshair,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
