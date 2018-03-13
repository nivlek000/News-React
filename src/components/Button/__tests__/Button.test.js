import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    describe('Snapshot', () => {
        it('should create a basic button with defailt styles', () => {
            const components = renderer
                .create(<Button> Click Me </Button>)
                .toJSON();
            expect(components).toMatchSnapshot();

        });

    });

    describe('Unit', () => {
        it('should create a basic button with defailt styles', () => {
            const components = renderer
                .create(<Button style={{ color: "yellow" }}> Click Me </Button>)
                .toJSON();
            expect(components).toMatchSnapshot();

        });

    });


    describe('Unit', () => {
        it('should create a clickable button', () => {
            let count = 0;
            const button = shallow(
                <Button onClick={() => count++}>
                    click me!
                </Button>
            );
            button.simulate('click');
            expect(count).toEqual(1);
        });
    });
});