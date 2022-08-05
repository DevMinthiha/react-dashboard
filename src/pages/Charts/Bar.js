import React from "react";
import { Header } from "../../components";
import {
  AxisModel,
  BarSeries,
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Bar Chart" />
      <ChartComponent
        id="bar-chart"
        dataSource={barChartData}
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
      >
        <Inject services={[BarSeries, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
