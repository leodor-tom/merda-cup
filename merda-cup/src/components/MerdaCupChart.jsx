import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

const MerdaCupChart = () => {
  const [chartDataBar, setchartDataBar] = useState({});
  const [chartOptionsBar, setchartOptionsBar] = useState({});

  useEffect(() => {
    const documentStyleBar = getComputedStyle(document.documentElement);
    const textColorBar = documentStyleBar.getPropertyValue("--text-color");
    const textColorSecondaryBar = documentStyleBar.getPropertyValue("--text-color-secondary");
    const surfaceBorderBar = documentStyleBar.getPropertyValue("--surface-border");
    const dataBar = {
      labels: ["09/05", "10/05", "11/05", "12/05", "13/05", "14/05", "15/05", "16/05", "17/05", "18/05", "19/05"],
      datasets: [
        {
          label: "Edoardo",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--blue-500"),
          tension: 0.4,
          data: [2, 4, 3, 5, 4, 4, 3, 2, 1, 1, 3],
        },
        {
          label: "Beppe",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [2, 2, 3, 3, 4, 5, 5, 2, 4, 2, 3],
        },
        {
          label: "Ivan",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--red-500"),
          tension: 0.4,
          data: [1, 2, 2, 5, 2, 3, 2, 3, 1, 3, 3],
        },
        {
          label: "Tommy",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--violet-500"),
          tension: 0.4,
          data: [0, 2, 2, 4, 1, 3, 3, 3, 3, 2, 2],
        },
        {
          label: "Baba Yaga",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [1, 0, 2, 2, 1, 1, 0, 0, 0, 1, 0],
        },
        {
          label: "Mattia",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [1, 1, 2, 2, 2, 2, 2, 1, 1, 3, 1],
        },
        {
          label: "Michele",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [0, 1, 1, 1, 3, 2, 2, 2, 2, 0, 1],
        },
        {
          label: "Danilo",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [0, 1, 1, 2, 1, 2, 2, 1, 0, 0, 1],
        },
        {
          label: "Fabri Calabria",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [1, 1, 3, 1, 2, 1, 1, 0, 1, 1, 0],
        },
        {
          label: "Andrea",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),
          tension: 0.4,
          data: [1, 1, 2, 2, 0, 1, 1, 0, 1, 1, 1],
        },
        {
          label: "Biondo",
          fill: false,
          borderColor: documentStyleBar.getPropertyValue("--green-500"),

          tension: 0.4,
          data: [1, 2, 1, 1, 4, 2, 1, 2, 2, 2, 1],
        },
      ],
    };
    const optionsBar = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColorBar,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Giornate",
          },
          ticks: {
            color: textColorSecondaryBar,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          title: {
            display: true,
            text: "Cagate",
          },
          ticks: {
            color: textColorSecondaryBar,
          },
          grid: {
            color: surfaceBorderBar,
            drawBorder: false,
          },
        },
      },
    };

    setchartDataBar(dataBar);
    setchartOptionsBar(optionsBar);
  }, []);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const red500 = documentStyle.getPropertyValue("--red-500");
    const green500 = documentStyle.getPropertyValue("--green-500");
    const yellow500 = documentStyle.getPropertyValue("--yellow-500");
    const bluegray500 = documentStyle.getPropertyValue("--bluegray-500");
    const blue500 = documentStyle.getPropertyValue("--blue-500");
    const violet500 = documentStyle.getPropertyValue("--violet-500");
    const cyan500 = documentStyle.getPropertyValue("--cyan-500");
    const data = {
      datasets: [
        {
          data: [32, 35, 27, 25, 8, 18, 15, 12, 12, 11, 19],
          backgroundColor: [
            red500,
            green500,
            yellow500,
            bluegray500,
            blue500,
            violet500,
            cyan500,
            blue500,
            blue500,
            blue500,
            blue500,
          ],
          label: "Cagate",
        },
      ],
      labels: [
        "Edoardo",
        "Beppe",
        "Ivan",
        "Tommy",
        "Baba Yaga",
        "Mattia",
        "Michele",
        "Danilo",
        "Fabri Calabria",
        "Andrea",
        "Biondo",
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: "black",
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <div className="card">
        <h2 style={{ textAlign: "center", color: "brown" }}>Dal 09/05 al 19/05 </h2>
        <Chart type="bar" data={chartDataBar} options={chartOptionsBar} />
      </div>
      <div
        className="card "
        style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}
      >
        <div>
          <h2 style={{ textAlign: "center", color: "brown" }}>Cagate Totali </h2>
        </div>

        <Chart type="polarArea" data={chartData} options={chartOptions} style={{ position: "block", width: "40%" }} />
      </div>
    </>
  );
};

export default MerdaCupChart;
