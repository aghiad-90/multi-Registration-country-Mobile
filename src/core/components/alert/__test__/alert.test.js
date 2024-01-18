import React from 'react';
import 'react-native';
import {it} from '@jest/globals';
import Alert from '../';
import {render} from '@testing-library/react-native';



describe('Testing Alert Component', () => {
  it('Alert should not be visible if visible prop is not true', () => {
    const tree = render(<Alert />)
    tree.update(<Alert alertContent={"someContent"} />);
    expect(tree.queryByTestId("alertContent")).toBeFalsy()
  });

  it('Alert should be visible if visible prop is true', () => {
    const tree = render(<Alert />)
    tree.update(<Alert visible = {true} alertContent = {"someConent"} />);
    expect(tree.getByTestId("modal")).toBeTruthy()
  });
})


