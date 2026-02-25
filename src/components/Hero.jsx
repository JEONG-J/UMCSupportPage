import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import productLogo from '../assets/productLogo.png';

const Section = styled.section`
  min-height: 112vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(128px + env(safe-area-inset-top)) 20px 96px;
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 105vh;
    padding: calc(108px + env(safe-area-inset-top)) 20px 80px;
  }

  @media (max-width: 768px) {
    min-height: 100svh;
    padding: calc(88px + env(safe-area-inset-top)) 18px calc(56px + env(safe-area-inset-bottom));
  }

  @media (max-width: 480px) {
    padding: calc(78px + env(safe-area-inset-top)) 16px calc(48px + env(safe-area-inset-bottom));
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 4px;
  }
`;

const LogoContainer = styled(motion.div)`
  width: clamp(132px, 11vw, 186px);
  height: auto;
  margin-bottom: 18px;
  position: relative;
  z-index: 10;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 30px rgba(102, 153, 255, 0.4));
  }

  @media (max-width: 768px) {
    width: clamp(110px, 28vw, 146px);
    margin-bottom: 14px;
  }
`;

const Badge = styled(motion.span)`
  display: inline-block;
  padding: 8px 18px;
  background: rgba(100, 175, 255, 0.12);
  color: #d4d8e2;
  border-radius: 50px;
  font-size: clamp(0.92rem, 1.2vw, 1.05rem);
  font-weight: 550;
  margin-bottom: 18px;
  border: 1px solid rgba(133, 203, 255, 0.3);
  letter-spacing: 0.06em;

  @media (max-width: 768px) {
    font-size: 0.84rem;
    padding: 7px 14px;
    margin-bottom: 14px;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3.2rem, 8.2vw, 5.5rem);
  line-height: 1.04;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #fff;
  word-break: keep-all;
  
  span {
    background: linear-gradient(95deg, #88b6ff, #66fcf1 45%, #7399ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 1024px) {
    font-size: clamp(3rem, 9vw, 4.6rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 12vw, 3.35rem);
    margin-bottom: 14px;
    letter-spacing: -0.018em;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.05rem, 11.8vw, 2.6rem);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.08rem, 1.6vw, 1.4rem);
  color: rgba(219, 229, 245, 0.9);
  max-width: 760px;
  line-height: 1.72;
  word-break: keep-all;
  padding: 0 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 94%;
    line-height: 1.58;
    padding: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.94rem;
    max-width: 100%;
    line-height: 1.54;
  }
`;

const SchedulePanel = styled(motion.div)`
  margin-top: 12px;
  width: min(740px, 100%);
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(134, 205, 255, 0.28);
  background: linear-gradient(145deg, rgba(16, 29, 48, 0.64), rgba(9, 16, 30, 0.82));
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 14px 14px;
    border-radius: 14px;
  }
`;

const ScheduleTitle = styled.p`
  color: #8deaff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const ScheduleRow = styled.p`
  color: rgba(223, 235, 252, 0.92);
  font-size: 0.96rem;
  line-height: 1.55;
  word-break: keep-all;

  strong {
    color: #ffffff;
    margin-right: 8px;
  }

  & + & {
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled(motion.div)`
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 36px;
    gap: 12px;
    width: 100%;
    max-width: 340px;
  }
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 42px;
  background: linear-gradient(120deg, #f4f8ff, #dff5ff);
  color: #101827;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  gap: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(128, 206, 255, 0.35);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.05rem;
    padding: 15px 24px;
    gap: 6px;
  }
`;

const StatusText = styled.div`
  color: #ffd38a;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.98rem;
  }
`;

const CenterGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(72vw, 860px);
  height: min(72vw, 860px);
  background: radial-gradient(circle, rgba(102, 175, 255, 0.28) 0%, transparent 72%);
  filter: blur(88px);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: min(95vw, 520px);
    height: min(95vw, 520px);
    filter: blur(54px);
  }
`;

const Hero = () => {
  return (
    <Section>
      <CenterGlow />
      <Content>
        <LogoContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [-10, 10, -10]
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1, type: "spring", bounce: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.img
            src={productLogo}
            alt="UMC Product Logo"
            style={{
              filter: "drop-shadow(0 0 30px rgba(102, 153, 255, 0.4))"
            }}
          />
        </LogoContainer>

        <Badge
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          University MakeUs Challenge
        </Badge>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>UMC Product</span>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          흩어진 도구들은 하나로, 반복되는 업무는 자동으로.
          <br />
          동아리가 온전히 성장에만 집중할 수 있도록.
        </Subtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ApplyButton
            href="https://docs.google.com/forms/d/1sHW8V8WzdPl22VGLbab978OyEU2S6D-pCSIxMQ-nGw8/viewform?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            2기 지원하기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </ApplyButton>
          <StatusText>모집 중!</StatusText>
          <SchedulePanel
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88 }}
          >
            <ScheduleTitle>2기 진행 일정</ScheduleTitle>
            <ScheduleRow><strong>모집</strong> 2026년 2월 26일(목) - 3월 1일(일)</ScheduleRow>
            <ScheduleRow><strong>서류 평가</strong> 2026년 3월 2일(월) - 3월 7일(토)</ScheduleRow>
          </SchedulePanel>
        </ButtonGroup>
      </Content>
    </Section>
  );
};

export default Hero;
