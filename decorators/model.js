"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setModel = void 0;
function setModel(model) {
    return function (target, propertyKey) {
        if (!target.hasOwnProperty('models')) {
            target['models'] = [];
        }
        target['models'].push({
            property: propertyKey,
            class: model
        });
    };
}
exports.setModel = setModel;
//# sourceMappingURL=model.js.map