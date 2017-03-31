/**
 * Created by andrew on 29/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reflections_1 = require("../models/Reflections");
var actions_1 = require("../actions");
var initialState = new Reflections_1.Reflections();
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.ReflectionsActions.RESET_REFLECTIONS: {
            return initialState;
        }
        case actions_1.ReflectionsActions.GET_REFLECTIONS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
exports.default = default_1;
