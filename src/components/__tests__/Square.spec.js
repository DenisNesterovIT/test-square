"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var Square_vue_1 = require("../Square.vue");
(0, vitest_1.describe)('Square.vue', function () {
    (0, vitest_1.it)('renders a black square with correct styles', function () {
        // Монтируем компонент
        var wrapper = (0, test_utils_1.mount)(Square_vue_1.default);
        // Находим элемент квадрата
        var square = wrapper.find('.square');
        // Проверяем, что квадрат существует
        (0, vitest_1.expect)(square.exists()).toBe(true);
    });
});
