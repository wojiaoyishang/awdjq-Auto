// UI 界面
"ui";
// 存储空间并取出设置
var storage = storages.create("YishangLovesPikachu:lovepikachu.top:阿伟的假期全自动脚本");
ads_beginApp = storage.get("ads_beginApp",true);
ads_player = storage.get("ads_player",true);
ads_box = storage.get("ads_box",true);
caozuo_crop_hongbao = storage.get("caozuo_crop_hongbao",true);
auto_hongbao_number = storage.get("auto_hongbao_number",0);
auto_fertilizer = storage.get("auto_fertilizer",true);
caozuo_sky_hongbao = storage.get("caozuo_sky_hongbao",false);
caozuo_sky_hongbao_isBig = storage.get("caozuo_sky_hongbao_isBig",false);
caozuo_open_hongbao = storage.get("caozuo_open_hongbao",true);
caozuo_happy_get_hongbao = storage.get("caozuo_happy_get_hongbao",true);
caozuo_auto_ok_button = storage.get("caozuo_auto_ok_button",true);
ads_modify_file = storage.get("ads_modify_file",false);
ads_modify_fileImg = storage.get("ads_modify_fileImg",false);
back_game_second = storage.get("back_game_second",3);
caozuo_close_button = storage.get("caozuo_close_button",true);
caozuo_open_welfare_button = storage.get("caozuo_open_welfare_button",true);


ui.statusBarColor("#FFCC00")
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar bg="#FFCC00" id="toolbar" title="阿伟的假期全自动脚本"/>
                <tabs bg="#FFCC00" tabIndicatorColor="#ffd55b" id="tabs"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    
                    <vertical padding="16" bg="#ffffff">
                        <text textSize="30sp" textStyle="bold" textColor="black" gravity="center">阿伟的假期全自动脚本</text>
                        <text marginTop="8" gravity="center">非常感谢大家下载使用我的脚本</text>
                        <text gravity="center">此脚本适用于 阿伟的假期(com.ruiqugames.jiaqi)</text>
                        <text gravity="center">系统版本适用于 Android 7.0 及以上</text>
                        <text gravity="center" textColor="#FFA500">请保持包名与上述一致，否则脚本将无法运行！</text>
                        <text gravity="center">此脚本非外挂脚本，属于挂机脚本。Verion: 1.0.0</text>
                        <text gravity="center" textColor="red">虽然不会修改游戏但是还是请大家不要随意传播！</text>
                        <text marginTop="8" textColor="#FF8C00" gravity="center">脚本由 @我叫以赏 制作且基于 Auto.js </text>
                        <text textColor="#FF8C00" gravity="center">悬浮窗由 @大柒 开源。</text>
						<text  marginTop="8" autoLink="all" text="开源 https://gitee.com/wojiaoyishang/awdjq-Auto" gravity="center" />
                        <text  marginTop="8" autoLink="all" textColor="red" text="♡ https://lovepikachu.top ♡" gravity="center" />
                        <img src="file://image/pikachu.png"/>


                        <text gravity="center" marginTop="40" textStyle="bold" textColor="black" textSize="20sp">找到我们</text>
                        <linear orientation="horizontal">
                            <button layout_weight="1" w="auto" color="#ffd55b" id="Website_button" marginLeft="8" style="Widget.AppCompat.Button.Borderless.Colored" text="Webiste"/>
                            <button layout_weight="1" w="auto" color="#ffd55b" id="BiliBili_button" marginLeft="8" style="Widget.AppCompat.Button.Borderless.Colored" text="BiliBili"/>
                            <button layout_weight="1" w="auto" color="#ffd55b" id="QQ_button" marginLeft="8" style="Widget.AppCompat.Button.Borderless.Colored" text="苏倩的QQ群"/>
                        </linear>
                    </vertical>

                </frame>

                <frame>

                    <vertical padding="16" bg="#ffffff">
                        <text marginLeft="5">选择合适的功能开关进行开启，目前只支持自动跳过广告，还不支持自动触发广告事件来换取大量红包。</text>
                        <checkbox id="ads_beginApp" text="跳过应用启动广告" checked="true"/>
                        <checkbox id="ads_player" text="跳过视频广告" checked="true"/>
                        <checkbox id="ads_box" text="跳过弹窗广告" checked="true"/>
                        <text id="back_game_second_tip" marginLeft="5">非游戏页面在 3s 后自动回到游戏。</text>
                        <seekbar id="back_game_second" marginTop="3" />
                        <text marginLeft="5">注意：此功能存在风险，仍在测试中！如果用了这个功能，会降低账号权重，很可能无法得到高红包的广告提送！</text>
                        <checkbox id="ads_modify_file" text="修改缓存文件，跳过广告" checked="false"/>
                        <checkbox id="ads_modify_fileImg" text="修改广告图片" checked="false"/>
                        <text marginLeft="5">注意：此功能安全，务必在游戏关闭时清理，清理广告占用的存储空间。</text>
                        <button color="#ffd55b" id="delete_ads_cache_button" marginLeft="8" style="Widget.AppCompat.Button.Borderless.Colored" text="删除广告缓存"/>
                        
                    </vertical>

                </frame>

                <frame>

                <vertical padding="16" bg="#ffffff">
                        <text marginLeft="5">选择合适的功能开关进行开启，目前只支持收货天空红包、农作物红包，自动浇水、施肥。</text>
                        <checkbox id="caozuo_crop_hongbao" text="自动收农作物红包" checked="true"/>
                        <checkbox id="caozuo_sky_hongbao" text="自动收天空红包(权重小于农作物红包)" checked="false"/>
                        <checkbox id="caozuo_sky_hongbao_isBig" text="天空红包权重大于农作物红包(若有天空红包先收下天空红包)" checked="false"/>
                        <checkbox id="caozuo_open_hongbao" text="自动领取红包" checked="true"/>
                        <checkbox id="caozuo_happy_get_hongbao" text="自动点击开心收下" checked="true"/>
                        <checkbox id="caozuo_auto_ok_button" text="自动点击确定按钮" checked="true"/>
                        <checkbox id="caozuo_open_welfare_button" text="自动开启福利" checked="true"/>    
                        <checkbox id="caozuo_close_button" text="如果均未匹配则自动点击关闭叉叉" checked="true"/>    
                        <text id="auto_tip_text_1" marginTop="5">在红包数量等于小于 0 后，自动 施肥。</text>
                        <seekbar id="auto_hongbao_number" marginTop="3" />
                        <radiogroup orientation="horizontal">
                            <radio id="auto_fertilizer" text="自动施肥" checked="true"/>
                            <radio id="auto_water" text="自动浇水" />
                        </radiogroup>        
                            
                    </vertical>

                </frame>

            </viewpager>
        </vertical>
        
        

    </drawer>
);

