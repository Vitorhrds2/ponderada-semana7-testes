import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const cardStyle = {
  background: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  width: 'auto',
  height: 'fit-content',
};

const sectorColors = {
  ONG: 'rgb(84, 79, 197)',
  Governamental: 'rgb(0, 226, 114)',
  Privado: 'rgb(44, 175, 254)',
};

interface ScatterPlotChartProps {
  data: { x: number; y: number; sector: string }[];
}

const ScatterPlotChart: React.FC<ScatterPlotChartProps> = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const sectors = Array.from(new Set(data.map((item) => item.sector))); 

      Highcharts.chart(chartContainerRef.current, {
        chart: {
          type: 'scatter',
        },
        title: {
          text: 'Scatter Plot Chart',
        },
        xAxis: {
          type: 'datetime',
          height: '400px',
          title: {
            text: 'Data de Entrega',
          },
        },
        yAxis: {
          title: {
            text: 'Etapa',
          },
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
            },
            tooltip: {
              pointFormat: 'Parceiro: {point.partnerName}<br><br>Data de Entrega: {point.x:%e %b %Y}<br>Etapa: {point.y}',
            },
          },
        },
        series: sectors.map((sector) => {
          const sectorData = data.filter((item) => item.sector === sector);
          return {
            name: sector,
            color: sectorColors[sector],
            data: sectorData.map(({ x, y, partnerName }) => ({
              x,
              y,
              partnerName,
              color: sectorColors[sector],
            })), 
            marker: {
              symbol: 'circle', 
            },
          };
        }),
      });
    }
  }, [data]);

  return <div id="scatterChartContainer" ref={chartContainerRef} style={cardStyle} />;
};


export default ScatterPlotChart;
