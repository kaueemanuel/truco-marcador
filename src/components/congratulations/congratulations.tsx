import React, { useState, useEffect } from 'react';

import { Container, ModalView, ModalContainer, TouchableOpacity, TitleView, ItemBox, Image } from './congratulations.styles';
import { Modal } from 'react-native';
import { useSettings } from '../../context/settings';
import { Title, Text } from '../../style/global.styles';


const Congratulations: React.FC = () => {
  const { maxPontuation, wePoint, theyPoint, setTheyPoint, setWePoint, weName, theyName } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [whoWin, setWhoWin] = useState('');

  const trophyImage = require('../../assets/trophy.png');

  useEffect(() => {
    if (maxPontuation !== '' && maxPontuation !== '0' && wePoint >= Number(maxPontuation)) {
      setIsOpen(true);
      setWhoWin(weName);
    }
    if (maxPontuation !== '' && maxPontuation !== '0' && theyPoint >= Number(maxPontuation)) {
      setIsOpen(true);
      setWhoWin(theyName);
    }
  }, [wePoint, theyPoint, maxPontuation]);

  const handleOnClose = () => {
    setTheyPoint(0);
    setWePoint(0);
    setIsOpen(false);
  }

  return <Container>
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => handleOnClose()}
    >
      <ModalContainer>
        <TouchableOpacity onPress={() => handleOnClose()} />
        <ModalView>
          <TitleView>
            <Title fontSize="42px">FIM DE JOGO!</Title>
          </TitleView>
          <ItemBox>
            <Image source={trophyImage} resizeMode="cover" />
          </ItemBox>
          <ItemBox style={{ marginBottom: 0 }}>
            <Text fontSize="30px">EQUIPE '{whoWin}' GANHOU</Text>
          </ItemBox>
        </ModalView>
      </ModalContainer>
    </Modal>
  </Container>;
}

export default Congratulations;