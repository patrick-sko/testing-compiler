if (!self.window) {
  self.window = self;
  self.window.top = self
}
var __jscov = window.top['__jscov'] ||
    (window.top['__jscov'] =
         {'fileNames': [], 'instrumentedLines': [], 'executedLines': []});
var JSCompiler_lcov_data_test_source_js = [];
__jscov['executedLines'].push(JSCompiler_lcov_data_test_source_js);
__jscov['instrumentedLines'].push('5b52');
__jscov['fileNames'].push('test-source.js');
function foo(b) {
  JSCompiler_lcov_data_test_source_js[0] = true;
  JSCompiler_lcov_data_test_source_js[1] = true;
  let local_num = 20;
  JSCompiler_lcov_data_test_source_js[3] = true;
  if (b) {
    JSCompiler_lcov_data_test_source_js[4] = true;
    local_num = 20 + 5
  } else {
    JSCompiler_lcov_data_test_source_js[6] = true;
    local_num = 0
  }
  JSCompiler_lcov_data_test_source_js[9] = true;
  console.log('Final result is: ', local_num)
}
JSCompiler_lcov_data_test_source_js[12] = true;
var global = 9;
JSCompiler_lcov_data_test_source_js[14] = true;
foo(false);
