// var InstructPractice = '<b>空間工作記憶</b><br><img class="gif" src="instruct_gif/Spatial_Working_Memory.gif"/><div><span class="InstructNext">進入練習階段<br>請盡量快速且正確地作答</span></div>'

var InstructPractice = "<b>第一個階段</b><br><div>"

// var InstructPracticeAgain = '<b>空間工作記憶</b><br><img class="gif" src="instruct_gif/Spatial_Working_Memory.gif"/><div><span class="InstructNext">練習正確率：<span id = "AgainACC"></span><br>請再練習一次<br>請盡量快速且正確地作答</span></div>'

// var InstructPracticeAgain = "<b>練習一次</b>"
// var InstructFormal1 = '<b>空間工作記憶</b><br><img class="gif" src="instruct_gif/Spatial_Working_Memory.gif"/><div><span class="InstructNext">進入正式階段<br>請盡量快速且正確地作答</span></div>'
var InstructFormal1 = "<b>第二個階段</b><br><div><img class='instructImg' src='img/1.png'></div>"
var InstructFormal2 = "<b>第三個階段</b><br><div><img class='instructImg' src='img/2.png'></div>"
var InstructFormal3 = "<b>第四個階段</b><br><div><img class='instructImg' src='img/3.png'></div>"
// var InstructFormal = "<b>正式階段</b>"
// var InstructFormal2 = "<b>正式階段</b><br>請稍作休息。<br><br>接下來作業難度將會稍微提升，<br>請依照前部分的作答方式繼續進行。<br><br>請記下黑色方塊出現的順序位置，並依序作答。<br>請盡量正確作答。<br><span class='InstructNext'>若你準備好了，請按「繼續」開始正式階段</span>"
// var InstructEnd = "<b>作業結果</b><br>記憶廣度：<span id = 'Stage'></span>；<br>平均完成時間：<span id='finishRT'></span> ms。"
var InstructEnd = "<b>作業結果</b>"
// var InstructRest = "<b>正式階段</b>"

//Block0
var colorContent= [
"red","blue","red","green","red","blue","green","blue","red","green",
"blue","green","red","green","red","green","blue","red","blue","green",
"red","green","blue","red","green","red","green","blue","green","red",
"blue","red","green","blue","red","green","blue","red","blue","green",
"red","blue","red","green","blue","green","blue","red","blue","green"
]

var IncolorContent = [
"green", "red", "blue", "green", "blue",
"red", "blue", "green", "blue", "green"
]

//Block1
var IntextOnlycontent = [
"紅", "藍", "綠", "紅", "藍",
"綠", "藍", "綠", "紅", "綠"
]

var textOnlycontent = [
"綠","紅","藍","綠","藍","紅","藍","綠","藍","綠",
"紅","綠","藍","綠","藍","綠","紅","藍","紅","綠",
"紅","綠","藍","綠","紅","藍","綠","紅","藍","紅",
"藍","綠","紅","藍","綠","紅","藍","綠","藍","紅",
"綠","紅","藍","紅","藍","綠","紅","藍","紅","綠"]


//Block2
var IntextColorContent = [
"紅", "藍", "綠", "藍", "綠",
"紅", "藍", "紅", "綠", "紅"
]

var IntextColorColor = [
"green", "red", "blue", "green", "red",
"blue", "red", "green", "red", "green"
]

var textColorContent = [
"藍","綠","藍","紅","藍","紅","藍","紅","藍","紅",
"藍","綠","藍","綠","紅","綠","藍","紅","藍","綠",
"紅","綠","紅","藍","綠","紅","綠","紅","藍","綠",
"藍","綠","藍","紅","綠","藍","紅","綠","紅","綠",
"綠","藍","紅","藍","綠","紅","藍","綠","紅","藍"
]

var textColorColor = [
"red","blue","red","green","red","blue","green","blue","red","green",
"red","blue","green","blue","green","blue","red","green","red","blue",
"green","blue","green","red","blue","green","red","blue","green","red",
"green","blue","red","green","blue","red","green","blue","green","red",
"blue","green","blue","red","blue","green","red","blue","green","red"
]

//Block3

var InswitchTextContent = [
"藍", "紅", "綠", "紅", "藍",
"綠", "紅", "綠", "紅", "藍"
]

var InswitchTextColor = [
"red", "blue", "red", "blue", "green",
"blue", "green", "blue", "green", "red"
]

var InswitchTextSwitch = [
0,0,1,0,0,
0,1,0,0,1
]

var switchTextContent = [
"綠","藍","綠","藍","紅","綠","紅","綠","紅","藍",
"紅","藍","紅","綠","藍","綠","藍","紅","紅","藍",
"藍","紅","綠","紅","紅","綠","藍","紅","藍","紅",
"藍","綠","藍","綠","紅","紅","綠","紅","藍","綠",
"綠","紅","紅","藍","綠","藍","紅","綠","綠","紅"
]

var switchTextColor = [
"red","green","red","green","blue","red","blue","red","green","red",
"blue","red","green","red","green","red","green","blue","green","red",
"green","blue","red","green","blue","red","green","blue","green","blue",
"red","blue","red","blue","green","blue","red","blue","green","red",
"red","green","blue","red","blue","red","blue","red","blue","green"
]

