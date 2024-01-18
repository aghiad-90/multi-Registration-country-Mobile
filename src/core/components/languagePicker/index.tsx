import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {languages as SupportedLanguages} from '../../languages'

const LanguagePicker = (props: any) => {
  const {visible, setVisible, value, setValue} = props;

  const [languages, setLanguages] = useState(SupportedLanguages);

  return (
    <DropDownPicker
      open={visible}
      value={value}
      items={languages}
      setOpen={setVisible}
      setValue={setValue}
      setItems={setLanguages}
      testID = "dropDown"
    />
  );
};

export default LanguagePicker;
