
var size = 15
var nrow = Math.trunc(Math.sqrt(size))
var mainCluster = Array(nrow)
var leftoverSize = size - nrow*nrow
var addToBottom = Array(leftoverSize).slice(0, nrow)
var addToSide = Array(leftoverSize-addToBottom.length)

var svgWidth = 500, svgHeight = 500
var radius = 4
var margin = radius*2

var grid = d3.select("#grid")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
        .selectAll("g")
    .data(mainCluster)
    .enter();
    
// Build main cluster

    grid
     .append("g")
    .attr("transform", function (d, i) {
      return "translate(" + [0,(2*radius+margin)*i] + ")" 
    })
    .selectAll("circle")
    .data(mainCluster)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [margin+(2*radius+margin)*i,0] + ")" 
    })
    .attr("r", radius)
    .attr("cx", radius)
    .attr("cy", radius);

// Append leftovers to bottom

    grid
         .append("g")
    .selectAll("circle")
    .data(addToBottom)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [margin+(2*radius+margin)*i,(2*radius+margin)*nrow] + ")" 
    })
    .attr("r", radius)
    .attr("cx", radius)
    .attr("fill", "blue")
    .attr("cy", radius);

    
 // Append leftovers to side

    grid
         .append("g")
    .selectAll("circle")
    .data(addToSide)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [margin+(2*radius+margin)*nrow, (2*radius+margin)*i] + ")" 
    })
    .attr("r", radius)
    .attr("cx", radius)
    .attr("fill", "red")
    .attr("cy", radius);

    
