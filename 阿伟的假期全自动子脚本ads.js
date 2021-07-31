var storage = storages.create("YishangLovesPikachu:lovepikachu.top:阿伟的假期全自动脚本");
ads_beginApp = storage.get("ads_beginApp",true);
ads_player = storage.get("ads_player",true);
ads_box = storage.get("ads_box",true);
back_game_second = storage.get("back_game_second",3);

packageNameText = "com.ruiqugames.jiaqi" // 更改这个值你就可以改成插件了 嘻嘻嘻

function cId(ID,uID) {
    // 因为ID取出是以 packageName:id/id 的形式，所以我比较懒，当然你也可以用 string.includes() 方法匹配，但这有匹配错误的风险
    return ID == packageNameText + ":id/" + uID;
}

events.broadcast.emit("console", "verbose","广告脚本已在运行......");
// 定位其关闭按钮是关键
while (true){
    // 不断遍历界面
    if (packageName(packageNameText).findOne(back_game_second * 1000) == null) app.launch(packageNameText); 
    packageName(packageNameText).find().forEach(function(tv) {
        var Bounds = tv.bounds();
        if (tv.className() == "android.view.View") {
            // className android.view.View 筛选
            if (cId(tv.id(),"tt_splash_skip_btn") && ads_beginApp) {
                tv.click();
                events.broadcast.emit("console", "error","找到应用启动广告，已自动点击跳过！");
            }else if (tv.depth() == 9 && (Bounds.left,Bounds.top,Bounds.right,Bounds.bottom) == (870.0, 495.0, 942.0, 567.0) && ads_box) {
                tv.click();
                events.broadcast.emit("console", "error","找到弹窗广告，已尝试点击跳过！");
            }

        }else if (tv.className() == "android.widget.RelativeLayout") {
            // className android.widget.RelativeLayout 筛选
            if (cId(tv.id(),"tt_video_ad_close_layout") && ads_player) {
                events.broadcast.emit("console", "error","找到视频广告，将在3s后点击跳过！");
                sleep(3000);
                tv.click();
            }

        }else if (tv.className() == "android.widget.Image") {
            // className android.widget.Image 筛选
            if (tv.depth() == 11 && (Bounds.left,Bounds.top,Bounds.right,Bounds.bottom) == (870.0, 495.0, 942.0, 567.0) && ads_box) {
                tv.click();
                events.broadcast.emit("console", "error","找到弹窗广告，已尝试点击跳过！");
            }else if(tv.text().includes("lkYrmqKHmnb8yLjAt5ruh6Laz5bel5L+h6YOo5pyA5Lil6KaB5rGCIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5o+S5bGPL+erluWbvi3mlofmoYgxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTk0LjAwMDAwMCwgLTE3Ny4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IjQwL+WFs+mXrSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTk0LjAwMDAwMCwgMTc3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjMiIGN4PSIyOCIgY3k9IjI4IiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Y+JL+aegeWwjyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxOS4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTcuNSIgeTE9IjAuNSIgeDI9IjAuNSIgeTI9IjE3LjUiIGlkPSJMaW5lIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjE3LjUiIHkxPSIxNy41IiB4Mj0iMC41IiB5Mj0iMC41IiBpZD0iTGluZS1Db3B5LTI0Ij48L2xpbmU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==") && ads_box) {
                // 这个广告文本竟然是 base64 编码的图片！实在没有好的办法定位了。
                // 为什么使用 includes() 而不用 == ，是因为防止拥有特殊的字符（不能被显示的字符）
                tv.click();
                events.broadcast.emit("console", "error","找到弹窗广告，已尝试点击跳过！");
            }

        }else if (tv.className() == "android.widget.ImageView") {
            // className android.widget.ImageView 筛选
            if (cId(tv.id(),"tt_insert_dislike_icon_img") && ads_box) {
                tv.click();
                events.broadcast.emit("console", "error","找到弹窗广告，已自动点击跳过！");
            }else if (cId(tv.id(),"ksad_end_close_btn") && ads_player) {
                events.broadcast.emit("console", "error","找到视频广告，将在3s后点击跳过！");
                sleep(3000);
                tv.click();
            }

        }   
    
    });

}