import React from "react";
import { Grid } from "@consta/uikit/Grid";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Ma'lumotlar namunasi
const data = [
  { name: "2020", neft: 100, gaz: 50 },
  { name: "2021", neft: 120, gaz: 60 },
  { name: "2022", neft: 150, gaz: 70 },
  { name: "2023", neft: 170, gaz: 80 },
  { name: "2024", neft: 200, gaz: 90 },
];

const GeomodelingDashboard = () => {
  return (
    <Grid cols="12" gap="xl">
      {/* Navigatsiya paneli */}
      <Grid col="3" row="span 12">
        <Card>
          <Text size="l">Navigator</Text>
          <ul>
            <li>Schema</li>
            <li>Poligon</li>
            <li>Markazlar</li>
            <li>Сkвajina</li>
            <li>Karta 1</li>
            <li>Karta 2</li>
          </ul>
        </Card>
      </Grid>

      {/* Asosiy xarita */}
      <Grid col="6" row="span 12">
        <Card>
          <Text size="l">Asosiy xarita</Text>
          {/* Leaflet yoki amCharts yordamida xarita qo'shish */}
          <div id="map" style={{ width: "100%", height: "500px" }}></div>
        </Card>
      </Grid>

      {/* Diagrammalar */}
      <Grid col="3" row="span 12">
        <Card>
          <Text size="l">Diagrammalar</Text>
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="neft" fill="#8884d8" />
            <Bar dataKey="gaz" fill="#82ca9d" />
          </BarChart>
          <LineChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="neft" stroke="#8884d8" />
            <Line type="monotone" dataKey="gaz" stroke="#82ca9d" />
          </LineChart>
          <PieChart width={300} height={200}>
            <Pie
              data={data}
              dataKey="neft"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#8884d8" />
              ))}
            </Pie>
          </PieChart>
        </Card>
      </Grid>
    </Grid>
  );
};

export default GeomodelingDashboard;