var switchTextSwitch = [
0,1,0,0,1,1,0,1,0,1,
1,1,0,0,1,0,0,1,0,1,
0,0,1,1,0,1,0,1,0,1,
0,1,0,1,1,0,1,0,1,0,
1,1,0,0,1,0,0,1,0,1
]


function genStroopSti(INRow, INCol, NRow, NCol){
	//Block1
$("#InstructFormal1").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= INRow; i++) { 
  $("#InstructFormal1 Table").append('<tr id = I1_tr'+ i + '>')
  for (var m = 1; m <= INCol; m++) { 
    var countcell = (i-1)*INCol + m
    $("#I1_tr" + i).append('<td align="center" id="I1_td'+countcell+'" data-response = '+countcell+' ><div id="I1_Stimulus'+countcell+'" style="background-color:'+IncolorContent[countcell-1]+';" class="ShowBox Stimulus"></div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

$("#StiTable1").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= NRow; i++) { 
  $("#StiTable1 Table").append('<tr id = B1_tr'+ i + '>')
  for (var m = 1; m <= NCol; m++) { 
    var countcell = (i-1)*NCol + m
    $("#B1_tr" + i).append('<td align="center" id="B1_td'+countcell+'" data-response = '+countcell+' ><div id="B1_Stimulus'+countcell+'" style="background-color:'+colorContent[countcell-1]+';" class="ShowBox Stimulus"></div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

// Block2
$("#InstructFormal2").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= INRow; i++) { 
  $("#InstructFormal2 Table").append('<tr id = I2_tr'+ i + '>')
  for (var m = 1; m <= INCol; m++) { 
    var countcell = (i-1)*INCol + m
    $("#I2_tr" + i).append('<td align="center" id="I2_td'+countcell+'" data-response = '+countcell+' ><div id="I2_Stimulus'+countcell+'" class=" Stimulus">'+IntextOnlycontent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

$("#StiTable2").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= NRow; i++) { 
  $("#StiTable2 Table").append('<tr id = B2_tr'+ i + '>')
  for (var m = 1; m <= NCol; m++) { 
    var countcell = (i-1)*NCol + m
    $("#B2_tr" + i).append('<td align="center" id="B2_td'+countcell+'" data-response = '+countcell+' ><div id="B2_Stimulus'+countcell+'" class="Stimulus">'+textOnlycontent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

//Block3
$("#InstructFormal3").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= INRow; i++) { 
  $("#InstructFormal3 Table").append('<tr id = I3_tr'+ i + '>')
  for (var m = 1; m <= INCol; m++) { 
    var countcell = (i-1)*INCol + m
    $("#I3_tr" + i).append('<td align="center" id="I3_td'+countcell+'" data-response = '+countcell+' ><div id="I3_Stimulus'+countcell+'" class="Stimulus" style="color:'+IntextColorColor[(countcell-1)]+'">'+IntextColorContent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

$("#StiTable3").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= NRow; i++) { 
  $("#StiTable3 Table").append('<tr id = B3_tr'+ i + '>')
  for (var m = 1; m <= NCol; m++) { 
    var countcell = (i-1)*NCol + m
    $("#B3_tr" + i).append('<td align="center" id="B3_td'+countcell+'" data-response = '+countcell+' ><div id="B3_Stimulus'+countcell+'" class="Stimulus" style="color:'+textColorColor[(countcell-1)]+'">'+textColorContent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

//Block4
$("#InstructFormal4").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= INRow; i++) { 
  $("#InstructFormal4 Table").append('<tr id = I4_tr'+ i + '>')
  for (var m = 1; m <= INCol; m++) { 
    var countcell = (i-1)*INCol + m
    $("#I4_tr" + i).append('<td align="center" id="I4_td'+countcell+'" data-response = '+countcell+' ><div id="I4_Stimulus'+countcell+'" class="Stimulus" style="color:'+InswitchTextColor[(countcell-1)]+'">'+InswitchTextContent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
  }
}

for (var i = 1; i <= INRow*INCol; i++){
  if (InswitchTextSwitch[(i-1)] == 1){
    $("#I4_Stimulus"+i).addClass("borderCue")
  }
}


$("#StiTable4").append('<Table cellspacing="0" cellpadding="0">')
for (var i = 1; i <= NRow; i++) { 
  $("#StiTable4 Table").append('<tr id = B4_tr'+ i + '>')
  for (var m = 1; m <= NCol; m++) { 
    var countcell = (i-1)*NCol + m
    $("#B4_tr" + i).append('<td align="center" id="B4_td'+countcell+'" data-response = '+countcell+' ><div id="B4_Stimulus'+countcell+'" class="Stimulus" style="color:'+switchTextColor[(countcell-1)]+'">'+switchTextContent[(countcell-1)]+'</div><p style="margin: 0; font-size: 250%;" class="Hide"></p></td>')
    countcell++
  }
}

for (var i = 1; i <= NRow*NCol; i++){
  if (switchTextSwitch[(i-1)] == 1){
    $("#B4_Stimulus"+i).addClass("borderCue")
  }
}

}
