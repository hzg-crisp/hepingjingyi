
//设置顶部下拉框
(function(){
var li=document.querySelectorAll(".rank-list li")
for(let k=0;k<li.length;k++){
    //鼠标移入事件
    li[k].onmouseover=function(){
        for(let k=0;k<li.length;k++){
            li[k].className="";
        }
        //鼠标移入的那个元素
        this.className="rank-active";
    }
}
})();
//设置根元素 font-size随窗口大小改变
(function (win,doc){
    //判断浏览器是否支持addEventListener
    if (!win.addEventListener) return; 
    var html=document.documentElement; 
    function setFont() {
        var w = html.clientWidth,
            h = html.clientHeight;
        html.style.fontSize= w > h ? w/1920*100+"px" : w/1100*100+"px";
        //    setTimeout(function() {
        //     document.getElementsByTagName("body")[0].style.opacity = "1";
        // }, 50);
    } 
    win.addEventListener('resize',setFont,false);
    //当HTML 文档被加载和解析完成后，DOMContentLoaded 事件便会被触发。
    doc.addEventListener('DOMContentLoaded',setFont,false);
})(window,document);
//鼠标滚轮事件
(function (win){
    //设置滚轮事件状态
    var finished=true;
    var runhorse=document.querySelectorAll(".part-3 .runhorse")
    console.log(runhorse)
    if(!window.addEventListener) return;
    var inputC=document.getElementsByTagName("input")
    // 改变滚轮事件状态
    function chagestate(){
        finished=true;
    }
    function wheel(event){
        if (finished) {
            finished=false;
            setTimeout(chagestate,800)
            var delta = 0;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 150;
            }
            if (delta) {
                handle(delta, inputC)
            }
        }
    };
    //判断浏览器是否支持添加事件
    if(win.addEventListener){
    win.addEventListener('mousewheel',wheel);
    }
    runhorse[0].addEventListener("mouseover",function(){
        win.removeEventListener('mousewheel',wheel);
    })
    runhorse[0].addEventListener("mouseout",function(){
        win.addEventListener('mousewheel',wheel);
    })
})(window);

function handle(delta,arr){
    var num;
    var nav=document.getElementsByClassName("nav");
    var navup=document.getElementsByClassName("nav_up")
    for(var i=0;i<arr.length;i++){//得到当前checked元素的下标
        if(arr[i].checked){
            num=i;
        }
    }
    if(delta>0 && num>0){//向上滚动
        num--;
        arr[num].checked=true;
        //设置滚动后 侧边栏显示，同时上边消失
        if(!arr[0].checked){
            nav[0].style.display="block"
            document.getElementsByClassName("header")[0].style.display="none"
        }else if(arr[0].checked){
            nav[0].style.display="none"
            document.getElementsByClassName("header")[0].style.display="flex"
        }
    }else if(delta<0 && num<5){//向下滚动
        num++;
        arr[num].checked=true;
        if(!arr[0].checked){
            nav[0].style.display="block"
            document.getElementsByClassName("header")[0].style.display="none"
        }else if(arr[0].checked){
            nav[0].style.display="none"
            document.getElementsByClassName("header")[0].style.display="flex"
        }
    }
    // 点击箭头,跳到上一屏
    navup[0].onclick=function(){
        num--;
        arr[num].checked=true;
        if(arr[0].checked==false){
            nav[0].style.display="block"
            document.getElementsByClassName("header")[0].style.display="none"
        }else if(arr[0].checked==true){
            nav[0].style.display="none"
            document.getElementsByClassName("header")[0].style.display="flex"
        }
    }
}

//导航栏 点击切换
(function (){
    var inputC=document.getElementsByTagName("input")   
    var navspan = document.querySelectorAll(".nav>li>[class*=sp]")
    for (let k = 0; k < navspan.length; k++) {
        navspan[k].onclick = function () {
            inputC[k+1].checked = true;
        }
    }
})();

