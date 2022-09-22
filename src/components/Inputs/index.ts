import styled from 'styled-components/native';
import {
  borders,
  BordersProps,
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import {TxtProps} from '../Text/Text';

type StyledTextInputProps = TxtProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BordersProps &
  FontSizeProps;

export const Input = styled.TextInput<StyledTextInputProps>`
  ${space};
  ${color};
  ${layout};
  ${borders};
  ${fontSize}
  ${fontWeight}
`;

Input.defaultProps = {
  borderWidth: 1,
  px: 'quarck',
  borderColor: 'border-color-primary',
  borderRadius: 'nano',
  color: 'on-color-background',
};
