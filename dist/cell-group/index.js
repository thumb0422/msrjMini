<<<<<<< HEAD
'use strict';

var _relations;

var CELL_PATH = '../cell/index';
var FIELD_PATH = '../field/index';

Component({
  relations: (_relations = {}, _relations[CELL_PATH] = {
    type: 'child',
    linked: function linked() {
      this._updateIsLastElement(CELL_PATH);
    },
    linkChanged: function linkChanged() {
      this._updateIsLastElement(CELL_PATH);
    },
    unlinked: function unlinked() {
      this._updateIsLastElement(CELL_PATH);
    }
  }, _relations[FIELD_PATH] = {
    type: 'child',
    linked: function linked() {
      this._updateIsLastElement(FIELD_PATH);
    },
    linkChanged: function linkChanged() {
      this._updateIsLastElement(FIELD_PATH);
    },
    unlinked: function unlinked() {
      this._updateIsLastElement(FIELD_PATH);
    }
  }, _relations),

  data: {
    elementUpdateTimeout: 0
  },

  methods: {
    _updateIsLastElement: function _updateIsLastElement(childPath) {
      var _this = this;

      // 用 setTimeout 减少计算次数
      if (this.data.elementUpdateTimeout > 0) {
        return;
      }

      var elementUpdateTimeout = setTimeout(function () {
        _this.setData({ elementUpdateTimeout: 0 });
        var elements = _this.getRelationNodes(childPath);
        if (elements.length > 0) {
          var lastIndex = elements.length - 1;

          elements.forEach(function (cell, index) {
            cell.updateIsLastElement(index === lastIndex);
          });
        }
      });

      this.setData({ elementUpdateTimeout: elementUpdateTimeout });
    }
  }
});
=======
Component({
    externalClasses: ['i-class'],

    relations: {
        '../cell/index': {
            type: 'child',
            linked () {
                this._updateIsLastCell();
            },
            linkChanged () {
                this._updateIsLastCell();
            },
            unlinked () {
                this._updateIsLastCell();
            }
        }
    },

    methods: {
        _updateIsLastCell() {
            let cells = this.getRelationNodes('../cell/index');
            const len = cells.length;

            if (len > 0) {
                let lastIndex = len - 1;

                cells.forEach((cell, index) => {
                    cell.updateIsLastCell(index === lastIndex);
                });
            }
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
