var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
  dataColors = $("#campaign-sent-chart").data("colors");
dataColors && (colors = dataColors.split(","));
var opt1 = {
  chart: { type: "bar", height: 60, sparkline: { enabled: !0 } },
  plotopt: { bar: { columnWidth: "60%" } },
  colors: colors,
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (o) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(
  document.querySelector("#campaign-sent-chart"),
  opt1
).render();
colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#new-leads-chart").data("colors")) &&
  (colors = dataColors.split(","));
var opt2 = {
  chart: { type: "line", height: 60, sparkline: { enabled: !0 } },
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
  stroke: { width: 2, curve: "smooth" },
  markers: { size: 0 },
  colors: colors,
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (o) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(document.querySelector("#new-leads-chart"), opt2).render();
colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#deals-chart").data("colors")) &&
  (colors = dataColors.split(","));
var opt3 = {
  chart: { type: "bar", height: 60, sparkline: { enabled: !0 } },
  plotopt: { bar: { columnWidth: "60%" } },
  colors: colors,
  series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (o) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(document.querySelector("#deals-chart"), opt3).render();
colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#booked-revenue-chart").data("colors")) &&
  (colors = dataColors.split(","));
var opt4 = {
  chart: { type: "bar", height: 60, sparkline: { enabled: !0 } },
  plotopt: { bar: { columnWidth: "60%" } },
  colors: colors,
  series: [{ data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82] }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (o) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(
  document.querySelector("#booked-revenue-chart"),
  opt4
).render();
colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#dash-campaigns-chart").data("colors")) &&
  (colors = dataColors.split(","));
var opt5 = {
    chart: { height: 304, type: "radialBar" },
    colors: colors,
    series: [86, 36, 50],
    labels: ["Total Sent", "Reached", "Opened"],
    plotopt: { radialBar: { track: { margin: 8 } } },
  },
  chart = new ApexCharts(
    document.querySelector("#dash-campaigns-chart"),
    opt5
  );
chart.render();
colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(dataColors = $("#dash-revenue-chart").data("colors")) &&
  (colors = dataColors.split(","));
opt = {
  chart: { height: 321, type: "line", toolbar: { show: !1 } },
  stroke: { curve: "smooth", width: 2 },
  series: [
    {
      name: "Total Revenue",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 43],
    },
    {
      name: "Total Pipeline",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56],
    },
  ],
  fill: { type: "solid", opacity: [0.35, 1] },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  markers: { size: 0 },
  colors: colors,
  yaxis: [{ title: { text: "Revenue (USD)" }, min: 0 }],
  tooltip: {
    shared: !0,
    intersect: !1,
    y: {
      formatter: function (o) {
        return void 0 !== o ? o.toFixed(0) + "k" : o;
      },
    },
  },
  grid: { borderColor: "#f1f3fa", padding: { bottom: 5 } },
  legend: { fontSize: "14px", fontFamily: "14px", offsetY: 5 },
  responsive: [
    { breakpoint: 600, opt: { yaxis: { show: !1 }, legend: { show: !1 } } },
  ],
};
(chart = new ApexCharts(
  document.querySelector("#dash-revenue-chart"),
  opt
)).render();
