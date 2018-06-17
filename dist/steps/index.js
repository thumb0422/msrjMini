<<<<<<< HEAD
'use strict';

Component({
  properties: {
    type: {
      type: String,
      value: 'horizon'
    },

    hasDesc: {
      type: Boolean,
      value: false
    },

    steps: { // 必须
      type: Array,
      value: []
    },

    className: String
  }
});
=======
Component({
    externalClasses: ['i-class'],
    properties : {
        current : {
            type : Number,
            value : -1,
            observer : '_updateDataChange'
        },
        status : {
            type : String,
            //wait、process、finish、error
            value : ''
        },
        direction : {
            type : String,
            //value has horizontal or vertical 
            value : 'horizontal'
        } 
    },
    relations : {
        '../step/index' : {
            type : 'child',
            linked(){
                this._updateDataChange();
            },
            linkChanged () {
                this._updateDataChange();
            },
            unlinked () {
                this._updateDataChange();
            }
        }
    },
    methods: {
        _updateDataChange() {
            let steps = this.getRelationNodes('../step/index');
            const len = steps.length;
            if (len > 0) {
                steps.forEach((step, index) => {
                    step.updateDataChange({
                        len : len,
                        index : index,
                        current : this.data.current,
                        direction : this.data.direction
                    });
                });
            }
        }
    }
})
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
