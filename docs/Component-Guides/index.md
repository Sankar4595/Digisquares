---
sidebar_position: 1
---

# Visualize data as charts and graphs

Learn how to use your data to create charts and graphs.

<hr/>

The Chart component allows you to visualize data as graphs and charts. It's built using Plotly.js, so you can also customize charts to fit your needs.

## Demo
Check out the demo to see the Chart component in action.

## Choose your data
You can use queries and transformers, or JavaScript to build charts. You can reference an array or an object in the Data source field for a chart and Retool automatically detects the data type and transforms it for graphing. If your data source is an array and you enable Use JavaScript, Retool's built-in formatArrayAsObject function wraps the data source reference.

After you select a data source, Retool parses the data and populates the chart. By default, the first non-numeric column populates the X-axis but you can change this and other properties like Chart type, Group by, etc.

## Supported data structures
The Chart component requires data in a tabular format. This can either be an array of objects, where every object field is a column, or as an object where each key represents a column and the value is an array of values for that column.

```
[
  { "date": "2022-03-01", "animal": "dog", "count": 4 },
  { "date": "2022-03-01", "animal": "cat", "count": 6 },
  { "date": "2022-04-01", "animal": "frog", "count": 10 },
  { "date": "2022-04-01", "animal": "cat", "count": 3 },
  { "date": "2022-04-01", "animal": "dog", "count": 2 }
]

```

```
{
  "date": [
    "2022-03-01",
    "2022-03-01",
    "2022-04-01",
    "2022-04-01",
    "2022-04-01"
  ],
  "animal": ["dog", "cat", "frog", "cat", "dog"],
  "count": [4, 6, 10, 3, 2]
}

```