


var xcenters = [33,66,50];
var ycenters = [33,33,50];
var colors = ["red","green","blue"];
var radius = 30;

var svgWidth = 700, svgHeight = 700;


var yScale = d3.scaleLinear()
.domain([0,100])
.range([0, svgHeight]);

var xScale = d3.scaleLinear()
.domain([0,100])
.range([0, svgWidth]);


var x_axis = d3.axisBottom()//.scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

var venndiagrama = d3.select("#venndiagram")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .selectAll("circle")
    .data(xcenters)
    .enter()
    .append("circle")
    .attr("r", xScale(radius))
    .attr("cx", function(d){return xScale(d)})
    .attr("cy", function(d,i){return yScale(ycenters[i])})
    .attr("fill-opacity", 0.2)
    .attr("fill", function(d,i){return colors[i]});

     venndiagrama.append("g")
       .call(x_axis);
    
