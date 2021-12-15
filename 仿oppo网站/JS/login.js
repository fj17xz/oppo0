window.onload = function () {
  // input标签输入内容，默认值消失
  let phone = document.getElementById("phone");
  phone.onclick = function () {
    if (this.value == '请输入手机号码') {
      this.value = '';
    }
  }
  phone.onblur = function () {
    if (this.value == '') {
      this.value = '请输入手机号码';
    }
  }

  // 判断号码是否大于11，改变验证码按钮颜色
  let button = document.getElementById("btn");
  phone.addEventListener('input', event => {
    if (event.currentTarget.value >= 11) {
      button.style.background = "#2AD181";
      button.style.color = "#fff";
      button.style.cursor = "pointer";
    }
  })
}
