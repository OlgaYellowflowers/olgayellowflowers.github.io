//# dc.js Getting Started and How-To Guide
'use strict';

/* jshint globalstrict: true */
/* global dc,d3,crossfilter,colorbrewer */

// ### Create Chart Objects

// Create chart objects associated with the container elements identified by the css selector.
// Note: It is often a good idea to have these objects accessible at the global scope so that they can be modified or
// filtered by other page controls.
var gainOrLossChart = dc.pieChart('#gain-loss-chart');
var fluctuationChart = dc.barChart('#fluctuation-chart');
var moveChart = dc.lineChart('#monthly-move-chart');
var volumeChart = dc.barChart('#monthly-volume-chart');
var dayOfWeekChart = dc.rowChart('#day-of-week-chart');


// ### Anchor Div for Charts
/*
// A div anchor that can be identified by id
    <div id='your-chart'></div>
// Title or anything you want to add above the chart
    <div id='chart'><span>Days by Gain or Loss</span></div>
// ##### .turnOnControls()

// If a link with css class `reset` is present then the chart
// will automatically hide/show it based on whether there is a filter
// set on the chart (e.g. slice selection for pie chart and brush
// selection for bar chart). Enable this with `chart.turnOnControls(true)`

// dc.js >=2.1 uses `visibility: hidden` to hide/show controls without
// disrupting the layout. To return the old `display: none` behavior,
// set `chart.controlsUseVisibility(false)` and use that style instead.
    <div id='chart'>
       <a class='reset'
          href='javascript:myChart.filterAll();dc.redrawAll();'
          style='visibility: hidden;'>reset</a>
    </div>
// dc.js will also automatically inject the current filter value into
// any html element with its css class set to `filter`
    <div id='chart'>
        <span class='reset' style='visibility: hidden;'>
          Current filter: <span class='filter'></span>
        </span>
    </div>
*/

//### Load your data

//Data can be loaded through regular means with your
//favorite javascript library
//
//```javascript
//d3.csv('data.csv', function(data) {...});
//d3.json('data.json', function(data) {...});
//jQuery.getJson('data.json', function(data){...});
//```

d3.csv('https://saraquigley.github.io/uc-trends/javascript/expenses_allYears.csv', function (data) {
    // var dateFormat = d3.time.format('%m/%d/%Y');
    // var numberFormat = d3.format('.2f');

    // data.forEach(function (d) {
    //     d.dd = dateFormat.parse(d.date);
    //     d.month = d3.time.month(d.dd); // pre-calculate month for better performance
    //     d.close = +d.close; // coerce to number
    //     d.open = +d.open;
    // });


    // var ndx = crossfilter(data);
    // var all = ndx.groupAll();
    // // Counts per weekday
    // var dayOfWeek = ndx.dimension(function (d) {
    //     var day = d.dd.getDay();
    //     var name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //     return day + '.' + name[day];
    // });
    // var dayOfWeekGroup = dayOfWeek.group();
    // //#### Row Chart

    // // Create a row chart and use the given css selector as anchor. You can also specify
    // // an optional chart group for this chart to be scoped within. When a chart belongs
    // // to a specific group then any interaction with such chart will only trigger redraw
    // // on other charts within the same chart group.
    // // <br>API: [Row Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#row-chart)
    // dayOfWeekChart /* dc.rowChart('#day-of-week-chart', 'chartGroup') */
    //     .width(180)
    //     .height(180)
    //     .margins({top: 20, left: 10, right: 10, bottom: 20})
    //     .group(dayOfWeekGroup)
    //     .dimension(dayOfWeek)
    //     // Assign colors to each value in the x scale domain
    //     .ordinalColors(['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'])
    //     .label(function (d) {
    //         return d.key.split('.')[1];
    //     })
    //     // Title sets the row text
    //     .title(function (d) {
    //         return d.value;
    //     })
    //     .elasticX(true)
    //     .xAxis().ticks(4);


        // format the data a bit
            var dateFormat = d3.time.format("%Y");
            var numberFormat = d3.format(",f");

            // feed it through crossfilter
            var ndx = crossfilter(data);
            var all = ndx.groupAll();

            var expensesByFunction = ndx.dimension(function (d) {
                return d.expenseFunction;
            });

            var expensesByFunctionGroup = expensesByFunction.group().reduceSum(function (d) { return d.amount; });

            var expensesByCampus = ndx.dimension(function (d) {
                return d.campus;
            });
            var expensesByCampusGroup = expensesByCampus.group().reduceSum(function(d) { return d.amount; });


            var expensesByYear = ndx.dimension(function (d) {
                return d.year;
            });

            var expensesByYearGroup = expensesByYear.group().reduceSum(function (d) { return d.amount; });

            var dateDimension = ndx.dimension(function (d) {
                return d.year;
            });


            // set colors to red <--> purple
            //var expenseColors = ['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'];
            var expenseColors = ["#fde0dd","#fa9fb5","#e7e1ef","#d4b9da","#c994c7","#fcc5c0","#df65b0","#e7298a","#ce1256", "#f768a1","#dd3497","#e78ac3","#f1b6da","#c51b7d"];



            dayOfWeekChart.width(500)
                    .height(400)
                    .margins({top: 20, left: 10, right: 10, bottom: 20})
                    .transitionDuration(1250)
                    .dimension(expensesByFunction)
                    .group(expensesByFunctionGroup)
                    .colors(expenseColors)
                    .renderLabel(true)
                    .gap(9)
                    .title(function (d) { return ""; })
                    .elasticX(true)
                    .xAxis().ticks(10).tickFormat(d3.format("s"));

});


