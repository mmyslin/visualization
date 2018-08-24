    function makeCluster(host, clusterSize, marginV, radiusClusterGridV, marginClusterGridV,xTransform,yTransform){
        var nrow = Math.trunc(Math.sqrt(clusterSize))
var mainCluster = Array(nrow);
var leftoverSize = clusterSize - nrow*nrow;
var addToBottom = Array(leftoverSize).slice(0, nrow);
var addToSide = Array(leftoverSize-addToBottom.length);





    host
     .append("g")
    .selectAll("circle")
    .data(mainCluster)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(" + [xScale(xTransform),yScale(yTransform)+yScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV)*i)] + ")" 
    })
    .selectAll("circle")
    .data(mainCluster)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [xScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV)*i),] + ")" 
    })
    .attr("r", radiusClusterGrid)
    .attr("cx", radiusClusterGrid)
    .attr("cy", radiusClusterGrid);
// Append leftovers to bottom


    host
         .append("g")
    .selectAll("circle")
    .data(addToBottom)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [xScale(xTransform)+xScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV)*i),yScale(yTransform)+yScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV))*nrow] + ")" 
    })
    .attr("r", radiusClusterGrid)
    .attr("cx", radiusClusterGrid)
    .attr("cy", radiusClusterGrid);

 // Append leftovers to side

    host
         .append("g")
    .selectAll("circle")
    .data(addToSide)
    .enter()
    .append("circle")
    .attr("transform", function (d, i) {
      return "translate(" + [xScale(xTransform)+xScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV))*nrow, yScale(yTransform)+yScaleCluster(marginV+(2*radiusClusterGridV+marginClusterGridV)*i)] + ")" 
    })
    .attr("r", radiusClusterGrid)
    .attr("cx", radiusClusterGrid)
    .attr("cy", radiusClusterGrid);

    };

