import React, { useState, useContext, useEffect } from 'react';

import { Container, ViewTitle, ScrollView, SettingsButton } from './main.styles';
import Score from '../../components/score/score';
import { Title, Text } from '../../style/global.styles';
import { Ionicons } from '@expo/vector-icons';
import Settings from '../../components/settings/settings';
import { useSettings } from '../../context/settings';
import Congratulations from '../../components/congratulations/congratulations';

const Main: React.FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const { theme, wePoint, theyPoint, maxPontuation } = useSettings();

  return <Container>
    <ViewTitle>
      <Title fontSize="85px">TRUCO!</Title>
      <Text fontSize="50px" fontFamily={theme.fonts.YanoneKaffeesatz_300Light}>CONTADOR</Text>
      <SettingsButton onPress={() => setIsOpenSettings(true)}>
        <Ionicons name="settings" size={30} color={theme.color.title} />
      </SettingsButton>
    </ViewTitle>
    <ScrollView>
      <Score />
      <Settings isOpen={isOpenSettings} onClose={() => setIsOpenSettings(false)} />
      <Congratulations />
    </ScrollView>
  </Container>;
}

export default Main;