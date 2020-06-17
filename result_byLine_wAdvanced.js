self.window || (self.window = self, self.window.top = self);
var a = window.top.__jscov ||
    (window.top
         .__jscov = {fileNames: [], instrumentedLines: [], executedLines: []}),
    b = [];
a.executedLines.push(b);
a.instrumentedLines.push('5a02');
a.fileNames.push('test-source.js');
b[1] = !0;
var c = 20;
b[3] = !0;
b[6] = !0;
c = 0;
b[9] = !0;
console.log('Final result is: ', c);
