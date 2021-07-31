// 载入设置
var storage = storages.create("YishangLovesPikachu:lovepikachu.top:阿伟的假期全自动脚本");
caozuo_crop_hongbao = storage.get("caozuo_crop_hongbao",true); // 自动收农作物红包 ·
auto_hongbao_number = storage.get("auto_hongbao_number",0); // 在小于等于第n个红包后自动施肥/浇水
auto_fertilizer = storage.get("auto_fertilizer",true); // 是施肥还是浇水
caozuo_sky_hongbao = storage.get("caozuo_sky_hongbao",false);   // 自动收天空红包 ·
caozuo_sky_hongbao_isBig = storage.get("caozuo_sky_hongbao_isBig",false); // 天空红包先收 ·
caozuo_open_hongbao = storage.get("caozuo_open_hongbao",true); // 自动打开红包 ·
caozuo_happy_get_hongbao = storage.get("caozuo_happy_get_hongbao",true);  // 自动收下红包 ·
caozuo_auto_ok_button = storage.get("caozuo_auto_ok_button",true) // 自动点击OK ·
caozuo_open_welfare_button = storage.get("caozuo_open_welfare_button",true); // 自动收下福利
caozuo_close_button = storage.get("caozuo_close_button",true); // 自动点击关闭



if (!requestScreenCapture()) {
    events.broadcast.emit("console", "error","无法截取屏幕数据，红包脚本已经退出，请尝试重新开启！");
    exit();
}


function getPoint(point,img){
    // 将得到的点加上图片宽度1/2，与高度1/2，得到中心点坐标
    return [point.x + img.width / 2, point.y + img.height / 2];
}

function MyfindImage(screen_img, cimg, enabled){
    // 如果值找一个图片且取回其中一个点，集合一下减少代码
    if (!enabled) return null;
    point = images.findImage(screen_img, cimg, {'threshold':0.8});
    if (point !== null){
        point = getPoint(point, cimg);
        return point;
    }else{
        return null;
    }
}

function in_the_game(){
    packageName("com.ruiqugames.jiaqi").className("android.view.View").desc("Game view").findOne();
}

// 载入全部图片数据
let crop_hongbao_img = images.read("./image/可收获红包.jpg");
let get_hongbao_img = images.read("./image/领取红包.jpg");
let happy_get_hongbao_img = images.read("./image/开心收下.jpg");
let sky_hongbao_img = images.read("./image/天空红包.jpg");
let ok_img = images.read("./image/确定.jpg");
let water_img = images.read("./image/浇水.jpg");
let fertilizer_img = images.read("./image/施肥.jpg");
let open_welfare_img = images.read("./image/开启福利.jpg");
let close_img = images.read("./image/关闭.png");

events.broadcast.emit("console", "verbose","操作脚本已在运行......");
while (true) {
    // 如果不在游戏内就不截图
    in_the_game()
    sleep(100); // 防止截图太快消耗资源
   
    
    
    let screen_img = captureScreen();

    
    // 自动确定
    let point = MyfindImage(screen_img, ok_img, caozuo_auto_ok_button);
    if (point !== null){
        events.broadcast.emit("console", "info","找到确定按钮！在500ms后尝试点击！Point：(" + String(point) + ")");
        sleep(500);
        in_the_game()
        click(point[0],point[1]);
        continue;
    }

   
    // 自动开心收下红包
    point = MyfindImage(screen_img, happy_get_hongbao_img, caozuo_happy_get_hongbao);
    if (point !== null){
        events.broadcast.emit("console", "info","找到开心收下页面！在500ms后尝试点击！Point：(" + String(point) + ")");
        sleep(500);
        in_the_game()
        click(point[0],point[1]);
        continue;
    }

    
    // 自动领取红包
    point = MyfindImage(screen_img, get_hongbao_img, caozuo_open_hongbao);
    if (point !== null){
        events.broadcast.emit("console", "info","找到领取红包页面！在500ms后尝试点击！Point：(" + String(point) + ")");
        sleep(500);
        in_the_game()
        click(point[0],point[1]);
        continue;
    }


    if (caozuo_sky_hongbao_isBig){
        // 这个地方开始找天空红包
        point = MyfindImage(screen_img, sky_hongbao_img, caozuo_sky_hongbao);
        if (point !== null){
            events.broadcast.emit("console", "info","找到天空红包页面！在500ms后尝试点击！Point：(" + String(point) + ")");
            sleep(500);
            in_the_game()
            click(point[0],point[1]);
            continue;
        }
    }

    // 这个地方开始查找农作物红包
    if (caozuo_crop_hongbao){
        let result = images.matchTemplate(screen_img, crop_hongbao_img,{'max':9,'threshold':0.5});
    

        if (result.matches.length <= auto_hongbao_number) {
            // 这个地方开始找施肥或浇水

            // 施肥
            point = MyfindImage(screen_img, fertilizer_img, auto_fertilizer);
            if (point !== null){
                events.broadcast.emit("console", "info","触发自动施肥事件！在500ms后尝试点击！Point：(" + String(point) + ")");
                sleep(500);
                in_the_game()
                click(point[0],point[1]);
                continue;
            }

            // 浇水
            point = MyfindImage(screen_img, water_img, !auto_fertilizer);
            if (point !== null){
                events.broadcast.emit("console", "info","触发自动浇水事件！在500ms后尝试点击！Point：(" + String(point) + ")");
                sleep(500);
                in_the_game()
                click(point[0],point[1]);
                continue;
            }

        }
        if (result.first() !== null) {
            point = getPoint(result.first().point, crop_hongbao_img);
            events.broadcast.emit("console", "info","找到农作物红包，目前总数：" + String(result.matches.length) + "，500ms后尝试点击第一个！Point：(" + String(point) + ")");
            sleep(500);
            in_the_game()
            click(point[0],point[1]);
            continue;
        }
        
    }
    
    packageName("com.ruiqugames.jiaqi").className("android.view.View").desc("Game view").findOne();
    if (!caozuo_sky_hongbao_isBig){
        // 这个地方开始找天空红包
        point = MyfindImage(screen_img, sky_hongbao_img, caozuo_sky_hongbao);
        if (point !== null){
            events.broadcast.emit("console", "info","找到天空红包页面！在500ms后尝试点击！Point：(" + String(point) + ")");
            sleep(500);
            in_the_game()
            click(point[0],point[1]);
            continue;
        }
    }

    // 自动开启福利
    point = MyfindImage(screen_img, open_welfare_img, caozuo_open_welfare_button);
    if (point !== null){
        events.broadcast.emit("console", "info","找到开启福利页面！在500ms后尝试点击！Point：(" + String(point) + ")");
        sleep(500);
        in_the_game()
        click(point[0],point[1]);
        continue;
    }






    // 自动关闭
    point = MyfindImage(screen_img, close_img, caozuo_close_button);
    if (point !== null){
        events.broadcast.emit("console", "info","未匹配到任何标识！找到关闭叉叉！在500ms后尝试点击！Point：(" + String(point) + ")");
        sleep(500);
        in_the_game()
        click(point[0],point[1]);
        continue;
    }


    // 回收图片
    screen_img.recycle();
    
}

// 虽然永远不可能回收，但是还是需要表示一下
crop_hongbao_img.recycle();
get_hongbao_img.recycle();
happy_get_hongbao_img.recycle();
sky_hongbao_img.recycle();
ok_img.recycle();
water_img.recycle();
fertilizer_img.recycle();
open_welfare_img.recycle();
close_img.recycle();