// StyledPage.js
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`

`;

const StyledPage = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default StyledPage;
