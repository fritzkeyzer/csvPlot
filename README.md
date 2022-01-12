#Simple CSV Plotter 

##Quickly visualise csv data in an interactive way


###How to:
Data is stored in 'data.csv'
```csv
time,val1,val2
2022-01-07 00:00:00,45.56,12
2022-01-08 00:00:00,34.56,11
2022-01-09 00:00:00,25.56,10
2022-01-10 00:00:00,75.56,15
2022-01-11 00:00:00,74.56,16
```

Edit plot.js to match column names

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

Run plot.exe

Dont forget to close plot.exe when you're done.

Please refer to https://plotly.com/javascript/ for more examples and info