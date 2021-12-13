import React, { useState, useEffect, useCallback } from 'react';

import { Container, ModalView, ModalContainer, TouchableOpacity, TitleView, ItemBox, OptionBox, TextInput } from './settings.styles';
import { Modal, Switch } from 'react-native';
import { useSettings } from '../../context/settings';
import themes from '../../style/theme';
import { Title, Text } from '../../style/global.styles';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }: SettingsProps) => {
  const { theme, setTheme, setMaxPontuation, maxPontuation, setWePoint, setTheyPoint } = useSettings();

  const [darkMode, setDarkMode] = useState(theme.name === 'dark' ? true : false);

  const isNumber = (val: any) => {
    return val === +val;
  }

  const handleOnClose = () => {
    onClose();
    setWePoint(0);
    setTheyPoint(0);
    if (maxPontuation === '0') {
      setMaxPontuation('15');
    }
  };

  const handleMaxPontuation = (value: string) => {
    if (value.includes(',') || value.includes('.')) return;
    if (value === '') return setMaxPontuation('0');
    if (!isNumber(Number(value))) return setMaxPontuation('15');
    setMaxPontuation(+value + '');
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
              <TextInput value={maxPontuation} onChangeText={handleMaxPontuation} keyboardType="numeric" />
            </OptionBox>
          </ItemBox>
          <ItemBox style={{ marginBottom: 0 }}>
            <Text fontSize="26px">modo escuro</Text>
            <OptionBox>
              <Switch
                onValueChange={() => setDarkMode(!darkMode)}
                value={darkMode}
                trackColor={{ false: theme.color.backgroundSecundary, true: theme.color.secondary }}
                ios_backgroundColor={theme.color.backgroundSecundary}
              />
            </OptionBox>
          </ItemBox>
        </ModalView>
      </ModalContainer>
    </Modal>
  </Container>;
}

export default Settings;

function setWePoint(arg0: (value: any) => number) {
  throw new Error('Function not implemented.');
}