d3.csv('https://dc-js.github.io/dc.js/ndx.csv', function (data) {
    // Since its a csv file we need to format the data a bit.
    var dateFormat = d3.time.format('%m/%d/%Y');
    var numberFormat = d3.format('.2f');

    data.forEach(function (d) {
        d.dd = dateFormat.parse(d.date);
        d.month = d3.time.month(d.dd); // pre-calculate month for better performance
        d.close = +d.close; // coerce to number
        d.open = +d.open;
    });

    //### Create Crossfilter Dimensions and Groups

    //See the [crossfilter API](https://github.com/square/crossfilter/wiki/API-Reference) for reference.
    var ndx = crossfilter(data);
    var all = ndx.groupAll();

    // Dimension by year
    var yearlyDimension = ndx.dimension(function (d) {
        return d3.time.year(d.dd).getFullYear();
    });
    // Maintain running tallies by year as filters are applied or removed
    var yearlyPerformanceGroup = yearlyDimension.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.count;
            p.absGain += v.close - v.open;
            p.fluctuation += Math.abs(v.close - v.open);
            p.sumIndex += (v.open + v.close) / 2;
            p.avgIndex = p.sumIndex / p.count;
            p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
            p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.count;
            p.absGain -= v.close - v.open;
            p.fluctuation -= Math.abs(v.close - v.open);
            p.sumIndex -= (v.open + v.close) / 2;
            p.avgIndex = p.count ? p.sumIndex / p.count : 0;
            p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
            p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
            return p;
        },
        /* initialize p */
        function () {
            return {
                count: 0,
                absGain: 0,
                fluctuation: 0,
                fluctuationPercentage: 0,
                sumIndex: 0,
                avgIndex: 0,
                percentageGain: 0
            };
        }
    );

    // Dimension by full date
    var dateDimension = ndx.dimension(function (d) {
        return d.dd;
    });

    // Dimension by month
    var moveMonths = ndx.dimension(function (d) {
        return d.month;
    });
    // Group by total movement within month
    var monthlyMoveGroup = moveMonths.group().reduceSum(function (d) {
        return Math.abs(d.close - d.open);
    });
    // Group by total volume within move, and scale down result
    var volumeByMonthGroup = moveMonths.group().reduceSum(function (d) {
        return d.volume / 500000;
    });
    var indexAvgByMonthGroup = moveMonths.group().reduce(
        function (p, v) {
            ++p.days;
            p.total += (v.open + v.close) / 2;
            p.avg = Math.round(p.total / p.days);
            return p;
        },
        function (p, v) {
            --p.days;
            p.total -= (v.open + v.close) / 2;
            p.avg = p.days ? Math.round(p.total / p.days) : 0;
            return p;
        },
        function () {
            return {days: 0, total: 0, avg: 0};
        }
    );

    // Create categorical dimension
    var gainOrLoss = ndx.dimension(function (d) {
        return d.open > d.close ? 'Loss' : 'Gain';
    });
    // Produce counts records in the dimension
    var gainOrLossGroup = gainOrLoss.group();

    // Determine a histogram of percent changes
    var fluctuation = ndx.dimension(function (d) {
        return Math.round((d.close - d.open) / d.open * 100);
    });
    var fluctuationGroup = fluctuation.group();

    // Summarize volume by quarter
    var quarter = ndx.dimension(function (d) {
        var month = d.dd.getMonth();
        if (month <= 2) {
            return 'Q1';
        } else if (month > 2 && month <= 5) {
            return 'Q2';
        } else if (month > 5 && month <= 8) {
            return 'Q3';
        } else {
            return 'Q4';
        }
    });
    var quarterGroup = quarter.group().reduceSum(function (d) {
        return d.volume;
    });

    // Counts per weekday
    var dayOfWeek = ndx.dimension(function (d) {
        var day = d.dd.getDay();
        var name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return day + '.' + name[day];
    });
    var dayOfWeekGroup = dayOfWeek.group();

    
    
    // #### Pie/Donut Charts

    // Create a pie chart and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Pie Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#pie-chart)

    gainOrLossChart /* dc.pieChart('#gain-loss-chart', 'chartGroup') */
    // (_optional_) define chart width, `default = 200`
        .width(180)
    // (optional) define chart height, `default = 200`
        .height(180)
    // Define pie radius
        .radius(80)
        
    // Set dimension
        .dimension(gainOrLoss)
        .transitionDuration(1250)
    // Set group
        .group(gainOrLossGroup)
        .ordinalColors(['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'])
    // (_optional_) by default pie chart will use `group.key` as its label but you can overwrite it with a closure.
        .label(function (d) {
            if (gainOrLossChart.hasFilter() && !gainOrLossChart.hasFilter(d.key)) {
                return d.key + '(0%)';
            }
            var label = d.key;
            if (all.value()) {
                label += '(' + Math.floor(d.value / all.value() * 100) + ')';
            }
            return label;
        });
   

    //#### Bar Chart

    // Create a bar chart and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Bar Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#bar-chart)
    fluctuationChart /* dc.barChart('#volume-month-chart', 'chartGroup') */
        .width(420)
        .height(180)
        .margins({top: 10, right: 50, bottom: 30, left: 40})
        .dimension(fluctuation)
        .group(fluctuationGroup)
        .elasticY(true)
        .ordinalColors(['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'])
        .colors(colorbrewer.RdYlBu[9])
        // (_optional_) whether bar should be center to its x value. Not needed for ordinal chart, `default=false`
        .centerBar(true)
        // (_optional_) set gap between bars manually in px, `default=2`
        .gap(1)
        // (_optional_) set filter brush rounding
        .round(dc.round.floor)
        // .alwaysUseRounding(true)
        .x(d3.scale.linear().domain([-25, 25]))
        .renderHorizontalGridLines(true)
        // Customize the filter displayed in the control span
        .filterPrinter(function (filters) {
            var filter = filters[0], s = '';
            s += numberFormat(filter[0]) + '% -> ' + numberFormat(filter[1]) + '%';
            return s;
        });

    // Customize axes
    fluctuationChart.xAxis().tickFormat(
        function (v) { return v + '%'; });
    fluctuationChart.yAxis().ticks(5);

    //#### Stacked Area Chart

    //Specify an area chart by using a line chart with `.renderArea(true)`.
    // <br>API: [Stack Mixin](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#stack-mixin),
    // [Line Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#line-chart)
    moveChart /* dc.lineChart('#monthly-move-chart', 'chartGroup') */
        .renderArea(true)
        .width(990)
        .height(200)
        .transitionDuration(1000)
        .margins({top: 30, right: 50, bottom: 25, left: 40})
        .dimension(moveMonths)
        .ordinalColors(['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'])
        
        .mouseZoomable(true)
    // Specify a "range chart" to link its brush extent with the zoom of the current "focus chart".
        .rangeChart(volumeChart)
        .x(d3.time.scale().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
        .round(d3.time.month.round)
        .xUnits(d3.time.months)
        .elasticY(true)
        .renderHorizontalGridLines(true)
    //##### Legend

        // Position the legend relative to the chart origin and specify items' height and separation.
        .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
        .brushOn(false)
        // Add the base layer of the stack with group. The second parameter specifies a series name for use in the
        // legend.
        // The `.valueAccessor` will be used for the base layer
        .group(indexAvgByMonthGroup, 'Monthly Index Average')
        .valueAccessor(function (d) {
            return d.value.avg;
        })
        // Stack additional layers with `.stack`. The first paramenter is a new group.
        // The second parameter is the series name. The third is a value accessor.
        .stack(monthlyMoveGroup, 'Monthly Index Move', function (d) {
            return d.value;
        })
        // Title can be called by any stack layer.
        .title(function (d) {
            var value = d.value.avg ? d.value.avg : d.value;
            if (isNaN(value)) {
                value = 0;
            }
            return dateFormat(d.key) + '\n' + numberFormat(value);
        });

    //#### Range Chart

    // Since this bar chart is specified as "range chart" for the area chart, its brush extent
    // will always match the zoom of the area chart.
    volumeChart.width(990) /* dc.barChart('#monthly-volume-chart', 'chartGroup'); */
        .height(40)
        .margins({top: 0, right: 50, bottom: 20, left: 40})
        .dimension(moveMonths)
        .group(volumeByMonthGroup)
        .centerBar(true)
        .gap(1)
        .ordinalColors(['#3b9de4', '#ff73a2', '#ff9d29', '#ca4977', '#6b417f'])
        .x(d3.time.scale().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
        .round(d3.time.month.round)
        .alwaysUseRounding(true)
        .colors(colorbrewer.RdYlBu[9])
        .xUnits(d3.time.months);


    //#### Data Table

    // Create a data table widget and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Data Table Widget](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#data-table-widget)
    //
    // You can statically define the headers like in
    //
    // ```html
    //    <!-- anchor div for data table -->
    //    <div id='data-table'>
    //       <!-- create a custom header -->
    //       <div class='header'>
    //           <span>Date</span>
    //           <span>Open</span>
    //           <span>Close</span>
    //           <span>Change</span>
    //           <span>Volume</span>
    //       </div>
    //       <!-- data rows will filled in here -->
    //    </div>
    // ```
    // or do it programmatically using `.columns()`.


    /*
    //#### Geo Choropleth Chart

    //Create a choropleth chart and use the given css selector as anchor. You can also specify
    //an optional chart group for this chart to be scoped within. When a chart belongs
    //to a specific group then any interaction with such chart will only trigger redraw
    //on other charts within the same chart group.
    // <br>API: [Geo Chroropleth Chart][choro]
    // [choro]: https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#geo-choropleth-chart
    dc.geoChoroplethChart('#us-chart')
         // (_optional_) define chart width, default 200
        .width(990)
        // (optional) define chart height, default 200
        .height(500)
        // (optional) define chart transition duration, default 1000
        .transitionDuration(1000)
        // set crossfilter dimension, dimension key should match the name retrieved in geojson layer
        .dimension(states)
        // set crossfilter group
        .group(stateRaisedSum)
        // (_optional_) define color function or array for bubbles
        .colors(['#ccc', '#E2F2FF','#C4E4FF','#9ED2FF','#81C5FF','#6BBAFF','#51AEFF','#36A2FF','#1E96FF','#0089FF',
            '#0061B5'])
        // (_optional_) define color domain to match your data domain if you want to bind data or color
        .colorDomain([-5, 200])
        // (_optional_) define color value accessor
        .colorAccessor(function(d, i){return d.value;})
        // Project the given geojson. You can call this function multiple times with different geojson feed to generate
        // multiple layers of geo paths.
        //
        // * 1st param - geojson data
        // * 2nd param - name of the layer which will be used to generate css class
        // * 3rd param - (_optional_) a function used to generate key for geo path, it should match the dimension key
        // in order for the coloring to work properly
        .overlayGeoJson(statesJson.features, 'state', function(d) {
            return d.properties.name;
        })
        // (_optional_) closure to generate title for path, `default = d.key + ': ' + d.value`
        .title(function(d) {
            return 'State: ' + d.key + '\nTotal Amount Raised: ' + numberFormat(d.value ? d.value : 0) + 'M';
        });

        //#### Bubble Overlay Chart

        // Create a overlay bubble chart and use the given css selector as anchor. You can also specify
        // an optional chart group for this chart to be scoped within. When a chart belongs
        // to a specific group then any interaction with the chart will only trigger redraw
        // on charts within the same chart group.
        // <br>API: [Bubble Overlay Chart][bubble]
        // [bubble]: https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#bubble-overlay-chart
        dc.bubbleOverlay('#bubble-overlay', 'chartGroup')
            // The bubble overlay chart does not generate its own svg element but rather reuses an existing
            // svg to generate its overlay layer
            .svg(d3.select('#bubble-overlay svg'))
            // (_optional_) define chart width, `default = 200`
            .width(990)
            // (_optional_) define chart height, `default = 200`
            .height(500)
            // (_optional_) define chart transition duration, `default = 1000`
            .transitionDuration(1000)
            // Set crossfilter dimension, dimension key should match the name retrieved in geo json layer
            .dimension(states)
            // Set crossfilter group
            .group(stateRaisedSum)
            // Closure used to retrieve x value from multi-value group
            .keyAccessor(function(p) {return p.value.absGain;})
            // Closure used to retrieve y value from multi-value group
            .valueAccessor(function(p) {return p.value.percentageGain;})
            // (_optional_) define color function or array for bubbles
            .colors(['#ccc', '#E2F2FF','#C4E4FF','#9ED2FF','#81C5FF','#6BBAFF','#51AEFF','#36A2FF','#1E96FF','#0089FF',
                '#0061B5'])
            // (_optional_) define color domain to match your data domain if you want to bind data or color
            .colorDomain([-5, 200])
            // (_optional_) define color value accessor
            .colorAccessor(function(d, i){return d.value;})
            // Closure used to retrieve radius value from multi-value group
            .radiusValueAccessor(function(p) {return p.value.fluctuationPercentage;})
            // set radius scale
            .r(d3.scale.linear().domain([0, 3]))
            // (_optional_) whether chart should render labels, `default = true`
            .renderLabel(true)
            // (_optional_) closure to generate label per bubble, `default = group.key`
            .label(function(p) {return p.key.getFullYear();})
            // (_optional_) whether chart should render titles, `default = false`
            .renderTitle(true)
            // (_optional_) closure to generate title per bubble, `default = d.key + ': ' + d.value`
            .title(function(d) {
                return 'Title: ' + d.key;
            })
            // add data point to its layer dimension key that matches point name: it will be used to
            // generate a bubble. Multiple data points can be added to the bubble overlay to generate
            // multiple bubbles.
            .point('California', 100, 120)
            .point('Colorado', 300, 120)
            // (_optional_) setting debug flag to true will generate a transparent layer on top of
            // bubble overlay which can be used to obtain relative `x`,`y` coordinate for specific
            // data point, `default = false`
            .debug(true);
    */

    //#### Rendering

    //simply call `.renderAll()` to render all charts on the page
    dc.renderAll();
    /*
    // Or you can render charts belonging to a specific chart group
    dc.renderAll('group');
    // Once rendered you can call `.redrawAll()` to update charts incrementally when the data
    // changes, without re-rendering everything
    dc.redrawAll();
    // Or you can choose to redraw only those charts associated with a specific chart group
    dc.redrawAll('group');
    */

});

//#### Versions

//Determine the current version of dc with `dc.version`
d3.selectAll('#version').text(dc.version);

// Determine latest stable version in the repo via Github API
d3.json('https://api.github.com/repos/dc-js/dc.js/releases/latest', function (error, latestRelease) {
    /*jshint camelcase: false */
    d3.selectAll('#latest').text(latestRelease.tag_name); /* jscs:disable */
});
