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
} from 'styled-system';
import {BoxProps} from '../Box/Box';
import {boxCompose} from './../Box/Box';

export const textCompose = compose(fontSize, fontWeight, textStyle, typography);

export type TxtProps = TypographyProps &
  TextStyleProps &
  BoxProps &
  FontSizeProps &
  FontWeightProps &
  ColorProps &
  FontFamilyProps &
  TextAlignProps &
  LineHeightProps &
  TextPropsRN;

const Txt = styled.Text<BoxProps>`
  ${textCompose}
  ${boxCompose}
`;

export default Txt;
