<<<<<<< HEAD
'use strict';

Component({
  externalClasses: 'class',

  properties: {
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      value: 0
    },
    list: {
      type: Array,
      value: []
    },
    selectedId: {
      type: [String, Number],
      value: ''
    }
  },

  methods: {
    _handleZanTabChange: function _handleZanTabChange(e) {
      var selectedId = e.currentTarget.dataset.itemId;

      this.setData({
        selectedId: selectedId
      });

      console.info('[zan:tab:change] selectedId:', selectedId);
      this.triggerEvent('tabchange', selectedId);
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],

    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },

    properties: {
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },

    data: {
        current: false,
        currentColor: '',
        scroll: false
    },

    methods: {
        changeCurrent (current) {
            this.setData({ current });
        },
        changeCurrentColor (currentColor) {
            this.setData({ currentColor });
        },
        changeScroll (scroll) {
            this.setData({ scroll });
        },
        handleClickItem () {
            const parent = this.getRelationNodes('../tabs/index')[0];
            parent.emitEvent(this.data.key);
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
