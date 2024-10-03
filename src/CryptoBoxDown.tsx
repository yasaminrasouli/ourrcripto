import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions, AgBarSeriesOptions } from "ag-charts-community";

function CryptoBoxDown() {
  const [options, setOptions] = useState<AgChartOptions>({
    data: [
      { month: "Jan", iceCreamSales: 0 },
      { month: "Feb", iceCreamSales: 2000 },
      { month: "Mar", iceCreamSales: 4000 },
      { month: "Apr", iceCreamSales: 6000 },
      { month: "May", iceCreamSales: 8000 },
      { month: "Jun", iceCreamSales: 10000 },
      { month: "Jul", iceCreamSales: 12500 },
      { month: "Aug", iceCreamSales: 12500 },
      { month: "Sept", iceCreamSales: 9500 },
      { month: "Oct", iceCreamSales: 9500 },
      { month: "Nov", iceCreamSales: 2000 },
      { month: "Dec", iceCreamSales: 2000 },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        label: {
          formatter: (params) => {
            const value = params.value;
            return `${(value / 1000).toFixed(0)}k`;
          },
        },
      },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        fill: "#D0DBFF",
      } as AgBarSeriesOptions,
    ],
    background: {
      fill: "transparent", // تنظیم پس‌زمینه به شفاف
    },
  });

  return (
    <div style={{ background: "#fff" }}>
      <h2 style={{ margin: "0" }}>Statistics</h2>
      <AgCharts options={options} />
    </div>
  );
}

export default CryptoBoxDown;
