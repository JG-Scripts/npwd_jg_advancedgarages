import React, { ReactNode } from 'react';
import { APP_PRIMARY_COLOR } from '../app.theme';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const HEADER_HEIGHT = '4rem';
const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  min-height: ${HEADER_HEIGHT};
  padding-left: 1.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Container backgroundColor={APP_PRIMARY_COLOR}>
      <Typography variant="h5" color="white">
        {children}
      </Typography>
    </Container>
  );
};

export default Header;
