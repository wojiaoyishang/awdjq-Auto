events.broadcast.emit("console", "verbose","缓存修改脚本-视频已在运行......");

packageNameText = "com.ruiqugames.jiaqi" // 更改这个值你就可以改成插件了 嘻嘻嘻
cachePath = "/sdcard/Android/data/" + packageNameText + "/";
cachePathA = cachePath + "cachett_ad/video_feed/";
cachePathB = cachePath + "cachett_ad/video_reward_full/";
cachePathC = cachePath + "cache/com_qq_e_download/video/";
cachePathD = cachePath + "cache/ksadsdk/video-cache/";


changeFiles = [];
while (true){
    sleep(500);
    // 罗列出所有广告缓存
    let adsFiles1 = Array.prototype.slice.call(files.listDir(cachePathA));
    for (var i in adsFiles1){
        adsFiles1[i] = cachePathA + adsFiles1[i]
    }
    let adsFiles2 = Array.prototype.slice.call(files.listDir(cachePathB));
    for (var i in adsFiles2){
        adsFiles2[i] = cachePathB + adsFiles2[i]
    }
    let adsFiles3 = Array.prototype.slice.call(files.listDir(cachePathC));
    for (var i in adsFiles3){
        adsFiles3[i] = cachePathC + adsFiles3[i]
    }
    let adsFiles4 = Array.prototype.slice.call(files.listDir(cachePathD));
    for (var i in adsFiles4){
        adsFiles4[i] = cachePathD + adsFiles4[i]
    }

    let adsFiles = adsFiles1.concat(adsFiles2);
    adsFiles = adsFiles.concat(adsFiles3);
    adsFiles = adsFiles.concat(adsFiles4);

    // 删除修改了但是游戏已经删除的文件
    for (var x in changeFiles){
        if (adsFiles.indexOf(changeFiles[x]) == -1) {
            changeFiles[x] = undefined;
        } 
    }

    changeFiles.filter(function (s) {return s && s.trim();}); // 删除空项
    
    let changeFilesLength = 0;
    for (var i in adsFiles){
        if (!adsFiles[i].includes('_complete') && changeFiles.indexOf(adsFiles[i]) == -1){
            if (files.copy("./image/pikachu.mp4", adsFiles[i])){
                changeFiles.push(adsFiles[i]);
                changeFilesLength += 1;
            }
        }
    }
 
    if (changeFilesLength !== 0){
        events.broadcast.emit("console", "warn","文件缓存修改完成！修改了"+ changeFilesLength +"个文件。");
    }

}