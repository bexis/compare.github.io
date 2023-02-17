import { Chart, LinearScale, CategoryScale, PieController, BubbleController, BarController, LogarithmicScale, ArcElement, PointElement, BarElement, Decimation,
    Filler,
    Legend,
    Title,
    Tooltip} from 'chart.js/dist/chart.mjs';
import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';

// @ts-ignore
Chart.defaults.color = 'white';

// @ts-ignore
Chart.register(BoxPlotController, BoxAndWiskers, LinearScale, CategoryScale, PieController, BubbleController, BarController, LogarithmicScale, ArcElement, PointElement, BarElement, Decimation,
    Filler,
    Legend,
    Title,
    Tooltip);


/**
 * @param {{ count: any; countRows?: number; countColumns?: number; countData: any; countMv: any; countNull: any; missingValues?: any[]; affectedVariablen?: any[]; allVariablen?: any[]; duplicates?: any[]; }} d
 * @param {HTMLElement | null} pieDiv
 */
export function completeness_pie(d, pieDiv)
{
    const pieCanvas = document.createElement('canvas');
    new Chart(pieCanvas.getContext('2d'), {
        type: 'pie',
        data: {
            //names of the legends in the pie
            labels: ['Data', 'Missing Values', 'NULL'],
            datasets: [
                {
                    //set the data for the pie
                    data: [d.countData, d.countMv, d.countNull],
                    backgroundColor: [
                        'rgb(50,205,50)', //background color of the data part in the pie
                        'rgb(255,165,0)', //background color of the missing values part in the pie
                        'rgb(255,0,0)' //background color of the empty cells (null) part in the pie
                    ],
                    hoverBackgroundColor: [
                        'rgba(50,205,50,0.8)', //background color on hover of the data part in the pie
                        'rgba(255,165,0,0.8)', //background color on hover of the missing values part in the pie
                        'rgba(255,0,0,0.8)' //background color on hover of the empty cells (null) part in the pie
                    ]
                }
            ]
        },
        //options of the pie
        options: {
            borderWidth: 1,
            plugins: {
                datalabels: {
                    //set the percentage in the pie
                    formatter: (/** @type {number} */ value) => {
                        return ((value * 100) / d.count).toFixed(2) + '%';
                    },
                    color: '#fff',
                    font: {
                        size: 18
                    },
                    //hide precentage in the pie, if is 0%
                    display: [d.countData > 0, d.countMv > 0, d.countNull > 0],
                    align: 'start',
                    //prevents the overlap of the percentage
                    offset: [-16, -32, -48]
                },
                //set the content of the tooltip
                tooltip: {
                    backgroundColor: '#ff',
                    callbacks: {
                        label: function (/** @type {{ parsed: any; label: any; }} */ context) {
                            const x = context.parsed;
                            if (x !== null) {
                                return `${context.label}: ${x} (${((x * 100) / d.count).toFixed(2)}%)`;
                            }
                        }
                    }
                }
            }
        }
    });
    // @ts-ignore
    pieDiv.innerHTML = '';
    pieDiv?.appendChild(pieCanvas);
}


/**
 * @param {{ count?: number; countRows: any; countColumns: any; countData?: number; countMv?: number; countNull?: number; missingValues: any; affectedVariablen: any; allVariablen: any; duplicates?: any[]; }} d
 * @param {HTMLElement | null} barDiv
 */
