var counts = [500,1074,1238,1225,1359,1563,1678,1764,1838,2082,2511,2470,2796,3965,4013,4000,4490,6654,8713,11199,9772,9048,8061,7436,6990];
var countsWithSummary = [10,6,4,6,12,10,33,52,41,353,2006,2260,2343,3530,3084,2963,3674,4936,2046,1,203,103];
var termsQ = ["qualified", "unqualified", "lacks", "generalized", "engineer", "experiment", "qualifications", "expertise", "qualitative", "quantitative"];
var titleX = 120
var titleSize = 36
var myBlue = "#0b82ba"

var svgWidth = 700, svgHeight = 450, barPadding = 6; yAxisWidth=80; xAxisHeight=60; plotHeight = svgHeight - xAxisHeight
var barWidth = ((svgWidth-yAxisWidth)/counts.length);

var svg1 = d3.select('#histogramFilled')
.attr("width", svgWidth)
.attr("height", svgHeight);
 
var yScale = d3.scaleLinear()
.domain([0,Math.max(...counts)])
.range([0,svgHeight-xAxisHeight]);

var yScaleAxis = d3.scaleLinear()
.domain([0,Math.max(...counts)])
.range([svgHeight-10-xAxisHeight,10]);


var xScaleAxis = d3.scaleLinear()
.domain([1993,2017])
.range([0,svgWidth]);

var xScale = d3.scaleLinear()
.domain([0,10])
.range([0, svgWidth]);

var x_axis = d3.axisBottom().scale(xScaleAxis).tickFormat(d3.format("d"));
var y_axis = d3.axisLeft().scale(yScaleAxis).tickFormat(d3.format("d"));

svg1
.append("g")
.selectAll("rect")
.data(counts)
.enter()
.append("rect")
.attr("height", function(d) {
	return yScale(d);
})
.attr("width", barWidth-barPadding)
.attr("transform", function(d, i) {
	var translate = [yAxisWidth + barPadding+ barWidth * i, svgHeight - xAxisHeight- yScale(d)];
	return "translate("+ translate + ")";
})
.attr("fill", "lightgrey");

svg1
.append("g")
.selectAll("rect")
.data(countsWithSummary)
.enter()
.append("rect")
.attr("height", function(d) {
	return yScale(d);
})
.attr("width", barWidth-barPadding)
.attr("transform", function(d, i) {
	var translate = [yAxisWidth + barPadding+ barWidth * i, svgHeight - xAxisHeight- yScale(d)];
	return "translate("+ translate + ")";
})
.attr("fill", myBlue);



svg1.append("g")
      .style("font", "18px TitilliumText25L")
      .style("font-weight", "200")
.attr("transform", "translate("+yAxisWidth+",0)")
.call(y_axis);


svg1.append("g")
      .style("font", "18px TitilliumText25L")
      .style("font-weight", "200")
.attr("transform", "translate("+ yAxisWidth +","+ plotHeight +")")
.call(x_axis);

svg1.append("text")             
      .attr("transform",
            "translate(" + (yAxisWidth + svgWidth/2) + " ," + 
                           (plotHeight + 50) + ")")
      .style("text-anchor", "middle")
      .style("font", "18px TitilliumText25L")
            .style("font-weight", "600")
      .text("Year");

      svg1.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -(plotHeight/2))
      .attr("y",0)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Reports")
            .style("font", "18px TitilliumText25L")
            .style("font-weight", "600");    


      svg1.append("text")
      .attr("x", 150)
      .attr("y",plotHeight/2)
      .text("with Summary field")
            .style("font", "18px TitilliumText25L")
            .style("font-weight", "600")   
            .style("fill", myBlue);  

svg1.append("line")          // attach a line
    .style("stroke", myBlue)  // colour the line
    .attr("x1", yAxisWidth + xScaleAxis(1999))     // x position of the first end of the line
    .attr("y1", plotHeight/2+10)      // y position of the first end of the line
    .attr("x2", yAxisWidth + xScaleAxis(2004))     // x position of the second end of the line
    .attr("y2", xAxisHeight + yScaleAxis(5000));



