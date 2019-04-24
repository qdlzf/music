
/*
    功能名:事件注册功能

    使用说明:
        addEvent(obj,type,fn);


    说明:
        obj:表示事件源
        type:表示事件类型
        fn:表示处理函数


*/

//注册
function addEvent(obj,type,fn){
    //非IE
    if(obj.addEventListener){
       obj.addEventListener(type,fn,false); 
    }else{
    //IE
       obj.attachEvent("on"+type,fn);
    }
}

