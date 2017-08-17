function toast(msg,delay) {

    var left = innerWidth/2-100+'px';
    var top = innerHeight/2-15+'px';

    var css = 'width:200px;height:30px;color:rgba(0,0,0,0);background:rgba(0,0,0,0);';
    css += 'line-height:30px;text-align:center; position: absolute;left:'+left+'; top:'+top+'; border-radius:2px;'
    var html = '<div id='+'toast'+'>'+msg+'</div>';
    var to = document.body;

    if(document.getElementById('toast') == null) to.innerHTML += html;
    var toast = document.getElementById('toast').style=css;

    var count=1;
    var a=0.25;

    var addAnimation = setInterval(function () {
        addColor();
    },100);

    function addColor() {
        count+=2;
        a+=0.05;

        //console.log(a);
        getId('toast').style.background='rgba(0,0,0,'+a+')';
        getId('toast').style.color='rgba(255,255,255,'+a+')';

        if(count >= 18){

            // 延时默认1秒
            if(delay < 10) delay = 1000;

            setTimeout(function () {
                clearInterval(addAnimation);
                //  执行减色动画
                var reduceAnimation = setInterval(function () {
                    reduceColor();
                },100);

                function reduceColor() {

                    count -=2;
                    a -=0.05;
                    //console.log(a);
                    getId('toast').style.background='rgba(0,0,0,'+a+')';
                    getId('toast').style.color='rgba(255,255,255,'+a+')';
                    if(count <= 1) {
                        clearInterval(reduceAnimation);
                        getId('toast').style.display='none';
                    }
                }
            },delay);
        }
    }
}

function trim(str)
{
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    // if(is_global.toLowerCase()=="g")
    // {
    //     result = result.replace(/\s/g,"");
    // }
    result = result.replace(/\s/g,"");
    return result;
}


// 获取标识
function getID(s) {

    var rs = document.getElementsByClassName(s)[0];
    if(rs != null) return rs;
    rs = document.getElementById(s);
    if(rs != null) return rs;
    rs = document.getElementsByName(s)[0];
    if(rs != null) return rs;
    alert("没有获取到任何标识");
    return;
}