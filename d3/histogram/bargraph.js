var estimatesQ = [1.76, 1.23,0.9,0.576,0.57,0.46,0.33,0.19,0.122,0.12];
var estimatesM = [0.72,0.60,0.6,0.597,0.575,0.515,0.512,0.48,0.47,0.42];
var estimatesR = [4.58,3.26,2.73,2.05,1.79,1.21,1.11, 1.1,0.9,0.88];
var estimatesP = [3.5,2.2,1.7,1.65,1.48,1.38,0.72,0.69,0.66,0.54];
var termsQ = ["qualified", "unqualified", "lacks", "generalized", "engineer", "experiment", "qualifications", "expertise", "qualitative", "quantitative"];
var termsM = ["experiment", "undetectable", "detectable", "surgeon", "generalized", "predicated", "interpreting", "statistic", "conclusory", "unsound"];
var termsR = ["fit", "irrelevant", "principle", "assist", "speculates", "unqualified", "disclosure", "factor", "conducted", "jury"];
var termsP = ["untimely", "produce", "distinguished", "error", "procedural", "disclosed", "information", "time", "order", "cause"];
var colorQ = "#0b82ba"
var colorM = "#e26b82"
var colorR = "#64c3b8"
var colorP = "#bfc1a8"
var titleX = 120
var titleSize = 36

var svgWidth = 500, svgHeight = 500, barPadding = 6;
var barHeight = ((svgWidth-200)/estimatesQ.length);

var svg1 = d3.select('#svg1')
.attr("width", svgWidth)
.attr("height", svgHeight);
 
var yScale = d3.scaleLinear()
.domain([0,6])
.range([0, svgHeight]);

var xScale = d3.scaleLinear()
.domain([0,20])
.range([0, svgWidth]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

var barChart = svg1.selectAll("rect")
.data(estimatesQ)
.enter()
.append("rect")
.attr("width", function(d) {
	return yScale(d*2);
})
.attr("height", barHeight-barPadding)
.attr("transform", function(d, i) {
	var translate = [200, 150+ barHeight * i];
	return "translate("+ translate + ")";
})
.attr("fill", colorQ);



var text = svg1.selectAll("text")
.data(termsQ)
.enter()
.append("text")
.text(function(d) {
	return d;
})
//"something")
.attr("y", function(d, i) {
	return 150+barHeight*i+barHeight/2+7;
})
.attr("x",190)
.attr("text-anchor","end")
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 200)
.attr("font-size", 18);

var svg2 = d3.select("#svg2");
var barChart2 = svg2.selectAll("rect")
.data(estimatesM)
.enter()
.append("rect")
.attr("width", function(d) {
	return yScale(d*3);
})
.attr("height", barHeight-barPadding)
.attr("transform", function(d, i) {
	var translate = [200, 150+barHeight * i];
	return "translate("+ translate + ")";
})
.attr("fill", colorM);
var text2 = svg2.selectAll("text")
	.data(termsM)
	.enter()
	.append("text")
	.text(function(d) {
	return d;
	})
	.attr("y", function(d, i) {
	return 150+barHeight*i+barHeight/2+7;
	})
.attr("x",190)
.attr("text-anchor","end")
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 200)
.attr("font-size", 18);


var svg3 = d3.select("#svg3");
var barChart3 = svg3.selectAll("rect")
.data(estimatesR)
.enter()
.append("rect")
.attr("width", function(d) {
	return yScale(d);
})
.attr("height", barHeight-barPadding)
.attr("transform", function(d, i) {
	var translate = [200, 150+barHeight * i];
	return "translate("+ translate + ")";
})
.attr("fill", colorR);
var text3 = svg3.selectAll("text")
	.data(termsR)
	.enter()
	.append("text")
	.text(function(d) {
	return d;
	})
	.attr("y", function(d, i) {
	return 150+barHeight*i+barHeight/2+7;
	})
.attr("x",190)
.attr("text-anchor","end")
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 200)
.attr("font-size", 18);


var svg4 = d3.select("#svg4");
var barChart4 = svg4.selectAll("rect")
.data(estimatesP)
.enter()
.append("rect")
.attr("width", function(d) {
	return yScale(d);
})
.attr("height", barHeight-barPadding)
.attr("transform", function(d, i) {
	var translate = [200, 150+barHeight * i];
	return "translate("+ translate + ")";
})
.attr("fill", colorP);
var text4 = svg4.selectAll("text")
	.data(termsP)
	.enter()
	.append("text")
	.text(function(d) {
	return d;
	})
	.attr("y", function(d, i) {
	return 150+barHeight*i+barHeight/2+7;
	})
.attr("x",190)
.attr("text-anchor","end")
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 200)
.attr("font-size", 18);

var title1 = svg1
.append("text")
.text("Qualifications")
.attr("y", 60)
.attr("x", titleX)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 600)
.attr("font-size", titleSize);
;


var title2 = svg2
.append("text")
.text("Methodology")
.attr("y", 60)
.attr("x", titleX)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 600)
.attr("font-size", titleSize);
;


var title3 = svg3
.append("text")
.text("Relevance")
.attr("y", 60)
.attr("x", titleX)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 600)
.attr("font-size", titleSize);
;


var title4 = svg4
.append("text")
.text("Procedural")
.attr("y", 60)
.attr("x", titleX)
.attr("font-family", "TitilliumText25L")
.attr("font-weight", 600)
.attr("font-size", titleSize);
;

