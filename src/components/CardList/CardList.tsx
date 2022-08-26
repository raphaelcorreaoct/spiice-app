import React from 'react';
import Box from './../Box/Box';
import Txt from '../Text/Text';
export default function CardList() {
  return (
    <Box p="nano" flexDirection="row">
      <Box width={57} height={57} bg="color-primary" />
      <Box flex={1} justifyContent="center" ml="nano">
        <Txt color="on-color-background" fontWeights="bold" fontSize="sm">
          Mercado
        </Txt>
        <Txt color="on-color-background" fontSize="xxs">
          Compra semanal de comida
        </Txt>
      </Box>
      <Box>
        <Txt color="color-danger">R$ -160,00</Txt>
      </Box>
    </Box>
  );
}
