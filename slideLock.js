//一、定義一個獲取DOM元素的方法
var $ = function(selector){
    return document.querySelector(selector);
},
box = $(".drag"),   //容器
bg = $(".bg"),      //背景
text = $(".text"),  //文字
btn = $(".btn"),    //滑塊
success = false,    //是否通過驗證的標誌
distance = box.offsetWidth - btn.offsetWidth;//滑動成功的寬度（距離）
//二、給滑塊註冊鼠標按下事件
btn.onmousedown = function(e){
    //1.鼠標按下之前必須清除掉後面設置的過渡屬性
    btn.style.transition = "";
    bg.style.transition ="";
    //說明：clientX 事件屬性會返回當事件被觸發時，鼠標指針向對於瀏覽器頁面(或客戶區)的水平座標。
    //2.當滑塊位於初始位置時，得到鼠標按下時的水平位置
    var e = e || window.event;
    var downX = e.clientX;

    //三、給文檔註冊鼠標移動事件
    document.onmousemove = function(e){
        var e = e || window.event;
        //1.獲取鼠標移動後的水平位置
        var moveX = e.clientX;
        //2.得到鼠標水平位置的偏移量（鼠標移動時的位置 - 鼠標按下時的位置）
        var offsetX = moveX - downX;
        //3.在這裏判斷一下：鼠標水平移動的距離 與 滑動成功的距離 之間的關係
        if( offsetX > distance){
            offsetX = distance;//如果滑過了終點，就將它停留在終點位置
        }else if( offsetX < 0){
            offsetX = 0;//如果滑到了起點的左側，就將它重置爲起點位置
        }
        //4.根據鼠標移動的距離來動態設置滑塊的偏移量和背景顏色的寬度
        btn.style.left = offsetX + "px";
        bg.style.width = offsetX + "px";
        //如果鼠標的水平移動距離 = 滑動成功的寬度
        if( offsetX == distance){
            //1.設置滑動成功後的樣式
            text.innerHTML = "驗證通過";
            text.style.color = "#fff";
            btn.innerHTML = "√";
            btn.style.color = "green";
            bg.style.backgroundColor = "lightgreen";
            //2.設置滑動成功後的狀態
            success = true;
            //成功後，清除掉鼠標按下事件和移動事件（因爲移動時並不會涉及到鼠標鬆開事件）
            btn.onmousedown = null;
            document.onmousemove = null;
            //3.成功解鎖後的回調函數
            setTimeout(function(){
                $('.flex-box').style.display = "none";
                $('.img').style.display = "block";
                $('.footer').style.display = "none";
            },100);
        }
    }
    //四、給文檔註冊鼠標鬆開事件
    document.onmouseup = function(e){
        //如果鼠標鬆開時，滑到了終點，則驗證通過
        if(success){
            return;
        }else{
            //反之，則將滑塊復位（設置了1s的屬性過渡效果）
            btn.style.left = 0;
            bg.style.width = 0;
            btn.style.transition = "left 1s ease";
            bg.style.transition = "width 1s ease";
        }
        //只要鼠標鬆開了，說明此時不需要拖動滑塊了，那麼就清除鼠標移動和鬆開事件。
        document.onmousemove = null;
        document.onmouseup = null;
    }
}