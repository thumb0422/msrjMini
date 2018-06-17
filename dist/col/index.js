<<<<<<< HEAD
'use strict';

Component({
  externalClasses: ['col-class'],

  relations: {
    '../row/index': {
      type: 'parent'
    }
  },

  properties: {
    col: {
      value: 0,
      type: Number
    },
    offset: {
      value: 0,
      type: Number
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],

    relations: {
        '../row/index': {
            type: 'parent'
        }
    },

    properties: {
        span: {
            value: 0,
            type: Number
        },
        offset: {
            value: 0,
            type: Number
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
