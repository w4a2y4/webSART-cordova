//both inclusive
function degreeToPx(degree) {
  length = 2*ViewDistance/2.54*Math.tan((degree*Math.PI/2)/180)
  return length * DevicePPI * DeviceRatio
}

//block randomization
function balanceTrial(choices, n) {
  var result = new Array()
  repeatTimes = Math.floor(n/choices.length)
  for (var i = 0; i < repeatTimes; i++) {
    result = result.concat(shuffle(choices))
  }
  remainder = n % choices.length
  if (remainder) {
    console.log("balanceTrial doesn't balance completely!")
    result = result.concat(shuffle(choices).slice(0,remainder))
  }
  return result
}


function timeoutHide(target, time, CurrentTrial, HoldTime, callback) {
  setTimeout(function(){
    // $("body").prepend(target+" Hide "+window.CurrentTrial+"<br>")
    // $("body").prepend(target+" Hide "+CurrentTrial+"<br>")
    // $("body").prepend(target+" Hide "+window.HoldTime+"<br>")
    // $("body").prepend(target+" Hide "+HoldTime+"<br>")

    if (HoldTime) {
      criteria = window.CurrentTrial == CurrentTrial && window.HoldTime == HoldTime
    } else {
      criteria = window.CurrentTrial == CurrentTrial
    }
    if (criteria) {
      $(target).addClass('Hide')
      if (callback) {
        (callback && typeof(callback)==="function") && callback()
      }
    }
  },time)
}


function timeoutShowCurrent(target, time, current, HoldTime, callback) {
  setTimeout(function(){
    // window.current:無法用par傳進來，故重寫一個function
    if (HoldTime) {
      criteria = window.current == current && window.HoldTime == HoldTime
    } else {
      criteria = window.current == current
    }
    if (criteria) {
      $(target).removeClass('Hide')
      if (callback) {
        (callback && typeof(callback)==="function") && callback()
      }
    }
  },time)
}

function timeoutShow(target, time, CurrentTrial, HoldTime, callback) {
  setTimeout(function(){

    // $("body").prepend(target+" Show "+window.CurrentTrial+"<br>")
    // $("body").prepend(target+" Show "+CurrentTrial+"<br>")
    // $("body").prepend(target+" Show "+window.HoldTime+"<br>")
    // $("body").prepend(target+" Show "+HoldTime+"<br>")

    if (HoldTime) {
      criteria = window.CurrentTrial == CurrentTrial && window.HoldTime == HoldTime
    } else {
      criteria = window.CurrentTrial == CurrentTrial
    }
    if (criteria) {
      $(target).removeClass('Hide')
      if (callback) {
        (callback && typeof(callback)==="function") && callback()
      }
    }
  },time)
}

function range(start, end, step) {
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;
  if (step === 0) {
    throw TypeError("Step cannot be zero.")
  }
  if (typeofStart == "undefined" || typeofEnd == "undefined") {
    throw TypeError("Must pass start and end arguments.")
  } else if (typeofStart != typeofEnd) {
    throw TypeError("Start and end arguments must be of same type.")
  }
  typeof step == "undefined" && (step = 1)
  if (end < start) {
    step = -step;
  }
  if (typeofStart == "number") {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start)
      start += step;
    }
  } else if (typeofStart == "string") {
    if (start.length != 1 || end.length != 1) {
      throw TypeError("Only strings with one character are supported.")
    }
    start = start.charCodeAt(0)
    end = end.charCodeAt(0)
    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start))
      start += step;
    }
  } else {
    throw TypeError("Only string and number types are supported")
  }
  return range;
}

function sizing(target, height, width) {
  $(target).css("height",degreeToPx(height))
  $(target).css("width",degreeToPx(width))
}

//stop all timeouts
function stopAllTimeouts()
{
    var id = window.setTimeout(null,0);
    while (id--) 
    {
        window.clearTimeout(id);
    }
}

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

String.prototype.paddingLeft = function (paddingValue) {
   return String(paddingValue + this).slice(-paddingValue.length);
};

function count(array_elements) {
    array_elements.sort();
    var current = null;
    var cnt = 0;
    var cntarray = [];
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                cntarray.push(cnt)
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        cntarray.push(cnt)
    }
    return cntarray
}

function gotFileWriter(writer) {
  // alert("gotFileWriter")
  writer.onwriteend = function(evt) {
    // alert("contents of file now 'some sample text'");
    window.location = "SelectTask.html"
  };

  writer.onerror = function (e) {
    // alert("Failed file write: " + e.toString());
  };
  writer.write(data);


}

function onDeviceReady() {
  // alert("onDeviceReady")
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}  

function gotFS(fileSystem) {
  // alert("gotFS")
  console.log('file system open: ' + fileSystem.name);
  fileSystem.root.getFile(SubjectID + "_" + Tablename + "_" + timestamp + ".csv", {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
  // alert("gotFileEntry")
  fileEntry.createWriter(gotFileWriter, fail);
}

function fail(error) {
  // alert(error.code)
  console.log(error.code);
}

function exportCSV (){     
  // alert("exportCSV")
  // alert(Tablename+timestamp+".txt has been exported");
  onDeviceReady();
}

function timeStamp() {
  var now = new Date();
  var date = [ now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes()];
  // var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  // var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  // time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  // time[0] = time[0] || 12;
  for ( var i = 0; i < date.length; i++ ) {
    // if ( time[i] < 10 ) {
    //   time[i] = "0" + time[i];
    // }
    if ( date[i] < 10 ) {
      date[i] = "0" + date[i];
    }
  }
  return date.join("");
}

//for Stroop
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
