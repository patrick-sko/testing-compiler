self.window || (self.window = self, self.window.top = self);
var __jscov = window.top.__jscov || (window.top.__jscov = {
                fileNames: [],
                branchPresent: [],
                branchesInLine: [],
                branchesTaken: []
              }),
    JSCompiler_lcov_branch_data_test_source_js = [];
__jscov.branchesTaken.push(JSCompiler_lcov_branch_data_test_source_js);
__jscov.branchPresent.push('08');
var JSCompiler_lcov_branchesInLine = [2];
__jscov.branchesInLine.push(JSCompiler_lcov_branchesInLine);
__jscov.fileNames.push('test-source.js');
function foo(a) {
  a ? (JSCompiler_lcov_branch_data_test_source_js[0] = !0, a = 25) :
      (JSCompiler_lcov_branch_data_test_source_js[1] = !0, a = 0);
  console.log('Final result is: ', a)
}
var global = 9;
foo(!1);
