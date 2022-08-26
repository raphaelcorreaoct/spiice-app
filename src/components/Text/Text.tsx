import styled from 'styled-components/native';
import {TextProps as TextPropsRN} from 'react-native';
import {
  ColorProps,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  LineHeightProps,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
  compose,
  TextColorProps,
  textColor,
} from 'styled-system';
import {BoxProps} from '../Box/Box';
import {boxCompose} from './../Box/Box';

export const textCompose = compose(
  fontSize,
  fontWeight,
  textStyle,
  typography,
  textColor,
);

export type TxtProps = TypographyProps &
  TextStyleProps &
  BoxProps &
  FontSizeProps &
  FontWeightProps &
  ColorProps &
  FontFamilyProps &
  TextAlignProps &
  TextColorProps &
  LineHeightProps &
  TextPropsRN;

const Txt = styled.Text<BoxProps>`
  ${textCompose}
  ${boxCompose}
`;

export default Txt;
