counts1 = c(7, 4, 2)
counts2 = c(33,19,16)
props1 = counts1/sum(counts1)
props2 = counts2/sum(counts2)
colors = c(rgb(1,0,0,0.35), rgb(0,0,1,0.35), rgb(0,1,0,0.35))

upper1 = props1 + 1.96*sqrt(props1*(1-props1)/8)
lower1 = props1 - 1.96*sqrt(props1*(1-props1)/8)
barplot(props1, space=0, border="white",col = colors, ylim=c(0,1), ylab="Single-source coverage")
arrows(c(0.5, 1.5, 2.5), lower1, c(0.5, 1.5, 2.5), upper1, length=0)
arrows(c(0.5, 1.5, 2.5)-0.25, pmax(0, lower1), c(0.5, 1.5, 2.5)+0.25, pmax(0,lower1), length=0)
arrows(c(0.5, 1.5, 2.5)-0.25, upper1, c(0.5, 1.5, 2.5)+0.25, upper1, length=0)



upper2 = props2 + 1.96*sqrt(props2*(1-props2)/sum(counts2))
lower2 = props2 - 1.96*sqrt(props2*(1-props2)/sum(counts2))
barplot(props2, space=0, border="white",col = colors, ylim=c(0,1), ylab="Single-source coverage")
arrows(c(0.5, 1.5, 2.5), lower2, c(0.5, 1.5, 2.5), upper2, length=0)
arrows(c(0.5, 1.5, 2.5)-0.25, pmax(0, lower2), c(0.5, 1.5, 2.5)+0.25, pmax(0,lower2), length=0)
arrows(c(0.5, 1.5, 2.5)-0.25, upper2, c(0.5, 1.5, 2.5)+0.25, upper2, length=0)

?par


fonts()
font_import(".")
