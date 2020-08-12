import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus', () => {
    test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='work'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('work');
    });

    test('after creation only span', () => {
        const component = create(<ProfileStatus status='work'/>);
        const root = component.root;
        let span = root.findAllByType('span');
        expect(span.length).toBe(1);
    });

    test('after creation no input', () => {
        const component = create(<ProfileStatus status='work'/>);
        const root = component.root;
        let input = root.findAllByType('input');
        expect(input.length).toBe(0);
    });

    test('span have correct text', () => {
        const component = create(<ProfileStatus status='work'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('work');
    });

    test('input with correct value instead of span ', () => {
        const component = create(<ProfileStatus status='work'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('work');
    });

    test('callback should be called ', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='work' setUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateChangeStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})

