//当网页都加载完成才执行以下代码
window.onload=function(){
    //获取对象
    var play=document.querySelector("#play");//获取播放按钮元素
    //console.log(play);
    var next=document.querySelector(".next");//获取下一曲元素
    var prev=document.querySelector(".prev");//获取上一曲元素
 




    //定义全局变量
    var flag=true;//是否播放音乐
    var num=0;
    //定义音频路径
    var musicSrc=["./video/1.mp3","./video/2.mp3","./video/3.mp3"];





    //注册事件
    addEvent(play,"click",player);
    addEvent(next,"click",nextMusic);
    addEvent(prev,"click",prevMusic);




    //定义函数
    //播放函数
    function player(){
        if(flag){
            //播放音乐
            audio.play();
            //改变文字
            play.title="暂停";
            //改变图标
            play.className="play2";
        }else{
            //停止播放
            audio.pause();
            //改变文字
            play.title="播放";
            //改变图标
            play.className="play1";
        }
        //改变标杆的值
        flag=!flag;
    }
    //下一曲
    function nextMusic(){
        //自增
        num++;
        //判断是否是最后一首歌曲
        if(num>musicSrc.length-1){
            //跳转到第一首歌曲
            num=0;
        }
        //设置歌曲
        audio.src=audio.musicSrc[num]
        //切换标杆
        flag=true;
        //调用播放函数
        audio.player();
    }
    //上一曲
    function prevMusic(){
        //自减
        num--;
        //判定
        if(num<0){
            num=musicSrc.length-1;
        }

        //设置歌曲
        audio.src=musicSrc[num];
        //切换标杆 
        flag=true;

        //播放
        audio.player();
    }























}

