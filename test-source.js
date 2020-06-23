function foo(b) {
  let local_num = 20;

  if (b) {
    local_num = 20 + 5;
  } else if(local_num == 20) {
    local_num = 0;
    if(local_num == 20){
      local_num *= 5;
    }
  } 
  console.log('Final result is: ', local_num);
}

var global = 9;

foo(false);



