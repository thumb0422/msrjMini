<<<<<<< HEAD
'use strict';

Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    },

    loading: {
      type: Boolean,
      value: false
    },

    disabled: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    handleZanSwitchChange: function handleZanSwitchChange() {
      if (this.data.loading || this.data.disabled) {
        return;
      }
      var checked = !this.data.checked;
      this.triggerEvent('change', {
        checked: checked,
        loading: this.data.loading
      });
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],
    properties : {
        value : {
            type : Boolean,
            value : false
        },
        //large small default
        size : {
            type : String,
            value : 'default'
        },
        // is or not disable
        disabled : {
            type : Boolean,
            value : false
        },
        // hidden inut name
        name : {
            type : String,
            value : ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods : {
        toggle(){
            if( this.data.disabled ) return;
            const data = this.data;
            const value = data.value ? false : true;
            this.triggerEvent('change',{
                value : value
            })
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
