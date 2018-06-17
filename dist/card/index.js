<<<<<<< HEAD
'use strict';

Component({
  options: {
    multipleSlots: true
  },

  externalClasses: ['card-class'],

  properties: {
    useThumbSlot: {
      type: Boolean,
      value: false
    },
    useDetailSlot: {
      type: Boolean,
      value: false
    },
    thumb: String,
    price: String,
    title: String,
    num: Number,
    desc: String,
    status: String
  }
});
=======
Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    properties: {
        full: {
            type: Boolean,
            value: false
        },
        thumb: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        extra: {
            type: String,
            value: ''
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
