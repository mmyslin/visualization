
var colors = [
    [ 39, 55, 5, 34 ],
    [ 30, 2, 27 , 3],
    [ 55, 5, 61, 76 ],
    [ 55, 47, 94, 11 ],
    [ 50, 37, 97, 11 ],
    [ 55, 0, 0, 14]
];

var rows = colors.length;
var cols = colors[0].length;
var margin = 1;
var cellWidth = 50;
var cellHeight = 30;


var grid = d3.select("#grid")
    .attr("width", cols * (cellWidth + margin) )
    .attr("height", rows * (cellHeight + margin) )
    .selectAll("g")
    .data(colors)
    .enter();
    
    grid
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(" + [0,i*(cellHeight+margin)] + ")" 
    })
    .selectAll("rect")
    .data(function(d) {return d;})
    .enter().append("rect")
    .attr("transform", function (d, c) {
      return "translate(" + [c*(cellWidth+margin),0] + ")" 
    })
    .attr("height", cellHeight)
    .attr("width", cellWidth)
    .attr("fill", "#276392")
    .attr("fill-opacity", function (d,i) {
      return (d+1)/100;
    })
    ;

   grid
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(" + [0,cellHeight/2 +cellHeight/4 + i*(cellHeight+margin)] + ")" 
    })
    .selectAll("text")
    .data(function(d) {return d;})
    .enter().append("text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "central")
    .attr("font-family", "TitilliumText25L")
    .attr("font-weight", 400)
    .attr("font-size", cellHeight/2)
    .attr("transform", function (d, c) {
      return "translate(" + [cellWidth/2 + c*(cellWidth+margin),0] + ")" 
    })
.text(function(d) {
  return d;
})
    ;




