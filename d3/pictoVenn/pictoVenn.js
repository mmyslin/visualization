
// set svg params

var svgWidth = 800, svgHeight = 600;

// set venn diagram params

var xcenters = [-15,0,15];
var ycenters = [-40,0,-40];
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
labelCircle("Reports", 325, 525);

venndiagram
.append("text")
.text("\u25CF Expert mention")
.attr("y", 500)
.attr("x", 610)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 300)
.attr("font-size", 25);


 
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -45, -70);
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -5, -80);
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, 35, -70);

makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -35, -15);
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -5, -30);
makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, 25, -15);

makeCluster(venndiagram, 12, margin, radiusClusterGrid, marginClusterGrid, -5, 30);


