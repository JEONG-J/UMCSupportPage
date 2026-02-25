import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 120px 20px;
  background: transparent;
  position: relative;

  @media (max-width: 768px) {
    padding: 92px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 42px;
  }
`;

const Label = styled(motion.span)`
  color: #7deaff;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
`;

const Title = styled(motion.h2)`
  font-size: 3.2rem;
  color: #fff;
  margin-bottom: 24px;
  font-family: var(--font-heading);
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.14rem;
  color: rgba(201, 213, 233, 0.85);
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const MobileHint = styled.p`
  display: none;
  text-align: center;
  color: rgba(171, 193, 227, 0.72);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  margin: -18px 0 16px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(270px, 80vw);
    gap: 14px;
    overflow-x: auto;
    padding: 4px 2px 10px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(150, 174, 216, 0.45);
      border-radius: 999px;
    }
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(162deg, rgba(15, 23, 38, 0.86), rgba(7, 12, 22, 0.94));
  border: 1px solid var(--line-soft);
  border-radius: 24px;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  scroll-snap-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ color }) => `linear-gradient(90deg, transparent, ${color || '#74e0ff'}, transparent)`};
    opacity: 0.82;
    transition: all 0.35s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 0%, ${({ color }) => `${color || '#74e0ff'}2f`}, transparent 54%);
    opacity: 0.5;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: ${({ color }) => `${color}66`};
    transform: translateY(-9px);
    box-shadow: 0 20px 38px rgba(0, 0, 0, 0.34), 0 10px 34px ${({ color }) => `${color}35`};
    
    &::before {
      opacity: 1;
      height: 4px;
    }

    &::after {
      opacity: 1;
    }

    .icon-wrapper {
      transform: scale(1.08);
      box-shadow: 0 0 24px ${({ color }) => `${color}56`};
    }
  }

  @media (max-width: 768px) {
    padding: 30px 22px;
    min-height: 318px;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  border: 1px solid rgba(190, 211, 245, 0.22);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    font-size: 1.9rem;
    margin-bottom: 18px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 16px;
  font-family: var(--font-heading);

  @media (max-width: 768px) {
    font-size: 1.42rem;
  }
`;

const CardText = styled.p`
  color: rgba(193, 205, 224, 0.84);
  line-height: 1.7;
  font-size: 0.98rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 0.92rem;
    line-height: 1.62;
  }
`;

const pillars = [
  {
    title: "Web",
    icon: "💻",
    desc: "전국 단위의 UMC 리크루팅 서비스와 중앙운영사무국을 위한 효율적인 통합 관리자 페이지(Admin)를 제작 및 운영합니다.",
    color: "#6699ff",
    delay: 0.2
  },
  {
    title: "Server",
    icon: "⚙️",
    desc: "대규모 트래픽을 처리할 수 있는 분산 아키텍처 설계 및 CI/CD 자동화를 통해 탄탄하고 확장 가능한 핵심 인프라를 구축합니다.",
    color: "#46e891",
    delay: 0.4
  },
  {
    title: "iOS",
    icon: "🍎",
    desc: "Apple Watch, 위젯 연동 및 최신 iOS 환경 전반에 걸친 성능 개선을 통해 한 차원 높은 모바일 서비스 경험을 제공합니다.",
    color: "#ff66a3",
    delay: 0.6
  },
  {
    title: "Android",
    icon: "🤖",
    desc: "다양한 폼팩터에 대응하는 유연한 UI설계와 백그라운드 프로세스 고도화를 통해 안정적이고 생동감 넘치는 서비스를 구현합니다.",
    color: "#ffb86c",
    delay: 0.8
  },
  {
    title: "Web Design",
    icon: "🎨",
    desc: "복잡한 데이터도 직관적으로 이해할 수 있는 대시보드와 컴포넌트 중심의 확장형 디자인 시스템을 설계합니다.",
    color: "#8e7bff",
    delay: 1
  },
  {
    title: "iOS Design",
    icon: "🍏",
    desc: "iOS 26 HIG 기반으로 서비스 디자인을 설계하고, Apple Watch 워치 UI와 홈 위젯 디자인까지 확장해 일관된 사용자 경험을 완성합니다.",
    color: "#b28dff",
    delay: 1.1
  },
  {
    title: "Android Design",
    icon: "📱",
    desc: "정보 구조를 재정리하고 가이드를 통합해, 다양한 안드로이드 환경에서 명확하고 정돈된 사용자 흐름을 구축합니다.",
    color: "#ff7fb7",
    delay: 1.2
  }
];

const WhatWeBuild = () => {
  return (
    <Section id="what-we-build">
      <Container>
        <Header>
          <Label
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Our Teams
          </Label>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            무엇을 만드는가
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            우리는 아이디어를 현실로 만들기 위해 7개의 핵심 파트가 협력하여 하나의 완전한 프로덕트를 탄생시킵니다.
          </Description>
        </Header>
        <MobileHint>모바일에서는 카드를 좌우로 넘겨 확인할 수 있습니다.</MobileHint>
        <Grid>
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              color={pillar.color}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: pillar.delay }}
            >
              <IconWrapper className="icon-wrapper">
                {pillar.icon}
              </IconWrapper>
              <CardTitle>{pillar.title}</CardTitle>
              <CardText>
                {pillar.desc}
              </CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhatWeBuild;
