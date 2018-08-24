
// set svg params

var svgWidth = 500, svgHeight = 500;

// set venn diagram params

var xcenters = [-25,0,25];
var ycenters = [-25,25,-25];
var centers = [xcenters, ycenters];
var colors = ["red","green","blue"];
var radius = 175;
var margin =10;

// set clustergrid params

var size = 190

var radiusClusterGrid = 4
var marginClusterGrid = radius*2

var yScale = d3.scaleLinear()
.domain([-100,100])
.range([0, svgHeight]);

var xScale = d3.scaleLinear()
.domain([-100,100])
.range([0, svgWidth]);

var yScaleCluster = d3.scaleLinear()
.domain([0,100])
.range([0, 4]);

var xScaleCluster = d3.scaleLinear()
.domain([0,100])
.range([0, 4]);



var venndiagram = d3.select("#venndiagram")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// make venn diagram

venndiagram
    .append("g")

    .selectAll("circle")
    .data(xcenters)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [xScale(xcenters[i]),yScale(ycenters[i])] + ")" 
    })
    .attr("r", radius)
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("fill", function(d,i){return colors[i]})
    .attr("fill-opacity", 0.2);

// add a grid

 
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -80, -80);

makeCluster(venndiagram, 120, margin, radiusClusterGrid, marginClusterGrid, 40, -80);

makeCluster(venndiagram, 60, margin, radiusClusterGrid, marginClusterGrid, 10, 30);


