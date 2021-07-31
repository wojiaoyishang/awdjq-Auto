setInterval(()=>{}, 1000); // 防止关闭

var storage = storages.create("YishangLovesPikachu:lovepikachu.top:阿伟的假期全自动脚本");
ads_modify_file = storage.get("ads_modify_file",false);
ads_modify_fileImg = storage.get("ads_modify_fileImg",false);

if (ads_modify_file) cache1 = engines.execScriptFile("./阿伟的假期全自动脚本changeCache1.js")
if (ads_modify_fileImg) cache2 = engines.execScriptFile("./阿伟的假期全自动脚本changeCache2.js")
ads = engines.execScriptFile("./阿伟的假期全自动子脚本ads.js")
hongbao = engines.execScriptFile("./阿伟的假期全自动子脚本操作.js")


events.broadcast.on("state", function(b){
    if (!b){
        // 脚本终止运行
        if (ads_modify_file) cache1.getEngine().forceStop();
        if (ads_modify_file) cache2.getEngine().forceStop();
        ads.getEngine().forceStop();
        hongbao.getEngine().forceStop();
        
        exit();
    }
});

