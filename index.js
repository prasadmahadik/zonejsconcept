
function logTime(){
  var time = new Date();
  console.log( time.getMonth() + '/' + time.getDate() + '/' + +time.getFullYear() + ' ' + time.getHours() +':'+ time.getMinutes()+ ':'+ time.getSeconds() +':'+ time.getMilliseconds());
}


function start(){
  logTime()
}

function a(){ console.log('I am a');}
function b(){ console.log('I am b');}
function c(){ console.log('I am c');}
function d(){ console.log('I am d');}

function end(){
  logTime()
}




start();
a();
b();
setTimeout(c,0);
setTimeout(d,0);
end();