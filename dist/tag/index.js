<<<<<<< HEAD
"use strict";

Component({
  properties: {
    type: {
      type: String
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],
    properties : {
        //slot name
        name : {
            type : String,
            value : ''
        },
        //can click or not click
        checkable : {
            type : Boolean,
            value : false
        },
        //is current choose
        checked : {
            type : Boolean,
            value : true
        },
        //background and color setting
        color : {
            type : String,
            value : 'default'
        },
        //control fill or not
        type : {
            type : String,
            value : 'dot'
        } 
    },
    methods : {
        tapTag(){
            const data = this.data;
            if( data.checkable ){
                const checked = data.checked ? false : true;
                this.triggerEvent('change',{
                    name : data.name || '',
                    checked : checked
                });
            }
        }
    }
})
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
