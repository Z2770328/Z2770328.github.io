// 获取switch开关
const swch = document.querySelector('#switch')
// 找到云和风
const cloud_wind_groups = document.querySelectorAll('.cloud_wind_group')
// 找到tree
const tree = document.querySelector('.tree')
// 找到风扇fan元素
const fan = document.querySelectorAll('.windmill .head .fan')
if (swch.addEventListener) {
  // 所有主流浏览器，除了 IE 8 及更早版本
  swch.addEventListener('click', switchBtn)
} else if (swch.attachEvent) {
  // IE 8 及更早版本
  swch.attachEvent('onclick', switchBtn)
}
function switchBtn() {
  // 方法一
  // swch.classList.toggle('switched')
  // 方法二
  if (swch.classList.contains('switched')) {
    // 移除样式
    swch.classList.remove('switched')
    cloud_wind_groups.forEach(element => {
      element.style.setProperty('--wind_group_speed','12s')
    })
    tree.style.setProperty('--tree_speed','4s')
    fan.forEach(element => {
      // 不选中为慢
      element.style.setProperty('--fan_speed','5s')
    })
  } else {
    // 添加样式
    swch.classList.add('switched')
    cloud_wind_groups.forEach(element => {
      element.style.setProperty('--wind_group_speed','6s')
    })
    tree.style.setProperty('--tree_speed','1s')
    fan.forEach(element => {
      // 选中为快
      element.style.setProperty('--fan_speed','1s')
    })
    
  }
}
