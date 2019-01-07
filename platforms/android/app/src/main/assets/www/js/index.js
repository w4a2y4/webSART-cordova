/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
    };

    //按下送出按鈕後，將帳號及密碼送到Server端做驗證
    $(document).on("submit", "form", function () {
        $.ajax({
            url: "[Server端做驗證的網頁]",  //如http://www.bggcs.com/app/member.php
            type: "POST",
            data: $(this).serialize(),  //使用者輸入的表單資料
            //無法將資料傳送到Server端時，會顯示錯誤訊息
            error: function () {
                alert("傳送錯誤！");
            },
            //成功傳送資料後，以JSON格式接收資料
            success: function (msg) {
                var msg = JSON.parse(msg);
                alert(msg.message);
            }
        });

        return false;
    });

})();

(function () {
    "use strict";
 
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
 
    function onDeviceReady() {
    };
 
    //按下送出按鈕後，將帳號及密碼送到Server端做驗證
    $(document).on("submit", "form", function () {
        $.ajax({
            url: "http://hpc.psy.ntu.edu.tw/~tylin/account.php",  //如http://www.bggcs.com/app/member.php
            type: "POST",
            data: $(this).serialize(),  //使用者輸入的表單資料
            //無法將資料傳送到Server端時，會顯示錯誤訊息
            error: function () {
                alert("傳送錯誤！");
            },
            //成功傳送資料後，以JSON格式接收資料
            success: function (msg) {
                var msg = JSON.parse(msg);
                alert(msg.message);
            }
        });
 
        return false;
    });
 
})();


