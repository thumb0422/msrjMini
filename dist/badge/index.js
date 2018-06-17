<<<<<<< HEAD
'use strict';

var DEFAULT_COLOR = '#fff';
var DEFAULT_BACKGROUND_COLOR = '#f44';
var DEFAULT_FONT_SIZE = 10;
var DEFAULT_BOX_SHADOW = '0 0 0 2px #fff';

Component({
  properties: {
    color: {
      type: String,
      value: DEFAULT_COLOR
    },
    backgroundColor: {
      type: String,
      value: DEFAULT_BACKGROUND_COLOR
    },
    fontSize: {
      type: Number,
      value: DEFAULT_FONT_SIZE
    },
    boxShadow: {
      type: String,
      value: DEFAULT_BOX_SHADOW
    }
  }
});
=======
Component({
    externalClasses: ['i-class', 'i-class-alone'],

    properties: {
        count: {
            type: Number,
            value: 0,
            observer: 'finalCount'
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        dot: {
            type: Boolean,
            value: false
        },
    },
    data: {
        finalCount: 0
    },
    methods: {
        finalCount() {
            this.setData({
                finalCount: parseInt(this.data.count) >= parseInt(this.data.overflowCount) ? `${this.data.overflowCount}+` : this.data.count
            });
        },
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