export function completeness_bar(d, barDiv)
{
    const barCanvas = document.createElement('canvas');
    //create needed data for the bar
    const barData = {
        labels: [],
        datasets: []
    };
    //definde background colors of the first 5 missing values type
    const bgcs = [
        'rgba(255, 159, 64, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(201, 203, 207, 0.2)'
    ];
    //definde background colors on hover of the first 5 missing values type
    const bcs = [
        'rgb(255, 159, 64)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(75, 192, 192)',
        'rgb(201, 203, 207)'
    ];

    //create on dataset for each type of missing values and put it in the list barData.datasets
    d.missingValues.forEach((/** @type {any} */ mv, /** @type {number} */ i) => {
        //if there is more then 5 type of missing values, create random color for each new type
        if (i > 4) {
            const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
            bcs.push(color);
            bgcs.push(color + '33');
        }
        const dataset = {
            label: mv,
            data: [],
            backgroundColor: bgcs[i],
            borderColor: bcs[i]
        };
        // @ts-ignore
        barData.datasets.push(dataset);
    });

    //create dataset for empty cells (null) and put it in the list bar.Data.datasets
    const nullsDataset = {
        label: 'NULL',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
    };
    // @ts-ignore
    barData.datasets.push(nullsDataset);

    //set the names of each dataset, this names are variables names
    d.affectedVariablen.forEach((/** @type {{ [x: string]: any; VariableName: any; }} */ v) => {
        // @ts-ignore
        barData.labels.push(v.VariableName);
        barData.datasets.forEach((d) => {
            // @ts-ignore
            if (v[d.label]) {
                // @ts-ignore
                d.data.push(v[d.label]);
                return;
            }
            // @ts-ignore
            d.data.push(null);
        });
    });

    // @ts-ignore
    barDiv.innerHTML = '';
    //get html element of the table that used to show affected variables
    const div = document.getElementById('affectedVar');
    // @ts-ignore
    div.innerHTML = '';
    //if there is no affacted variable, then there is no need to create this visualization (the bar)
    if (d.affectedVariablen.length > 0) {
        // if there is a lot of affacted variables, then set the height of the bar biger to show it corretly
        if (d.affectedVariablen.length > 10) {
            barCanvas.height = d.affectedVariablen.length * 16;
        }

        //create table to show the names of the affected variables
        const table = document.createElement('table');
        div?.appendChild(table);
        const head = document.createElement('tr');
        table.appendChild(head);
        const th = document.createElement('th');
        th.innerText = `${d.affectedVariablen.length} of ${d.countColumns} variables are affected`;
        head.appendChild(th);
        d.allVariablen.forEach((/** @type {{ VariableName: string; }} */ v) => {
            const tr = document.createElement('tr');
            tr.innerText += v.VariableName;
            if (d.affectedVariablen.includes(v)) {
                tr.style.backgroundColor = '#ff000050';
            }
            table.appendChild(tr);
        });

        //create the visualization bar
        new Chart(barCanvas.getContext('2d'), {
            type: 'bar',
            data: barData,
            options: {
                responsive: true,
                skipNull: true,
                borderWidth: 1,
                //set the y-axis as base (bar use usually x-axis)
                indexAxis: 'y',
                plugins: {
                    datalabels: {
                        //set the percentage in the bar
                        formatter: (/** @type {number} */ value) => {
                            if (value) {
                                const pr = ((value * 100) / d.countRows).toFixed(2);
                                // @ts-ignore
                                if (pr > 8) {
                                    return pr + '%';
                                }
                            }
                            //if percentage 0% or 8%< then dont show it
                            return null;
                        },
                        display: 'auto'
                    },

                    //set content of the tootip
                    tooltip: {
                        backgroundColor: '#ff',
                        callbacks: {
                            label: function (/** @type {{ parsed: { x: any; }; dataset: { label: any; }; }} */ context) {
                                const x = context.parsed.x;
                                if (x !== null) {
                                    return `${context.dataset.label}: ${x} (${((x * 100) / d.countRows).toFixed(
                                        2
                                    )}%)`;
                                }
                            }
                        }
                    }
                },

                //costumes the x-axis and the y-axis (name and font of the axis)
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Row's number",
                            font: {
                                family: 'Comic Sans MS',
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        //x-axis represent the number the the rows in the table
                        max: d.countRows,
                        stacked: true
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Variables',
                            font: {
                                family: 'Comic Sans MS',
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        stacked: true,

                        //if the name of the variables are very long, don't show the whole name, show just first 20 letter
                        ticks: {
                            // @ts-ignore
                            callback: function (/** @type {any} */ index) {
                                // @ts-ignore
                                let label = this.getLabelForValue(index);
                                if (label.length > 20) {
                                    label = label.substring(0, 20) + '...';
                                }
                                return label;
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'index',
                    axis: 'y',
                    intersect: false
                }
            }
        });
        barDiv?.appendChild(barCanvas);
    }
}


/**
 * @param {{ count: number; countRows: number; countColumns: number; countData: number; countMv: number; countNull: number; missingValues: any[]; affectedVariablen: any[]; allVariablen: any[]; duplicates: any[]; }} d
 * @param {{ DataTypeSystemType: string; uniqueValues: any[]; missingValues: { placeholder: any; }[]; VariableName: string; }} v
 * @param {HTMLElement | null} scatterDiv
 */
export function show_unique_value_distribution(d, v, scatterDiv) {
	//this scatter show all values in on variable of the table
	//const scatterDiv = document.getElementById("scatter");
	const scatterCanvas = document.createElement('canvas');

	/**
	 * @param {{ labels: any[]; datasets: any[]; }} d
	 */
	let scatterData = {
		labels: [],
		datasets: []
	};
	//	d.allVariablen.forEach((v) => {
	//if the type of the vriable is string, there is no need for the visualizaion
	const types = ['String', 'DateTime'];
	if (types.includes(v.DataTypeSystemType)) {
		return;
	}
	//it is not possible to show all variables in one visualization because the range of values can be very different, therefore only one variable needs to be visualized.
	//this is exaple, you can change it to visualize one variable of the table
	//if (v.VariableName !== "Nitrat") {
	//	return;
	//}
	//create random color for border color and background color for the dataset
	const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

	//this is list of the values in the variable as points of x-y-coordinate system
	/**
	 * @type {{ x: any; y: any; r: number; }[]}
	 */
	const points = [];
	const without_missing = v.uniqueValues.filter(function (/** @type {{ var: any; }} */ obj) {
		console.log(v.missingValues[0].placeholder);
		return obj.var != v.missingValues[0].placeholder;
	});

	const max = Math.max(...without_missing.map((/** @type {{ count: any; }} */ o) => o.count));
	const min = Math.min(...without_missing.map((/** @type {{ count: any; }} */ o) => o.count));
	const without_max = without_missing.filter(function (/** @type {{ count: number; }} */ obj) {
		return obj.count !== max;
	});
	const max_new = Math.max(...without_max.map((/** @type {{ count: any; }} */ o) => o.count));
	console.log(max, min, max_new, max / max_new);
	let text = '';
	let add = '';
	if (max / max_new < 10) {
		let intval = max / 50;
		if (max < 50) {
			intval = 1;
		}
		text = ': max count ' + max;
		without_missing.forEach(
			(/** @type {{ count: number; var: any; }} */ uv, /** @type {any} */ i) => {
				let count = 0;
				if (max < 50) {
					count = uv.count;
				} else {
					count = Math.round(uv.count / intval + 1);
					add = ' (radius: count/' + intval + ' +1)';
				}
				points.push({
					x: i,
					y: uv.var,
					r: count
				});
			}
		);
	} else {
		let intval = max_new / 50;

		text = ': excluding max count ' + max;
		without_max.forEach((/** @type {{ count: number; var: any; }} */ uv, /** @type {any} */ i) => {
			let count = 0;
			if (max_new < 50) {
				count = uv.count;
			} else {
				count = Math.round(uv.count / intval + 1);
				add = ' (radius: count/' + intval + ' +1)';
			}
			points.push({
				x: i,
				y: uv.var,
				r: count
			});
		});
	}
	console.log(points);
	// @ts-ignore
	scatterData.datasets.push({
		label: v.VariableName + text + add,
		data: points,
		borderColor: color,
		backgroundColor: color + '33', //make the background color brighter of the border color
		borderWidth: 1
	});
	//	});
	console.log(scatterDiv, 'scatter');
	// @ts-ignore
	scatterDiv.innerHTML = '';
	if (scatterData.datasets.length > 0) {
		new Chart(scatterCanvas.getContext('2d'), {
			type: 'bubble',
			data: scatterData,
			options: {
				plugins: {
					datalabels: {
						display: false
					}
				}
			}
		});
		scatterDiv?.appendChild(scatterCanvas);
	}
}

/**
 * @param {{ duplicates: any[]; allVariablen: any[]; countRows: number; }} d
 */
export function show_dublicates(d) {
	const dupTable = document.getElementById('dupTable');
	const duplicates = document.getElementById('duplicates');
	const dupDiv = document.createElement('div');
	dupDiv.innerText = 'Duplicates: 0%';
	// @ts-ignore
	dupTable.innerHTML = '';
	// @ts-ignore
	duplicates.innerHTML = '';
	duplicates?.appendChild(dupDiv);

	//create table of all duplicates as html element
	if (d.duplicates.length) {
		const table = document.createElement('table');
		const tHead = document.createElement('thead');
		const tBody = document.createElement('tbody');
		const tr = document.createElement('tr');
		const headcount = document.createElement('th');
		headcount.innerText = 'Duplicates';
		tr.appendChild(headcount);
		d.allVariablen.forEach((v) => {
			const th = document.createElement('th');
			th.innerText = v.VariableName;
			tr.appendChild(th);
		});
		tHead.appendChild(tr);
		table.appendChild(tHead);
		//dupSum is the number of all duplicates, wich can be deleted from the table
		let dupSum = -d.duplicates.length;
		d.duplicates.forEach((dup) => {
			const tr = document.createElement('tr');
			const dupCount = document.createElement('td');
			dupCount.innerText = dup['count'];
			dupSum += dup['count'];
			tr.appendChild(dupCount);
			d.allVariablen.forEach((v) => {
				const td = document.createElement('td');
				//get the values of cells bei id of the variable
				td.innerText = dup['var' + v.VariableId];
				tr.appendChild(td);
			});
			tBody.append(tr);
			table.appendChild(tBody);
		});
		dupTable?.appendChild(table);

		//set percentage of duplicates
		const dupPerc = ((dupSum / d.countRows) * 100).toFixed(2);
		dupDiv.innerText = 'Duplicates: ' + dupPerc + '%';
		//if duplicates more the 10% set color red, else orange
		// @ts-ignore
		if (dupPerc > 10) {
			dupDiv.style.backgroundColor = 'rgb(255, 0, 0, 0.5)';
			dupDiv.style.borderColor = 'rgb(255, 0, 0)';
		} else {
			dupDiv.style.backgroundColor = 'rgb(255, 165, 0, 0.5)';
			dupDiv.style.borderColor = 'rgb(255, 165, 0)';
		}
	}
}

/**
 * @param {{ DataTypeSystemType: string; uniqueValues: any[]; missingValues: { placeholder: any; }[]; VariableName: string; min: number; max: number; }} v
 * @param {HTMLElement | null} boxplotDiv
 */
export function boxplot(v, boxplotDiv) {
	const boxplotCanvas = document.createElement('canvas');
	/**
	 * @param {{ labels: any[]; datasets: any[]; }} d
	 */
	const boxplotData = {
		labels: [],
		datasets: []
	};
	let min, max;

	//if the type of the vriable is string, there is no need for the visualizaion
	const types = ['String', 'DateTime'];
	if (types.includes(v.DataTypeSystemType)) {
		return;
	}

	//set min and max for the y-axis in the boxplot
	min = v.min;
	max = v.max;
	// @ts-ignore
	boxplotData.labels.push(v.VariableName);
	/**
	 * @type {any[]}
	 */
	const data = [];

	const without_missing = v.uniqueValues.filter(function (/** @type {{ var: any; }} */ obj) {
		console.log(v.missingValues[0].placeholder);
		return obj.var != v.missingValues[0].placeholder;
	});

	without_missing.forEach((/** @type {{ var: any; }} */ uv) => {
		//if the value is not number (null) don't put it in the data for the boxplot, otherwise, it's not gonna working
		if (typeof uv.var !== 'number') {
			return;
		}
		data.push(uv.var);
	});
	console.log('boxplot', data, boxplotDiv);
	// @ts-ignore
	boxplotData.datasets.push({
		label: v.VariableName,
		data: [data],
		borderColor: 'rgb(54, 162, 235)', //border color of the dataset
		backgroundColor: 'rgb(54, 162, 235, 02)', //background color of the dataset
		borderWidth: 1,
		outlierBackgroundColor: 'red', //color of the outlier
		itemBackgroundColor: '#000', //color of other values
		outlierRadius: 4, //size of the outlier
		itemRadius: 2 //size of other values
	});

	// @ts-ignore
	boxplotDiv.innerHTML = '';
	if (boxplotData.datasets.length > 0) {
		new Chart(boxplotCanvas.getContext('2d'), {
			type: 'boxplot',
			data: boxplotData,
			options: {
				plugins: {
					datalabels: {
						display: false
					},
					tooltip: {
						backgroundColor: '#ff'
					}
				},
				scales: {
					y: {
						type: 'logarithmic',
						//set the min and max of the y-axis
						min: min - 1,
						max: max + 1
					}
				}
			}
		});
		boxplotDiv?.appendChild(boxplotCanvas);
	}
}
