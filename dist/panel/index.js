<<<<<<< HEAD
'use strict';

Component({
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 内容区顶部是否取消10像素的间距
    hideTop: {
      type: Boolean,
      value: false
    },
    // 内容区顶部是否取消边框
    hideBorder: {
      type: Boolean,
      value: false
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],

    properties: {
        title: {
            type: String,
            value: ''
        },
        // 标题顶部距离
        hideTop: {
            type: Boolean,
            value: false
        },
        hideBorder: {
            type: Boolean,
            value: false
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
