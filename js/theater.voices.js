var theater = new TheaterJS();

                   
theater
 .describe("Line1", .8, "#theater1")
 .describe("Line2", .8, "#theater2");


theater
 .write("Line2:")
 .write("Line1:Imagine a web without bottlenecks... ")
 .write(500)
 .write("Line1:Where content instead of being distributed from servers to clients ")
 .write(250)
 .write("Line2:is shared directly between users. Without mediations.")
 .write(1000)
 .write("Line2:")
 .write("Line1:Today this is possible,")
 .write(250)
 .write("Line2:The web just got bigger.")
 .write(5000)
 .write(function () { theater.play(true); });



