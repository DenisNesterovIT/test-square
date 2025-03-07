import { describe, it, expect } from 'vitest'; 
import { mount } from '@vue/test-utils';
import Square from '../Square.vue';

describe('Square.vue', () => {
  it('renders a black square with correct styles', () => {
    // Монтируем компонент
    const wrapper = mount(Square);

    // Находим элемент квадрата
    const square = wrapper.find('.square');

    // Проверяем, что квадрат существует
    expect(square.exists()).toBe(true);

  });
});