//播放视频
(function(){
    //播放视频
    var oatn=document.querySelectorAll(".player>.video1")
    //按钮
    var ovideo=document.getElementsByClassName('play');
    //获取遮罩层
    var overplay=document.getElementsByClassName('overplay')
    //获取播放器
    var player=document.getElementsByClassName('player')
    //获取关闭按钮
    var close=document.getElementsByClassName("close")
    ovideo[0].onclick=function(){
        overplay[0].style.display="block";
        player[0].style.display="block";
        oatn[0].innerHTML='<embed src="https://v.qq.com/txp/iframe/player.html?vid=n00353k22ze" allowFullScreen="true" width="900" height="600"></embed>';
    }
    close[0].onclick=function(){
        overplay[0].style.display="none";
        player[0].style.display="none";
        oatn[0].innerHTML=""
    }
})();

//part4手风琴-天气
(function(){
    var weather=document.querySelectorAll(".weather>div")
    var weatherimg=document.querySelectorAll(".weather>div>img")
    var weatherspan=document.querySelectorAll(".weather>div>span")
    for(let i=0;i<weather.length;i++){
        //鼠标移入事件
        weather[i].addEventListener('mouseover',function(){
            for(let i=0;i<weather.length;i++){
                weather[i].style.width="22%"
            }
            weatherspan[i].style.opacity="0";
        this.style.width="56%"
        });
        weather[0].addEventListener('mouseover',function(){
            weatherimg[0].style.left="0px"
            weatherimg[0].style.opacity="1"
        });
        weather[2].addEventListener('mouseover',function(){
            weatherimg[2].style.right="0px"
            weatherimg[2].style.opacity="1"
        });
        //鼠标移出事件
        weather[i].onmouseout=function(){
            weather[0].style.width="33%"
            weather[1].style.width="34%"
            weather[2].style.width="33%"
            weatherspan[i].style.opacity="1";
        }
        weather[0].addEventListener('mouseout',function(){
            weatherimg[0].style.left="-1.5rem"
            weatherimg[0].style.opacity="0.6"
        });
        weather[2].addEventListener('mouseout',function(){
            weatherimg[2].style.right="-1.5rem"
            weatherimg[2].style.opacity="0.6"
        });
    }
})();

//part4手风琴-地形
(function(){
    var terrain=document.querySelectorAll(".terrain>div")
    var terrainimg=document.querySelectorAll(".terrain>div>img")
    var terrainspan=document.querySelectorAll(".terrain>div>span")
    for(let i=0;i<terrain.length;i++){
        // 鼠标移入事件
        terrain[i].addEventListener('mouseover',function(){
            for(let i=0;i<terrain.length;i++){
                terrain[i].style.width="15%"
            }
            terrainspan[i].style.opacity="0";
            terrainimg[i].style.opacity="1";
            this.style.width="40%"
        });
        terrain[0].addEventListener('mouseover',function(){
            terrainimg[0].style.left="0px"
        });
        terrain[1].addEventListener('mouseover',function(){
            terrainimg[1].style.left="0px"
        });
        terrain[3].addEventListener('mouseover',function(){
            terrainimg[3].style.right="0px"
        });
        terrain[4].addEventListener('mouseover',function(){
            terrainimg[4].style.right="0px"
        });
        // 鼠标移出事件
        terrain[i].onmouseout=function(){
            for(let i=0;i<terrain.length;i++){
                terrain[i].style.width="20%"
            }
            terrainspan[i].style.opacity="1"
            terrainimg[i].style.opacity="0.6"; 
        };
        terrain[0].addEventListener('mouseout',function(){
            terrainimg[0].style.left="-1rem"
        });
        terrain[1].addEventListener('mouseout',function(){
            terrainimg[1].style.left="-1rem"
        });
        terrain[3].addEventListener('mouseout',function(){
            terrainimg[3].style.right="-1rem"
        });
        terrain[4].addEventListener('mouseout',function(){
            terrainimg[4].style.right="-1rem"
        });
    }
})();

// 点击切换天气地形
(function(){
    var convert=document.querySelectorAll(".convert>div")
    var weather=document.getElementsByClassName("weather")
    var terrain=document.getElementsByClassName("terrain")
    for(var i=0;i<convert.length;i++){
        convert[0].onclick=function(){
             //点击天气
            weather[0].style.opacity = "1";
            weather[0].style.display = "block";
            terrain[0].style.opacity = "0";
            terrain[0].style.display = "none";
            for(var i=0;i<convert.length;i++){
                convert[i].className=""
            }
            this.className="on"
        }
        convert[1].onclick=function(){
            //点击天气
           weather[0].style.opacity = "0";
           weather[0].style.display = "none";
           terrain[0].style.opacity = "1";
           terrain[0].style.display = "block";
           for(var i=0;i<convert.length;i++){
               convert[i].className=""
           }
           this.className="on"
       }
    }
})();

