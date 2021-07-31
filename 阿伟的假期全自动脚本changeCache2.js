events.broadcast.emit("console", "verbose","缓存修改脚本-图片已在运行......");

packageNameText = "com.ruiqugames.jiaqi" // 更改这个值你就可以改成插件了 嘻嘻嘻
cachePath = "/sdcard/Android/data/" + packageNameText + "/";
cachePathA = cachePath + "cache/ksadsdk/ksad-images/";
cachePathB = cachePath + "cache/diskGif/";
cachePathC = cachePath + "cache/splash_image/";

changeFiles1 = [];
changeFiles2 = [];
while (true){
    sleep(500);
    let changeFilesLength = 0;
    // 罗列出所有广告缓存
    let adsFiles1 = Array.prototype.slice.call(files.listDir(cachePathA));
    for (var i in adsFiles1){
        adsFiles1[i] = cachePathA + adsFiles1[i]
    }
    let adsFiles3 = Array.prototype.slice.call(files.listDir(cachePathC));
    for (var i in adsFiles3){
        adsFiles3[i] = cachePathC + adsFiles3[i]
    }
    adsFiles1 = adsFiles1.concat(adsFiles3);
    // 删除修改了但是游戏已经删除的文件
    for (var x in changeFiles1){
        if (adsFiles1.indexOf(changeFiles1[x]) == -1) {
            changeFiles1[x] = undefined;
        } 
    }
    changeFiles1.filter(function (s) {return s && s.trim();}); // 删除空项
    for (var i in adsFiles1){
        if (!adsFiles1[i].includes("journal") && adsFiles1.indexOf(changeFiles1[x]) == -1){
            files.copy("./image/pikachu1080x19020.jpg",adsFiles1[i]);
            changeFiles1.push(adsFiles1[i]);
            changeFilesLength += 1;
        }
    }


    // 罗列出所有广告缓存
    let adsFiles2 = Array.prototype.slice.call(files.listDir(cachePathB));
    for (var i in adsFiles2){
        adsFiles2[i] = cachePathB + adsFiles2[i]
    }
    // 删除修改了但是游戏已经删除的文件
    for (var x in changeFiles2){
        if (adsFiles2.indexOf(changeFiles2[x]) == -1) {
            changeFiles2[x] = undefined;
        } 
    }
    changeFiles2.filter(function (s) {return s && s.trim();}); // 删除空项
    for (var i in adsFiles2){
        if (adsFiles2.indexOf(changeFiles2[x]) == -1){
            files.copy("./image/pikachu1920x1080.jpg", adsFiles2[i]);
            changeFiles2.push(adsFiles2[i]);
            changeFilesLength += 1;
        }
        
    }
    
    if (changeFilesLength !== 0 ) events.broadcast.emit("console", "warn","广告图片修改完成！修改了" + changeFilesLength + "个图片。");

}