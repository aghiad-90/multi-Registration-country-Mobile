import React from 'react';
import 'react-native';
import {it} from '@jest/globals';
import Button from '../';
import {screen, fireEvent, render} from '@testing-library/react-native';

jest.mock('react-native-paper', () => ({
  Dialog: () => ({
    Actions: jest.fn(),
    Content: jest.fn(),
  }),
  useTheme: () => ({
    colors: {
      primary: 'blue',
      secondary: 'green',
    },
  }),
}));

const onPressMock = jest.fn();

const eventData = {
  userCred : {}
};

describe('testing Button Component', () => {
  it('it should render the label correctly', () => {
    const tree = render(<Button />);
    tree.update(<Button label={'clickMe'} />);
    expect(tree.getByTestId('label').children[0]).toEqual('clickMe');
  });

  it('background should be equal to Primary Color', () => {
    const tree = render(<Button />);
    tree.update(<Button label={'clickMe'} />);
    expect(tree.getByTestId('label').children[0]).toEqual('clickMe');
    expect(tree.getByTestId('button').props.style[0].backgroundColor).toEqual(
      'green',
    );
  });

  it('onClick event should call with right data', () => {
    const tree = render(<Button />);
    tree.update(<Button onPress={onPressMock}  label={'clickMe'}/>);
    fireEvent.press(screen.getByText('clickMe'), eventData)
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
