import React, { useState, useEffect } from 'react';

import { Container, ModalView, ModalContainer, TouchableOpacity, TitleView, ItemBox, OptionBox, ChangeMaxPontuationButton } from './settings.styles';
import { Modal, Platform, Switch } from 'react-native';
import { useSettings } from '../../context/settings';
import themes from '../../style/theme';
import { Ionicons } from '@expo/vector-icons';
import { Title, Text } from '../../style/global.styles';
import ToggleSwitch from 'toggle-switch-react-native'

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }: SettingsProps) => {
  const { theme, setTheme, setMaxPontuation, maxPontuation, setWePoint, setTheyPoint } = useSettings();

  const [darkMode, setDarkMode] = useState(theme.name === 'dark' ? true : false);

  const handleOnClose = () => {
    onClose();
    if (maxPontuation === '0') {
      setMaxPontuation('15');
    }
  };

  const handleMaxPontuation = (sum: boolean) => {
    if (sum) {
      return setMaxPontuation((value) => `${Number(value) + 1}`);
    }
    if (Number(maxPontuation) === 1) return;
    setMaxPontuation((value) => `${Number(value) - 1}`);
  }

  useEffect(() => {
    if (theme.name === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [theme]);

  useEffect(() => {
    if (darkMode) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }, [darkMode])

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
            <Title fontSize="32px">Configurações</Title>
          </TitleView>
          <ItemBox>
            <Text fontSize="26px">pontuação máxima</Text>
            <OptionBox>
              <ChangeMaxPontuationButton onPress={() => handleMaxPontuation(false)}>
                <Ionicons name="chevron-back-outline" size={30} color={theme.color.title} />
              </ChangeMaxPontuationButton>
              <Text fontSize="26px">{maxPontuation}</Text>
              <ChangeMaxPontuationButton onPress={() => handleMaxPontuation(true)}>
                <Ionicons name="chevron-forward-outline" size={30} color={theme.color.title} />
              </ChangeMaxPontuationButton>
            </OptionBox>
          </ItemBox>
          <ItemBox style={{ marginBottom: 0 }}>
            <Text fontSize="26px">modo escuro</Text>
            <OptionBox style={{ marginTop: 20 }}>
              <ToggleSwitch
                isOn={darkMode}
                onColor={theme.color.secondary}
                offColor={theme.color.backgroundSecundary}
                size="medium"
                animationSpeed={200}
                onToggle={() => setDarkMode(!darkMode)}
              />
            </OptionBox>
          </ItemBox>
        </ModalView>
      </ModalContainer>
    </Modal>
  </Container >;
}

export default Settings;

function setWePoint(arg0: (value: any) => number) {
  throw new Error('Function not implemented.');
}
