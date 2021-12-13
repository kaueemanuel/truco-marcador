import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TitleView = styled.View`
  padding-bottom: 32px;
`;
export const ItemBox = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export const OptionBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 26px;
  padding: 20px 35px;
  elevation: 1;
  border-radius: 6px;
  width: 80%;
`;
export const ModalContainer = styled.View`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.9);
`;
export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  elevation: 1;
`;
export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;