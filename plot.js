Plotly.d3.csv("http://127.0.0.1:8080/data.csv", function (err, rows) {
	function unpack(rows, key) {
		return rows.map(function (row) { return row[key]; });
	}

	var data = [{
		x: unpack(rows, 'time'),
		y: unpack(rows, 'val1'),
		name: 'tracename',
		marker: {
			line: {
				color: 'rgb(255,255,255)',
				width: 2
			}
		}
	},{
		x: unpack(rows, 'time'),
		y: unpack(rows, 'val2'),
		name: 'tracename2',
		marker: {
			line: {
				color: 'rgb(255,255,255)',
				width: 2
			}
		}
	}];

	console.log(data.locations);
	var layout = {
		title: 'Some title',
		dragmode: 'pan',
		showlegend: true, 
		legend: {
			//traceorder: 'normal',
			x: 0.02,
			y: 1,
			xanchor: 'left',
			orientation: 'h',
			//bgcolor: 'rgba(255,255,255)',
		},
		margin: {
			r: 50, 
			t: 50,
			b: 30,
			l: 50
		}, 
		xaxis: {
			rangeslider: {visible: false},
			autorange: true,
			//title: 'X',
			//type: 'date'
		}, 
		yaxis: {
			autorange: true,
			type: 'log',
			//title: 'Y',
			//showgrid: false,
			zeroline: false,
			showline: false,
		},
	};

	var config = {
		responsive: true,
		scrollZoom: true,
		showLink: false,
		toImageButtonOptions: {
			format: 'png', // one of png, svg, jpeg, webp
			filename: 'plot',
			height: 1080,
			width: 1920,
			scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
		},
	}
	Plotly.plot(plot, data, layout, config);
});