import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { useThemeVars } from "@consta/uikit/useThemeVars";
import React, { useLayoutEffect } from "react";

const POLYGONS = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [136.066786, 67.155569],
            [136.066786, 66.155569],
            [134.066786, 66.155569],
            [134.066786, 64.155569],
            [132.066786, 64.155569],
            [132.066786, 65.155569],
            [130.066786, 65.155569],
            [130.066786, 66.155569],
            [128.066786, 66.155569],
            [128.066786, 67.155569],
            [130.066786, 67.155569],
            [130.066786, 68.155569],
            [132.066786, 68.155569],
            [132.066786, 67.155569],
            [136.066786, 67.155569],
          ],
        ],
      },
      properties: {
        name: "Вынгаяхинский лицензионный участок",
        id: "polygon1",
      },
      id: "polygon1",
    },
  ],
};

const LINES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [30.3, 59.9], // Sankt-Peterburg
          [49.0661, 64.7], // Komi Respublikasi
        ],
      },
      properties: {
        name: "Sankt-Peterburg -> Komi Respublikasi",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [49.0661, 64.7], // Komi Respublikasi
          [76.55, 66.56], // Yamalo-Nenetskiy Avtonomniy Okrug
        ],
      },
      properties: {
        name: "Komi Respublikasi -> Yamalo-Nenetskiy Avtonomniy Okrug",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [76.55, 66.56], // Yamalo-Nenetskiy Avtonomniy Okrug
          [82.92, 66.41], // Krasnoyarskiy Kray
        ],
      },
      properties: {
        name: "Yamalo-Nenetskiy Avtonomniy Okrug -> Krasnoyarskiy Kray",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [76.55, 66.56], // Yamalo-Nenetskiy Avtonomniy Okrug
          [85.35, 57.15], // Tomsk Oblasti
        ],
      },
      properties: {
        name: "Yamalo-Nenetskiy Avtonomniy Okrug -> Tomsk Oblasti",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [76.55, 66.56], // Yamalo-Nenetskiy Avtonomniy Okrug
          [129.83, 62.02], // Yakutiya
        ],
      },
      properties: {
        name: "Yamalo-Nenetskiy Avtonomniy Okrug -> Yakutiya",
      },
    },
  ],
};

const PolygonsExample = () => {
  const vars = useThemeVars();

  useLayoutEffect(() => {
    const root = am5.Root.new("PolygonsExample");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        rotationX: -55,
        projection: am5map.geoMercator(),
        layout: root.horizontalLayout,
      })
    );

    // Main map data
    const mainPolygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    mainPolygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color("#0071B2"),
      fillOpacity: 0.16,
      strokeWidth: 2,
      stroke: am5.color(vars.color.primary["--color-bg-default"]),
    });

    mainPolygonSeries.mapPolygons.template.states.create("hover", {
      stroke: am5.color("#66ADE1"),
      strokeWidth: 2,
    });

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    // Custom polygons
    const customPolygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: POLYGONS,
        layer: -1,
        valueField: "value",
      })
    );

    customPolygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fillOpacity: 0.2,
      strokeWidth: 1,
      templateField: "settings",
    });

    customPolygonSeries.data.setAll([
      {
        id: "polygon1",
        settings: {
          fill: am5.color("#F38B00"),
          stroke: am5.color("#F38B00"),
        },
      },
    ]);

    // Custom lines
    const lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {
        geoJSON: LINES,
        layer: -2,
      })
    );

    lineSeries.mapLines.template.setAll({
      stroke: am5.color("#56B9F2"),
      strokeWidth: 2,
    });

    // States
    customPolygonSeries.mapPolygons.template.states.create("hover", {
      stroke: am5.color("#66ADE1"),
      strokeWidth: 2,
    });

    customPolygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color("#0071B2"),
      fillOpacity: 0.3,
      stroke: am5.color(vars.color.primary["--color-bg-default"]),
    });

    customPolygonSeries.mapPolygons.template.states.create("disable", {
      fill: am5.color("#004269"),
      fillOpacity: 0.7,
    });

    // Pointer events
    let previousPolygon;

    customPolygonSeries.mapPolygons.template.events.on(
      "pointerover",
      function (event) {
        event.target.toFront();
      }
    );
    customPolygonSeries.mapPolygons.template.events.on(
      "pointerout",
      function (event) {
        if (event.target !== previousPolygon) {
          event.target.toBack();
        }
      }
    );

    customPolygonSeries.mapPolygons.template.on(
      "active",
      function (active, target) {
        if (previousPolygon && previousPolygon !== target) {
          previousPolygon.set("active", false);
        }
        if (target?.get("active")) {
          target?.toFront();
          target?.dataItem &&
            customPolygonSeries.zoomToDataItem(target.dataItem);
        }

        previousPolygon = target;
      }
    );

    // Set default zoom and center
    chart.appear(1000, 100);
    chart.zoomToGeoPoint(
      { latitude: 60.56, longitude: 6.55 },
      4 // Zoom level
    );

    return () => {
      chart.dispose();
      root.dispose();
      mainPolygonSeries.dispose();
      customPolygonSeries.dispose();
      lineSeries.dispose();
    };
  }, [vars]);

  return (
    <div id="PolygonsExample" style={{ width: "100%", height: "500px" }} />
  );
};

export default PolygonsExample;
