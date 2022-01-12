# Simple CSV Plotter 

Using https://plotly.com/javascript/

## Quickly visualise csv data in an interactive way

<img src="https://github.com/fritzkeyzer/csvPlot/blob/master/example.gif" />

### How to run:
* Download CSVplot.zip
* Extract to a folder
* Run plot.exe
* You should see the following open in your browser:

<img src="https://github.com/fritzkeyzer/csvPlot/blob/master/screenshot.png">

### How to modify

Store your in 'data.csv' eg:
```csv
time,val1,val2
2022-01-07 00:00:00,45.56,12
2022-01-08 00:00:00,34.56,11
2022-01-09 00:00:00,25.56,10
2022-01-10 00:00:00,75.56,15
2022-01-11 00:00:00,74.56,16
```


Edit plot.js to match column names, edit styles, add subplots etc. 
(check out https://plotly.com/javascript/ for more examples and info)

```javascript
var data = [{
    x: unpack(rows, 'time'),
    y: unpack(rows, 'val1'),
    name: 'value 1'
},{
    x: unpack(rows, 'time'),
    y: unpack(rows, 'val2'),
    name: 'value 2'
}];
```

Refreshing the page in your browser will refresh changes to html, js, data or any other files in the folder.

Dont forget to close plot.exe when you're done :)