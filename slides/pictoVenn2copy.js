
// set svg params

var svgWidth = 800, svgHeight = 500;

// set venn diagram params

var xcenters = [-20,0,20];
var ycenters = [-30,10,-30];
var centers = [xcenters, ycenters];
var colors = ["red","green","blue"];
var radius = 160;
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



var venndiagram = d3.select("#venndiagram2c")
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



function labelCircle(label, x, y){
    venndiagram
.append("text")
.text(label)
.attr("y", y)
.attr("x", x)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 600)
.attr("font-size", 40);
};

labelCircle("Opinions", 0, 30);
labelCircle("Dockets", 650, 30);
labelCircle("Reports", 325, 475);

venndiagram
.append("text")
.text("\u25CF Expert mention")
.attr("y", 450)
.attr("x", 610)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 300)
.attr("font-size", 25);

 
makeCluster(venndiagram, 3, margin, radiusClusterGrid, marginClusterGrid, -45, -70);
makeCluster(venndiagram, 2, margin, radiusClusterGrid, marginClusterGrid, -5, -75);
makeCluster(venndiagram, 1, margin, radiusClusterGrid, marginClusterGrid, 35, -70);

makeCluster(venndiagram, 1, margin, radiusClusterGrid, marginClusterGrid, -30, -10);
makeCluster(venndiagram, 1, margin, radiusClusterGrid, marginClusterGrid, -5, -30);
makeCluster(venndiagram, 0, margin, radiusClusterGrid, marginClusterGrid, 25, -10);

makeCluster(venndiagram, 0, margin, radiusClusterGrid, marginClusterGrid, -5, 45);


