<<<<<<< HEAD
'use strict';

var DEFAULT_DATA = {
  show: false,
  message: '',
  icon: '',
  image: '',
  mask: false
};

var SUPPORT_TYPE = ['loading', 'success', 'fail'];

Component({
  data: Object.assign({}, DEFAULT_DATA),

  methods: {
    show: function show(options) {
      var toastOptions = Object.assign({}, options);

      var icon = options.icon || '';
      var image = options.image || '';
      if (SUPPORT_TYPE.indexOf(options.type) > -1) {
        icon = options.type;
        image = '';
      }

      this.setData(Object.assign({}, toastOptions, {
        icon: icon,
        image: image
      }));
    },
    clear: function clear() {
      this.setData(Object.assign({}, DEFAULT_DATA));
    }
  }
});
=======
const default_data = {
    visible: false,
    content: '',
    icon: '',
    image: '',
    duration: 2,
    mask: true,
    type: 'default', // default || success || warning || error || loading
};

let timmer = null;

Component({
    externalClasses: ['i-class'],

    data: {
        ...default_data
    },

    methods: {
        handleShow (options) {
            const { type = 'default', duration = 2 } = options;

            this.setData({
                ...options,
                type,
                duration,
                visible: true
            });

            const d = this.data.duration * 1000;

            if (timmer) clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(() => {
                    this.handleHide();
                    timmer = null;
                }, d);
            }
        },

        handleHide () {
            this.setData({
                ...default_data
            });
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
