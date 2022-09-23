import React from 'react';
import {Box} from '../Box/Box';
import Txt from '../Text/Text';
export default function CardList({
  category,
  description,
  value,
}: {
  category: string;
  description: string;
  value: string;
}) {
  return (
    <Box p="nano" flexDirection="row">
      <Box width={57} height={57} bg="color-primary" />
      <Box flex={1} justifyContent="center" ml="nano">
        <Txt color="on-color-background" fontWeights="bold" fontSize="sm">
          {category}
        </Txt>
        <Txt color="on-color-background" fontSize="xxs">
          {description}
        </Txt>
      </Box>
      <Box>
        <Txt color="color-danger">R$ {value}</Txt>
      </Box>
    </Box>
  );
}
