import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import "../App.css";

const MerdaCupChart = () => {
  const [chartDataBar, setchartDataBar] = useState({});
  const [chartOptionsBar, setchartOptionsBar] = useState({});
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const Edoardo = 32 + 17;
  const Beppe = 35 + 16;
  const Ivan = 27 + 16;
  const Tommy = 25 + 14;
  const BabaYaga = 8 + 6;
  const Mattia = 18 + 12;
  const Michele = 15 + 7;
  const Danilo = 12 + 3;
  const FabriCalabria = 12 + 2;
  const Andrea = 11 + 5;
  const Biondo = 19 + 10;

  useEffect(() => {
    const documentStyleBar = getComputedStyle(document.documentElement);
    const textColorBar = documentStyleBar.getPropertyValue("--text-color");
    const textColorSecondaryBar = documentStyleBar.getPropertyValue("--text-color-secondary");
    const surfaceBorderBar = documentStyleBar.getPropertyValue("--surface-border");
    const red500 = documentStyleBar.getPropertyValue("--red-500");
    const green500 = documentStyleBar.getPropertyValue("--green-500");
    const yellow500 = documentStyleBar.getPropertyValue("--yellow-500");
    const bluegray500 = documentStyleBar.getPropertyValue("--bluegray-500");
    const blue500 = documentStyleBar.getPropertyValue("--blue-500");
    const violet500 = documentStyleBar.getPropertyValue("--violet-500");
    const cyan500 = documentStyleBar.getPropertyValue("--cyan-500");
    const pink500 = documentStyleBar.getPropertyValue("--pink-500");
    const orange500 = documentStyleBar.getPropertyValue("--orange-500");
    const lime500 = documentStyleBar.getPropertyValue("--lime-500");
    const purple500 = documentStyleBar.getPropertyValue("--purple-500");

    console.log("Colors for Bar Chart:", { red500, green500, yellow500, bluegray500, blue500, violet500, cyan500 });

    const dataBar = {
      labels: ["20/05", "21/05", "22/05", "22/05", "24/05", "25/05", "26/05"],
      datasets: [
        {
          label: "Edoardo",
          fill: false,
          borderColor: red500,
          backgroundColor: red500,
          tension: 0.4,
          data: [3, 1, 3, 2, 2, 3, 3],
        },
        {
          label: "Beppe",
          fill: false,
          borderColor: green500,
          backgroundColor: green500,
          tension: 0.4,
          data: [3, 2, 2, 1, 2, 3, 3],
        },
        {
          label: "Ivan",
          fill: false,
          borderColor: yellow500,
          backgroundColor: yellow500,
          tension: 0.4,
          data: [2, 4, 2, 1, 1, 2, 4],
        },
        {
          label: "Tommy",
          fill: false,
          borderColor: blue500,
          backgroundColor: blue500,
          tension: 0.4,
          data: [2, 2, 3, 3, 3, 2, 2],
        },
        {
          label: "Baba Yaga",
          fill: false,
          borderColor: bluegray500,
          backgroundColor: bluegray500,
          tension: 0.4,
          data: [2, 1, 1, 0, 1, 0, 1],
        },
        {
          label: "Mattia",
          fill: false,
          borderColor: violet500,
          backgroundColor: violet500,
          tension: 0.4,
          data: [1, 2, 2, 2, 1, 2, 2],
        },
        {
          label: "Michele",
          fill: false,
          borderColor: cyan500,
          backgroundColor: cyan500,
          tension: 0.4,
          data: [2, 1, 0, 1, 0, 2, 1],
        },
        {
          label: "Danilo",
          fill: false,
          borderColor: pink500,
          backgroundColor: pink500,
          tension: 0.4,
          data: [1, 0, 1, 0, 1, 0, 0],
        },
        {
          label: "Fabri Calabria",
          fill: false,
          borderColor: orange500,
          backgroundColor: orange500,
          tension: 0.4,
          data: [1, 1, 0, 0, 0, 0, 0],
        },
        {
          label: "Andrea",
          fill: false,
          borderColor: lime500,
          backgroundColor: lime500,
          tension: 0.4,
          data: [0, 2, 1, 0, 1, 1, 0],
        },
        {
          label: "Biondo",
          fill: false,
          borderColor: purple500,
          backgroundColor: purple500,
          tension: 0.4,
          data: [2, 1, 1, 2, 2, 1, 1],
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
            color: textColorBar,
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
    const pink500 = documentStyle.getPropertyValue("--pink-500");
    const orange500 = documentStyle.getPropertyValue("--orange-500");
    const lime500 = documentStyle.getPropertyValue("--lime-500");
    const purple500 = documentStyle.getPropertyValue("--purple-500");

    console.log("Colors:", { red500, green500, yellow500, bluegray500, blue500, violet500, cyan500 });

    const labels = [
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
    ];

    const dataValues = [Edoardo, Beppe, Ivan, Tommy, BabaYaga, Mattia, Michele, Danilo, FabriCalabria, Andrea, Biondo];
    const backgroundColors = [
      red500,
      green500,
      yellow500,
      bluegray500,
      blue500,
      violet500,
      cyan500,
      pink500,
      orange500,
      lime500,
      purple500,
    ];

    // Combine the labels, values, and colors into a single array of objects
    const combinedData = labels.map((label, index) => ({
      label,
      value: dataValues[index],
      backgroundColor: backgroundColors[index],
    }));

    // Sort the combined data by value in descending order
    combinedData.sort((a, b) => b.value - a.value);

    // Extract the sorted labels, values, and colors
    const sortedLabels = combinedData.map(item => item.label);
    const sortedValues = combinedData.map(item => item.value);
    const sortedBackgroundColors = combinedData.map(item => item.backgroundColor);

    const data = {
      labels: sortedLabels,
      datasets: [
        {
          data: sortedValues,
          backgroundColor: sortedBackgroundColors,
          label: "Cagate",
        },
      ],
    };

    const options = {
      indexAxis: "y", // This makes the chart vertical
      plugins: {
        legend: {
          display: false, // Hide legend
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColor,
            beginAtZero: true,
            precision: 0, // Ensure only integers are shown
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: textColor,
          },
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
        <h2 style={{ textAlign: "center", color: "brown" }}>Dal 20/05 al 26/05 </h2>
        <Chart type="bar" data={chartDataBar} options={chartOptionsBar} />
      </div>
      <div
        className="card"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBlock: "5rem" }}
      >
        <div>
          <h2 style={{ textAlign: "center", color: "brown" }}>Cagate Totali</h2>
        </div>
        <Chart type="bar" data={chartData} options={chartOptions} style={{ position: "block", width: "60%" }} />
      </div>
    </>
  );
};

export default MerdaCupChart;
