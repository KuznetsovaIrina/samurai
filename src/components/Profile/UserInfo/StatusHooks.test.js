import React from 'react';
import Status from './Status';
import { create } from 'react-test-renderer';

describe('Status component', () => {
    test('status from props showld be in the state', () => {
        const component = create(<Status status="Testing Status xxx" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Testing Status xxx");
    });

    test('after creation span should contains correct status', () => {
        const component = create(<Status status="Testing Status xxx" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('text status', () => {
        const component = create(<Status status="Testing Status xxx" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("Testing Status xxx");
    });

    test('input должен появиться после дабл клика', () => {
        const component = create(<Status status="Testing Status xxx" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("Testing Status xxx");
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<Status updateStatus={mockCallback} status="Testing Status xxx" />);
        const instance = component.getInstance();
        instance.deactiveEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
