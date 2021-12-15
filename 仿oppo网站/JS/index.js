// window.onload()方法用于在网页加载完毕后立刻执行的操作
window.onload = function () {

  // 1.点击logo返回顶部
  logo.onclick = function () {
    //     scrollBy(x,y)方法滚动当前window中显示的文档，x和y指定滚动的相对量
    // 　　只要把当前页面的滚动长度作为参数，逆向滚动，则可以实现回到顶部的效果
    let top = document.body.scrollTop || document.documentElement.scrollTop
    scrollBy(0, -top);
  }

  // 2.移动到侧边导航栏，显示相应内容
  let nav = document.getElementsByTagName("nav");
  let ul = nav[0].querySelector("ul");
  let div = nav[0].querySelector("div");
  ul.onmousemove = function () {
    div.style.display = "block";
  };
  ul.onmouseout = function () {
    div.style.display = "none";
  }

  // 3.轮播图
  let swiper = document.getElementsByClassName("swiper");
  let img = swiper[0].querySelectorAll("img");
  let spot = document.getElementsByClassName("swiper-spot");
  console.log(spot[0]);
  let li = spot[0].querySelectorAll("li");
  console.log(li);
  var index = 1;
  li[0].style.background = "#7B7B7B";
  // 轮播方法
  function lunbo() {
    index++;
    //判断index是否大于4
    if (index > 4) {
      index = 1;
    }
    img[0].src = "images/main" + index + ".jpg";
    li[index - 1].style.background = "#7B7B7B";
    for (let i = 0; i <= 3; i++) {
      if (i != (index - 1)) {
        li[i].style.background = "#fff";
      }
    }
  }
  //定义定时器
  setInterval(lunbo, 2000);
}

