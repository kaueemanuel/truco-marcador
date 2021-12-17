import React, { ReactChildren } from 'react';
import { ViewComponent } from 'react-native';
import styled from 'styled-components/native';
import { Title } from '../../style/global.styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export interface ContainerPointsProps {
  borderLeft?: boolean;
  children?: ReactChildren | React.ReactNode | string
}

export const ContainerPoints = ({ children, borderLeft }: ContainerPointsProps) => {
  const Component = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    border-left-color: ${borderLeft ? ({ theme }) => theme.color.subtitle : ({ theme }) => theme.color.background}; 
    border-left-width: 1px;
    border-style: solid; 
    background-color: ${({ theme }) => theme.color.background};
  `
  return <Component<typeof ViewComponent>>{children}</Component>
}

// export const ContainerPoints = styled.View`
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 0;
//   border-left: ${(props: any) => props.borderLeft || 'unset'};
//   background-color: ${({ theme }) => theme.color.background};
//   `;

export const Points = styled(Title)`
  color: ${({ theme }) => theme.color.title};
  font-weight: 600;
  text-align: center;
  font-size: 62px;
  padding: 10px;
  `;

export const ContainerSetPoints = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  `;

export const ButtonSetPoints = styled.TouchableOpacity`
  margin: 6px 6px;
  justify-content: center;
  height: 70px;
  width: 70px;
  color: ${({ theme }) => theme.color.title};
  text-align: center;
  background: ${({ theme }) => theme.color.secondary};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  `;

export const TextSetPoints = styled.Text`
  color: ${({ theme }) => theme.color.title};
  font-weight: 600;
  text-align: center;
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.YanoneKaffeesatz_400Regular};
  `;

export const ButtonResetPoints = styled.TouchableOpacity`
  justify-content: center;
  height: 50px;
  width: 152px;
  margin: 12px 6px;
  margin-top: 6px;
  color: ${({ theme }) => theme.color.title};
  text-align: center;
  background: ${({ theme }) => theme.color.secondary};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
`;



