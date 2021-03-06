import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? `${StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 24}px` : '0px'};
  background-color: ${({ theme }) => theme.color.background};
`;
export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const ViewTitle = styled.View`
  position: relative;
  padding: 45px 6px;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.background};
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.color.title};
  text-align: center;
  font-size: 32px;
`;

export const SettingsButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;