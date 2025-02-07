// 変数初期化
let miSec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = null;

//ボタン初期状態(stop/reset無効)
$('#Stop').prop('disabled',true);
$('#Reset').prop('disabled',true);

// ストップウォッチ表示更新関数
function timeDisplay(){
  $("#milliSeconds").text(miSec);
  $("#seconds").text(sec);
  $("#minutes").text(min);
  $("#hours").text(hour);
}

// 単位整理関数
function timeOrganize() {
  if(miSec == 10){
    miSec = 0;
    sec++;
  }
  if(sec == 60){
    sec = 0;
    min++;
  }
  if(min == 60){
    min = 0;
    hour++;
  }
  if(hour == 99){
    miSec, sec, min, hour = 0;
  }

  // 単位を整理後、経過時間を出力
  timeDisplay();

  miSec++;
}

// Startボタン押下後処理関数
function timeStart() {
  // タイマースタート
  timer = setInterval(timeOrganize, 100);
}

// Stopボタン押下後処理関数
function timeStop(){
  // タイマー停止
  clearInterval(timer);
}

// Resetボタン押下後処理関数
function timeReset(){
  // 変数リセットし、表示を初期状態に
   miSec = 0;
   sec = 0;
   min = 0;
   hour = 0;

   timeDisplay();
}

$(document).ready(function(){
  $("#Start").click(function() {
    // ボタン状態変更(Start無効/Stop有効/Reset無効)
    $('#Start').prop('disabled',true);
    $('#Stop').prop('disabled',false);
    $('#Reset').prop('disabled',true);
  });

  $("#Stop").click(function() {
    // ボタン状態変更(Stop/無効 Reset有効)
    $('#Stop').prop('disabled',true);
    $('#Reset').prop('disabled',false);
  });

  $("#Reset").click(function() {
    //　ボタンを初期状態に更新(Start有効 Stop/Reset無効)
    $('#Start').prop('disabled',false);
    $('#Stop').prop('disabled',true);
    $('#Reset').prop('disabled',true);
  });
});
