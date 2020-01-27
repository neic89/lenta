import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

const clickHandler = jest.fn();

afterEach(() => {
    clickHandler.mockReset();
});

test('Button render text props', () => {
    const wrapper = shallow(<Button text="Добавить" clickHandler={clickHandler}/>);
    expect(wrapper.text()).toEqual('Добавить')
});

test('Button clickHandler calling', () => {
    const wrapper = shallow(<Button text="Добавить" clickHandler={clickHandler} />);
    wrapper.find('button').simulate('click');
    expect(clickHandler).toBeCalled();
});

test('Button with isDisabled true has disabled class', () => {
    const wrapper = shallow(<Button text="Добавить" clickHandler={clickHandler} isDisabled={true} />);
    expect(wrapper.hasClass('btn_disabled')).toBeTruthy();
});

test('Button with isDisabled true not calling clickHandler', () => {
    const wrapper = shallow(<Button text="Добавить" clickHandler={clickHandler} isDisabled={true} />);
    wrapper.find('button').simulate('click');
    expect(clickHandler).not.toBeCalled();
});

test('Button render with extraClassNames', () => {
    const wrapper = shallow(<Button text="Добавить" clickHandler={clickHandler} extraClassNames="btn_test" />);
    expect(wrapper.hasClass('btn_test')).toBeTruthy();
});
