import React from 'react';
import {BoxProps, BoxTouchable, BoxTouchableProps} from './../Box/Box';
import Txt, {TxtProps} from '../Text/Text';

const DefaultButton: BoxProps = {
  minHeight: 45,
  px: 'nano',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  borderRadius: 'nano',
};

const DefaultText: TxtProps = {
  fontSize: 'sm',
  fontWeight: 'bold',
};

const outlineButton = {
  ...DefaultButton,
  bg: 'color-background',
  borderWidth: 1,
  borderColor: 'color-primary',
};

type ButtonProps = BoxTouchableProps & {title: string};

export function PrimaryButton({title = '', ...rest}: ButtonProps) {
  return (
    <BoxTouchable {...rest} {...DefaultButton} bg="color-primary">
      <Txt {...DefaultText} color="on-color-primary">
        {title}
      </Txt>
    </BoxTouchable>
  );
}

export function SecondaryButton({title = '', ...rest}: ButtonProps) {
  return (
    <BoxTouchable {...rest} {...DefaultButton} bg="color-danger">
      <Txt {...DefaultText} color="on-color-primary">
        {title}
      </Txt>
    </BoxTouchable>
  );
}

export function OutlineButton({title = '', ...rest}: ButtonProps) {
  return (
    <BoxTouchable {...rest} {...outlineButton}>
      <Txt {...DefaultText} color="color-primary">
        {title}
      </Txt>
    </BoxTouchable>
  );
}