// 组队开车 团队竞技
(function(){
    var tabList=document.querySelectorAll(".tab_list>li")
    var vehicle=document.querySelectorAll(".box img");
     //图片索引
    var index;
    //计时事件
    var timer;
    automove(0);
    // 点击换车
    for (var i = 0; i < tabList.length; i++) {
        //为每个按钮添加索引。
        var num;
        tabList[i].num = i;
        tabList[i].onclick = function () {
            var index=this.num;
            console.log(this.num)
            clearInterval(timer);
            moverbutton(index);
            move(index,automove(index))
            
        }
    }
    //自动换车
    function automove(index){
        timer=setInterval(function () {
            move(index,function(){
            })
            moverbutton(index)
            index++
            if(index==5){
                index=0;
            }
        }, 1000);
    }
    //切换图片
    function move(index,callback) {   
        for (var i = 0; i < vehicle.length; i++) {
            vehicle[i].style.opacity = "0"
        }
        vehicle[index].style.opacity = "1"
        callback()
    }
    //改变按钮样式
    function moverbutton(index) {
        for (var i = 0; i < tabList.length; i++) {
            tabList[i].className = ""
        }
        tabList[index].className = "on"
    }
})();

//写实体验，战术竞技
(function(){
    var part2=document.getElementsByClassName("part-2");
    var title=document.querySelectorAll(".part-2>.title")
    //点击加号
    var tips_click=document.getElementsByClassName("tips_click");
    var video=document.querySelectorAll(".part-2>.bg")
    var title12=document.querySelectorAll(".part-2>.title>span")
    var title_sub=document.querySelectorAll(".part-2>.title_sub")
    tips_click[0].onclick=function(){
        video[0].style.display="none"
        title12[0].style.left="-4.68rem"
        title12[1].style.right="4.68rem"
        title_sub[0].style.marginLeft="-7.26rem"
        playsheep()
        this.style.display="none"
    }
    //放羊
var playsheep= function(){
    var obj={
    stage:document.querySelectorAll(".part-2>.stage")[0],
    //最大羊数量
    maxSheep:8,
    frequency: 70
}
creatSheep()
//构造方法创建羊对象
function Sheep(data){
    this.sheep=document.createElement("div");
    this.stage=data.stage;
    data.stage.appendChild(this.sheep);
    this.sheep.className='sheep';
    this.speed=7;
    //羊的移动速度
    this.frequencyNum = Math.floor(Math.random() * data.frequency) + 30;
    console.log(this.frequencyNum)
    this.sheepWith = this.sheep.offsetWidth;
    this.sheepLeft = this.sheep.offsetLeft;
    //羊的号码
    this.num=1;
    this.top=0;
    this.cot=0;
}

//产生羊
function creatSheep(){
    var timer=setInterval(function(){
        //获取羊的数量
        var sheepNum=obj.stage.children.length;
        if(sheepNum > 7){
            return false
        }else{
            var sheep=new Sheep(obj)
            sheepRun(sheep)
        }
    },1000)
}
//移动羊
function sheepRun(sheep) {
    //原地跑
    var freeRun = setInterval(function () {
        sheep.num = 164 + sheep.num
        if (sheep.num > 1148) {
            sheep.num = 0
        }
        sheep.sheep.style.backgroundPosition = -sheep.num + 'px ' + sheep.top + 'px';
    }, sheep.frequencyNum)
    //动起来
    var run = setInterval(function () {
        sheep.cot = sheep.sheep.offsetLeft - sheep.speed;
        if (sheep.cot < -sheep.sheepWith) {
            clearInterval(run);
            clearInterval(freeRun);
            sheep.stage.removeChild(sheep.sheep);
        }
        sheep.sheep.style.left = sheep.cot + 'px';
    }, sheep.frequencyNum)
    sheep.sheep.addEventListener('mousedown', function (e) {
        var event = event || e;
        sheep.top = -128;
        sheep.speed = 0;
        sheep.x = event.pageX;
        sheep.y = event.pageY;
        document.addEventListener('mousemove', sheepMove)
        function sheepMove(e) {
            var event = event || e;
            sheep.sheep.style.left = sheep.sheep.offsetLeft + (event.pageX - sheep.x) + 'px';
            sheep.sheep.style.top = sheep.sheep.offsetTop + (event.pageY - sheep.y) + 'px';
            sheep.x = event.pageX;
            sheep.y = event.pageY;
        }
        sheep.sheep.addEventListener('mouseup', function (e) {
            var event = event || e;
            sheep.top = 0;
            sheep.speed = 7;
            document.removeEventListener('mousemove', sheepMove)
        })
    });
}
};
})();