activity.setSupportActionBar(ui.toolbar);
//设置滑动页面的标题
ui.viewpager.setTitles(["欢迎界面", "广告设置", "操作设置"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
//窗口的事件
ui.Website_button.on("click", () => {
    try {
        app.openUrl("https://lovepikachu.top");
    } catch(e) {
        console.error("无法打开网页可能是因为没有安装浏览器 : " + $debug.getStackTrace(e));
    }
});

ui.BiliBili_button.on("click", () => {
    try {
        app.openUrl("https://space.bilibili.com/197741923");
    } catch(e) {
        console.error("无法打开网页可能是因为没有安装浏览器 : " + $debug.getStackTrace(e));
    }
});

ui.QQ_button.on("click", () => {
    try {
        app.startActivity({ 
            action: "android.intent.action.VIEW", 
            data:"mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26jump_from%3Dwebapi%26k%3DWSQmgND3EViuakPAUgzzdQRfarMGa8Gi", 
            packageName: "com.tencent.mobileqq", 
        });
    } catch(e) {
        console.error("无法打开可能是因为没有安装QQ : " + $debug.getStackTrace(e));
    }
});


// 设置事项处理
ui.auto_hongbao_number.setOnSeekBarChangeListener({
    onProgressChanged: function (view, p) {
        rp = Math.round((p/100)*9);
        ui.auto_tip_text_1.setText("在红包数量等于小于 " + rp + " 后，自动 " + (ui.auto_fertilizer.isChecked() ? "施肥" : "浇水") + " 。");
        // 保存滚动设置
        storage.put("auto_hongbao_number",rp);
    }
});

ui.back_game_second.setOnSeekBarChangeListener({
    onProgressChanged: function (view, p) {
        rp = Math.round((p / 100 * 60));
        ui.back_game_second_tip.setText("非游戏页面在 " +  rp + "s 后自动回到游戏。");
        // 保存滚动设置
        storage.put("back_game_second",rp);
    }
});

ui.auto_fertilizer.on("click", () => {
    storage.put("auto_fertilizer",true);
    rp = Math.round((ui.auto_hongbao_number.getProgress()/100)*9);
    ui.auto_tip_text_1.setText("在红包数量等于小于 " + rp + " 后，自动 " + (ui.auto_fertilizer.isChecked() ? "施肥" : "浇水") + " 。");
});
ui.auto_water.on("click", () => {
    storage.put("auto_fertilizer",false);
    rp = Math.round((ui.auto_hongbao_number.getProgress()/100)*9);
    ui.auto_tip_text_1.setText("在红包数量等于小于 " + rp + " 后，自动 " + (ui.auto_fertilizer.isChecked() ? "施肥" : "浇水") + " 。");
});

ui.caozuo_sky_hongbao_isBig.on("click", () => {
    storage.put("caozuo_sky_hongbao_isBig",ui.caozuo_sky_hongbao_isBig.checked);
    if (ui.caozuo_sky_hongbao_isBig.checked){
        ui.caozuo_sky_hongbao.setText("自动收天空红包(权重大于农作物红包)");
    }else{
        ui.caozuo_sky_hongbao.setText("自动收天空红包(权重小于农作物红包)");
    }
});

ui.delete_ads_cache_button.on("click", () => {
    let packageNameText = "com.ruiqugames.jiaqi" // 更改这个值你就可以改成插件了 嘻嘻嘻
    let cachePath = "/sdcard/Android/data/" + packageNameText + "/";
    let cachePathA = cachePath + "cachett_ad/video_feed/";
    let cachePathB = cachePath + "cachett_ad/video_reward_full/";
    let cachePathC = cachePath + "cache/com_qq_e_download/video/";
    let cachePathD = cachePath + "cache/ksadsdk/video-cache/";
    let cachePathE = cachePath + "cache/ksadsdk/ksad-images/";
    let cachePathF = cachePath + "cache/diskGif/";
    let cachePathG = cachePath + "cache/splash_image/";
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
    let adsFiles5 = Array.prototype.slice.call(files.listDir(cachePathE));
    for (var i in adsFiles5){
        adsFiles5[i] = cachePathE + adsFiles5[i]
    }
    let adsFiles6 = Array.prototype.slice.call(files.listDir(cachePathF));
    for (var i in adsFiles6){
        adsFiles6[i] = cachePathF + adsFiles6[i]
    }
    let adsFiles7 = Array.prototype.slice.call(files.listDir(cachePathG));
    for (var i in adsFiles7){
        adsFiles7[i] = cachePathG + adsFiles7[i]
    }


    let adsFiles = adsFiles1.concat(adsFiles2);
    adsFiles = adsFiles.concat(adsFiles3);
    adsFiles = adsFiles.concat(adsFiles4);
    adsFiles = adsFiles.concat(adsFiles5);
    adsFiles = adsFiles.concat(adsFiles6);
    adsFiles = adsFiles.concat(adsFiles7);

    for (var i in adsFiles){
        files.remove(adsFiles[i]);
    }

    toast("清理广告缓存完成");
});

// 保存设置
ui.ads_beginApp.on("click", () => {storage.put("ads_beginApp",ui.ads_beginApp.checked)});
ui.ads_box.on("click", () => {storage.put("ads_box",ui.ads_box.checked)});
ui.ads_player.on("click", () => {storage.put("ads_player",ui.ads_player.checked)});
ui.caozuo_crop_hongbao.on("click", () => {storage.put("caozuo_crop_hongbao",ui.caozuo_crop_hongbao.checked)});
ui.caozuo_sky_hongbao.on("click", () => {storage.put("caozuo_sky_hongbao",ui.caozuo_sky_hongbao.checked)});
ui.caozuo_open_hongbao.on("click", () => {storage.put("caozuo_open_hongbao",ui.caozuo_open_hongbao.checked)});
ui.caozuo_happy_get_hongbao.on("click", () => {storage.put("caozuo_happy_get_hongbao",ui.caozuo_happy_get_hongbao.checked)});
ui.caozuo_auto_ok_button.on("click", () => {storage.put("caozuo_auto_ok_button",ui.caozuo_auto_ok_button.checked)});
ui.ads_modify_file.on("click", () => {storage.put("ads_modify_file",ui.ads_modify_file.checked)});
ui.ads_modify_fileImg.on("click", () => {storage.put("ads_modify_fileImg",ui.ads_modify_fileImg.checked)});
ui.caozuo_open_welfare_button.on("click", () => {storage.put("caozuo_open_welfare_button",ui.caozuo_open_welfare_button.checked)});
ui.caozuo_close_button.on("click", () => {storage.put("caozuo_close_button",ui.caozuo_close_button.checked)});


// 导入设置
ui.ads_beginApp.checked = ads_beginApp;
ui.ads_box.checked = ads_box;
ui.ads_player.checked = ads_player;
ui.caozuo_crop_hongbao.checked = caozuo_crop_hongbao;
ui.auto_hongbao_number.setProgress(auto_hongbao_number/9*100);
ui.auto_fertilizer.checked = auto_fertilizer;
ui.auto_water.checked = !auto_fertilizer;
rp = Math.round((ui.auto_hongbao_number.getProgress()/100)*9);
ui.auto_tip_text_1.setText("在红包数量等于小于 " + rp + " 后，自动 " + (ui.auto_fertilizer.isChecked() ? "施肥" : "浇水") + " 。");
ui.caozuo_sky_hongbao.checked = caozuo_sky_hongbao;
ui.caozuo_sky_hongbao_isBig.checked = caozuo_sky_hongbao_isBig;
ui.caozuo_sky_hongbao.setText(caozuo_sky_hongbao_isBig ? "自动收天空红包(权重大于农作物红包)" : "自动收天空红包(权重小于农作物红包)");
ui.caozuo_open_hongbao.checked = caozuo_open_hongbao;
ui.caozuo_happy_get_hongbao.checked = caozuo_happy_get_hongbao;
ui.caozuo_auto_ok_button.checked = caozuo_auto_ok_button;
ui.ads_modify_file.checked = ads_modify_file;
ui.ads_modify_fileImg.checked = ads_modify_fileImg;
ui.back_game_second.setProgress(back_game_second/60*100);
ui.back_game_second_tip.setText("非游戏页面在 " +  back_game_second + "s 后自动回到游戏。");
ui.caozuo_open_welfare_button.checked = caozuo_open_welfare_button;
ui.caozuo_close_button.checked = caozuo_close_button;


// 控制台事件
function showConsole(){
    importClass(Packages.androidx.recyclerview.widget.RecyclerView);
    console.show();
    console.setPosition(device.width/5, device.height - device.height/2.5);
    console.setSize(device.width, device.height/6-30);
    let mConsoleView = getConsoleWindow();
    let parent = mConsoleView.parent;
    var inputView = parent.findViewById(context.getResources().getIdentifier("input", "id", context.getPackageName()));
    var buttonView = parent.findViewById(context.getResources().getIdentifier("submit", "id", context.getPackageName()));
    
    inputView.setVisibility(8);
    buttonView.setVisibility(8);
    
    function getConsoleWindow() {
        var mConsole = runtime.console;
        let field = mConsole.class.superclass.getDeclaredField("mConsoleFloaty");
        field.setAccessible(true);
        mConsoleFloaty = field.get(mConsole);
        mConsoleView = mConsoleFloaty.getExpandedView();
        return mConsoleView;
    }
    let r = filterView(mConsoleView);
    function filterView(view, arr) {
    arr = arr || [];
    if (view instanceof android.view.ViewGroup) {
        arr.push(view);
        let childCount = view.childCount;
        for (var i = 0; i < childCount; i++) {
            let chileView = view.getChildAt(i);
            filterView(chileView, arr);
        }
    } else {
        arr.push(view);
    }
    return arr;
    }
    let num = 10;
   
    let recycleview = r[num];
    let adapter = recycleview.getAdapter();
    // r[num].setBackgroundColor(colors.parseColor("#2ed573"));
    function createAdapter() {
        let result = new JavaAdapter(
        Packages[adapter.getClass().getName()],
        {
            onBindViewHolder: function (vh, i) {
            adapter.onBindViewHolder(vh, i);
            vh.textView.setTextSize(13);
            //vh.textView.setTextColor(colors.parseColor("#2ed573"));
            },
        },
        recycleview.parent.parent,
        null
        );
        return result;
    }
    let newAdapter = createAdapter();
    recycleview.setAdapter(newAdapter);
    
}

events.broadcast.on("console", function(t,s){
    switch (t) {
        case "log":
            console.log(s);
            break;
        case "error":
            console.error(s);
            break;
        case "verbose":
            console.verbose(s);
            break;
        case "info":
            console.info(s);
            break;
        case "warn":
            console.warn(s);
            break;
        default:
            console.log(s);
            break;
    }
});





// 申请悬浮窗悬浮窗
if (!$floaty.checkPermission()) {
    // 没有悬浮窗权限，提示用户并跳转请求
    dialogs.alert("本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。");
    $floaty.requestPermission();
    exit();
} else {
    console.verbose("已拥有悬浮窗权限，脚本正常显示悬浮窗。");
}

// 申请无障碍

if (auto.service == null) {
    dialogs.alert("本脚本需要无障碍服务，\n请在随后的界面中找到 阿伟的假期全自动脚本 并启用").then(()=>{
        auto();
    });
}



// 悬浮窗

"ui";

/**
 * Auto Js 悬浮球
 */

//导入FloatButton模块
var { FloatButton, FloatButtonConfig } = require('./FloatButton/init');

let fb = new FloatButton();

//修改停靠动画时间
FloatButtonConfig.time.direction = 510;

/**
 * 悬浮球创建事件
 */
fb.on('create', function () {
    //设置logo图标
    fb.setIcon('file://image/pikachu.png');
    //设置logo图标着色
    //fb.setTint('#FFFFFF');
    //设置logo背景颜色
    fb.setColor('#FFFFFF');
    fb.setAllButtonSize(40);
    //添加菜单按钮

    fb.addItem('switch')
        //启用复选框属性
        .toCheckbox(mUtil => {
            //未选中样式
            mUtil.icon1('@drawable/ic_play_arrow_black_48dp').tint1('#FFFFFF').color1('#41A4F5');
            //选中样式
            mUtil.icon2('@drawable/ic_stop_black_48dp').tint2('#FFFFFF').color2('#ED524E');
        })
        .onClick((view, name, state) => {
            if (state) {
                execution = engines.execScriptFile("./阿伟的假期全自动主脚本.js");
                console.verbose("脚本开始运行，请打开阿伟的假期。");
            }else{
                events.broadcast.emit("state", false);
                console.verbose("脚本已停止运行。");
            }
            
            //返回 true:保持菜单开启 false:关闭菜单
            return false;
        });
    
    //设置按钮属性为选中
    // fb.getViewUtil('按钮2').setChecked(true);
    //获取按钮选中状态
    // log('按钮2选中状态:', fb.getViewUtil('按钮2').getChecked());


    fb.addItem('setting')
        .setIcon('file://image/setting.png')
        .setColor("#0e932e")
        .setTint("#FFFFFF")
        .onClick((view, name, state) => {
            app.launch("aweidejiaqi.yishang.lovepikachu");
        });

    fb.addItem('console')
        .setIcon('file://image/console.png')
        .setColor("#000000")
        .setTint("#FFFFFF")
        .onClick((view, name, state) => {
            console.hide();
            setTimeout(() => {
                showConsole();
            },200);
            return false;
        });

    fb.addItem('exit')
        .setIcon('file://image/exit.png')
        .setColor("#d81e06")
        .setTint("#FFFFFF")
        .onClick((view, name, state) => {
            events.broadcast.emit("state", false);
            exit();
            return false;
        });
    
    
    
    // fb.addItem('按钮3')
    //     .setIcon('@drawable/ic_looks_3_black_48dp')
    //     .setTint('#FFFFFF')
    //     .setColor('#ED524E');

    //在无操作一段时间后自动关闭菜单
    fb.setAutoCloseMenuTime(3000);
});


//菜单按钮点击事件
fb.on('item_click', (view, name, state) => {
    return false;
});

fb.show();