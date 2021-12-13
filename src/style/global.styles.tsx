import React, { ReactChildren } from 'react';
import { TextComponent, ViewComponent } from 'react-native';

import styled from 'styled-components/native';

export interface TextProps {
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
  fontFamily?: string;
  active?: boolean;
  children?: ReactChildren | React.ReactNode | string
}

export const Title = ({ children, fontSize, fontWeight, textAlign, fontFamily, active }: TextProps) => {
  const Component = styled.Text`
    color: ${({ theme }) => active ? theme.color.secondary : theme.color.title};
    text-align: ${textAlign || 'center'};
    font-weight: ${fontWeight || '600'};
    font-size: ${fontSize || '32px'};
    font-family: ${({ theme }) => !fontFamily ? theme.fonts.YanoneKaffeesatz_600SemiBold : fontFamily};
  `
  return <Component<typeof TextComponent>>{children}</Component>
}

export const Text = ({ children, fontSize, fontWeight, textAlign, fontFamily, active }: TextProps) => {
  const Component = styled.Text`
    color: ${({ theme }) => active ? theme.color.secondary : theme.color.title};
    text-align: ${textAlign || 'center'};
    font-weight: ${fontWeight || '400'};
    font-size: ${fontSize || '18px'};
    font-family: ${({ theme }) => !fontFamily ? theme.fonts.YanoneKaffeesatz_400Regular : fontFamily};
  `
  return <Component<typeof TextComponent>>{children}</Component>
}