//大世界 射击体验
(function(){
    var part3=document.getElementsByClassName("part-3");
    var title=document.querySelectorAll(".part-3>.title")
    //点击加号
    var tips_click=document.getElementsByClassName("tips_click");
    var video=document.querySelectorAll(".part-3>.video1")
    var title12=document.querySelectorAll(".part-3>.title>span")
    var title_sub=document.querySelectorAll(".part-3>.title_sub")
    var part3bg=document.querySelectorAll(".part-3>.bg")
    var part_jingdu=document.querySelectorAll(".part-3>.part_jingdu")
    tips_click[1].onclick=function(){
        part_jingdu[0].style.display="block"
        part3bg[0].style.display="block"
        video[0].style.display="none"
        title12[0].style.left="-4.68rem"
        title12[0].style.top="-3rem"
        title12[1].style.right="4.68rem"
        title12[1].style.top="-2rem"
        title_sub[0].style.marginLeft="-7.26rem"
        title_sub[0].style.top="3.5rem"
        this.style.display="none"
    }
    //走马灯
    var runhorse=document.querySelectorAll(".part-3 .runhorse")
    var horse=document.querySelectorAll(".runhorse>ul")
    var block = document.querySelectorAll(".runhorse .block")
    // 速度
    var speed
    var distance=0;
    var state=true
    //鼠标坐标
    var clientX;
    var clientY;
    dragBlock()
    //自动跑
    var autorun = setInterval(function () {
        if (state) {
            if (block[0].offsetLeft == 0) {
                speed = 1
            } else if (block[0].offsetLeft == 921) {
                speed = -1
            }
            block[0].style.left = block[0].offsetLeft + speed + "px";
            distance = block[0].offsetLeft * (1620 / 921)
            horse[0].style.left = -distance + "px ";
        }
    }, 30)
    runhorse[0].addEventListener("mouseover",function(){
        state=false
    })
    runhorse[0].addEventListener("mouseout",function(){
        state=true
    })
    //拖动滑动
    function dragBlock() {
        block[0].addEventListener("mousedown", function (e) {
            var event = event || e;
            clientX = event.pageX;
            clientY = event.pageY;
            document.addEventListener("mousemove", blockMove)
            function blockMove(e) {
                var event = event || e;
                block[0].style.left = block[0].offsetLeft + (event.pageX - clientX) + "px";
                if (block[0].offsetLeft <= 0) {
                    block[0].style.left = 0
                } else if (block[0].offsetLeft >= 921) {
                    block[0].style.left = 921 + "px"
                }
                clientX = event.pageX
                clientY = event.pageY
                distance = block[0].offsetLeft * (1620 / 921)
                horse[0].style.left = -distance + "px ";
                
            }
            document.addEventListener("mouseup", function () {
                document.removeEventListener('mousemove', blockMove)
            })
        })
    }
    //滚轮滑动
    runhorse[0].addEventListener("mousewheel", function (e) {
        var event = event || e;
        var delta = 0;
        console.log(1561651)
        if (event.wheelDelta) {
            delta = event.wheelDelta / 150;
        }
        runmove(delta)
    })
    //图片滑动
    function runmove(delta) {
        distance = block[0].offsetLeft * (1620 / 921)
        //向上滑动
        if (delta > 0) {
            block[0].style.left =block[0].offsetLeft-20 + "px";
        } else if (delta < 0) {
            block[0].style.left =block[0].offsetLeft+20 + "px";
        }
        if (block[0].offsetLeft <= 0) {
            block[0].style.left = 0
        } else if (block[0].offsetLeft >= 921) {
            block[0].style.left = 921 + "px"
        }
        horse[0].style.left = -distance + "px ";
    }
})();

