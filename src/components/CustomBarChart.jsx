import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const CustomBarChart = () => {
  const chartRef = useRef(null);

  const option = {
    xAxis: {
      data: ["Animals", "Fruits", "Cars"],
    },
    yAxis: {},
    dataGroupId: "",
    animationDurationUpdate: 500,
    series: {
      type: "bar",
      id: "sales",
      data: [
        {
          value: 5,
          groupId: "animals",
        },
        {
          value: 2,
          groupId: "fruits",
        },
        {
          value: 4,
          groupId: "cars",
        },
      ],
      universalTransition: {
        enabled: true,
        divideShape: "clone",
      },
    },
  };

  const drilldownData = [
    {
      dataGroupId: "animals",
      data: [
        ["Cats", 4],
        ["Dogs", 2],
        ["Cows", 1],
        ["Sheep", 2],
        ["Pigs", 1],
      ],
    },
    {
      dataGroupId: "fruits",
      data: [
        ["Apples", 4],
        ["Oranges", 2],
      ],
    },
    {
      dataGroupId: "cars",
      data: [
        ["Toyota", 4],
        ["Opel", 2],
        ["Volkswagen", 2],
      ],
    },
  ];

  const onChartClick = (params) => {
    const { event, data } = params;
    if (data) {
      const subData = drilldownData.find(
        (item) => item.dataGroupId === data.groupId
      );
      if (subData) {
        const newOption = {
          xAxis: {
            data: subData.data.map((item) => item[0]),
          },
          series: {
            type: "bar",
            id: "sales",
            dataGroupId: subData.dataGroupId,
            data: subData.data.map((item) => item[1]),
            universalTransition: {
              enabled: true,
              divideShape: "clone",
            },
          },
          graphic: [
            {
              type: "text",
              left: 50,
              top: 20,
              style: {
                text: "Back",
                fontSize: 18,
              },
              onclick: function () {
                chartRef.current.getEchartsInstance().setOption(option);
              },
            },
          ],
        };
        chartRef.current.getEchartsInstance().setOption(newOption);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        color: "#00203399",
      }}
    >
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ width: "100%", height: "100%" }}
        onEvents={{ click: onChartClick }}
      />
    </div>
  );
};

export default CustomBarChart;
