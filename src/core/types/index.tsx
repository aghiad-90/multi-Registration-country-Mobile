export interface TextInputProps {
  placeholder: string;
  value: string;
  showSecureText?: boolean;
  secureTextEntry?: boolean;
  onChangeText: Function;
  style?: any;
  error: any;
  control: any;
  name: string;
}

export interface ButtonProps {
  icon?: string;
  mode?: string;
  onPress: () => void;
  label: string;
  loading?: boolean;
  style? : any
}

export enum ButtonMode {
  TEXT = 'text',
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
  ELEVATED = 'elevated',
  CONTAINED_TONAL = 'contained-tonal',
}

export enum CountryCode {
  UAE = 'AE',
  INDIA = 'IN',
  EGYPT = 'EG',
  SPAIN = 'ES',
}

export enum LanguageCode {
  English = 'en',
  Arabic = 'ar',
  Spanish = 'es',
  India = 'in'
}
