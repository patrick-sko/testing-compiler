self.window || (self.window = self, self.window.top = self);
var __jscov = window.top.__jscov ||
    (window.top
         .__jscov = {fileNames: [], instrumentedLines: [], executedLines: []}),
    JSCompiler_lcov_data_test_source_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_test_source_js);
__jscov.instrumentedLines.push('5a02');
__jscov.fileNames.push('test-source.js');
function foo(a) {
  JSCompiler_lcov_data_test_source_js[1] = !0;
  JSCompiler_lcov_data_test_source_js[3] = !0;
  a ? (JSCompiler_lcov_data_test_source_js[4] = !0, a = 25) :
      (JSCompiler_lcov_data_test_source_js[6] = !0, a = 0);
  JSCompiler_lcov_data_test_source_js[9] = !0;
  console.log('Final result is: ', a)
}
var global = 9;
foo(!1);
