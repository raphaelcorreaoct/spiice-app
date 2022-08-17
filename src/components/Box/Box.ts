import styled from 'styled-components/native';
import {
  BorderProps,
  borders,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  zIndex,
  ZIndexProps,
  flexWrap,
  FlexWrapProps,
} from 'styled-system';

export const boxCompose = compose(
  space,
  color,
  layout,
  flexbox,
  borders,
  position,
  zIndex,
  shadow,
  flexWrap,
);

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  ZIndexProps &
  FlexWrapProps &
  ShadowProps;

const Box = styled.View<BoxProps>`
  ${boxCompose}
`;

export default Box;
