/**
 * Created by Administrator on 2019-04-29.
 */

window.onload=function () {
    let oBtn=document.getElementById("btn");
    let oNum=document.getElementById("num");
    let oBox=document.getElementById("box");
    
    oBtn.onclick=function () {
        const xhr=new XMLHttpRequest();
        let number=oNum.value;
        xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);
        xhr.send();
        xhr.onload=function () {
            if(this.status===200){
                let arr=JSON.parse(this.responseText).value;
                let str="";
                for(let i=0;i<arr.length;i++){
                    str+="<li>"+arr[i].joke+"</li>"
                }
                oBox.innerHTML=str;
            }
        };
        xhr.onerror=function () {
            console.log("大兄弟，出错了！");
        }
    }
}