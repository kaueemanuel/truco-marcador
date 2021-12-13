import React, { useCallback, useState } from 'react';

import { Container, Points, ContainerPoints, ButtonSetPoints, ContainerSetPoints, TextSetPoints, ButtonResetPoints } from './score.styles';

import { Text, Title } from '../../style/global.styles';
import { useSettings } from '../../context/settings';

const Score: React.FC = () => {
  const { weName, theyName, wePoint, setWePoint, theyPoint, setTheyPoint } = useSettings();

  const handleSetPoints = useCallback(
    (weOrdThey: string, more: boolean, count: number) => {
      if (more) {
        if (weOrdThey === 'we') {
          setWePoint((value) => value + count)
        } else {
          setTheyPoint((value) => value + count)
        }
      } else {
        if (weOrdThey === 'we') {
          if (wePoint - count < 0) {
            setWePoint(0)
          } else {
            setWePoint((value) => value - count)
          }
        } else {
          if (theyPoint - count < 0) {
            setTheyPoint(0)
          } else {
            setTheyPoint((value) => value - count)
          }
        }
      }
    },
    [wePoint, theyPoint, setWePoint, setTheyPoint],
  )

  const handleResetPoints = useCallback(
    (weOrdThey: string) => {
      if (weOrdThey === 'we') {
        setWePoint(0)
      } else {
        setTheyPoint(0)
      }
    },
    [wePoint, theyPoint, setWePoint, setTheyPoint],
  );

  return <Container>
    <ContainerPoints>
      <Title fontSize="32px" fontWeight="600">{weName}</Title>
      <Points fontSize="80px">{wePoint}</Points>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', false, 1)}>
          <TextSetPoints>-1</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', true, 1)}>
          <TextSetPoints>+1</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', false, 3)}>
          <TextSetPoints>-3</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', true, 3)}>
          <TextSetPoints>+3</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', false, 9)}>
          <TextSetPoints>-9</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('we', true, 9)}>
          <TextSetPoints>+9</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonResetPoints onPress={() => handleResetPoints('we')}>
          <Text fontSize="26px">zerar</Text>
        </ButtonResetPoints>
      </ContainerSetPoints>
    </ContainerPoints>
    <ContainerPoints borderLeft={true}>
      <Title fontSize="32px" fontWeight="600">{theyName}</Title>
      <Points fontSize="80px">{theyPoint}</Points>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', false, 1)}>
          <TextSetPoints>-1</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', true, 1)}>
          <TextSetPoints>+1</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', false, 3)}>
          <TextSetPoints>-3</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', true, 3)}>
          <TextSetPoints>+3</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', false, 9)}>
          <TextSetPoints>-9</TextSetPoints>
        </ButtonSetPoints>
        <ButtonSetPoints onPress={() => handleSetPoints('they', true, 9)}>
          <TextSetPoints>+9</TextSetPoints>
        </ButtonSetPoints>
      </ContainerSetPoints>
      <ContainerSetPoints>
        <ButtonResetPoints onPress={() => handleResetPoints('they')}>
          <Text fontSize="26px">zerar</Text>
        </ButtonResetPoints>
      </ContainerSetPoints>
    </ContainerPoints>
  </Container >;
}

export default Score;