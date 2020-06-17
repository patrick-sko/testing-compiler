function foo(b) {
  let local_num = 20;

  if (b) {
    local_num = 20 + 5;
  } else {
	  local_num = 0;
  }

  console.log('Final result is: ', local_num);
}

var global = 9;

foo(false);



