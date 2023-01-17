
function first() {
  for( var i = 1; i < 21; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}

function second() {
  for( var i = 0; i < 101; i++) {
    if(i % 3 == 0) {
      console.log(i);
    }
  }
}

function third() {
  const values = [4, 2.5, 1, -0.5, -2, -3.5];
  for( var i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
}

function fourth() {
  let result = 0;
  for( var i = 1; i < 101; i++) {
    result = result + i;
  }
  console.log(result);
}

function fifth() {
  let result = 1;
  for( var i = 1; i < 13; i++) {
    result = result * i;
  }
  console.log(result);
}
first();
second();
third();
fourth();
fifth();