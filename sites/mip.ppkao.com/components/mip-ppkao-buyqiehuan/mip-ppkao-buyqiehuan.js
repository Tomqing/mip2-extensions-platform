/**
 * @file mip-ppkao-buyqiehuan 组件
 * @author
 */
export default class MIPBuyqiehuan extends MIP.CustomElement {
  build () {
    let $ = require('zepto')
    let customElement = require('customElement').create()

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
      let ele = $(this.element)
      let chooseLi = ele.find('.choose-vip ul li')
      chooseLi.click(function () {
        $(this).addClass('check').siblings().removeClass('check')
      })
    }
    return customElement
  }
}