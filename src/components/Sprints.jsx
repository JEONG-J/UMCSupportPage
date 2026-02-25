import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const hexToRgb = (hex) => {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6) return null;
  return {
    r: parseInt(cleanHex.slice(0, 2), 16),
    g: parseInt(cleanHex.slice(2, 4), 16),
    b: parseInt(cleanHex.slice(4, 6), 16)
  };
};

const withAlpha = (hex, alpha) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(255, 255, 255, ${alpha})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

const Section = styled.section`
  padding: 120px 20px 150px;
  background:
    radial-gradient(circle at 18% 12%, rgba(57, 120, 255, 0.1), transparent 38%),
    radial-gradient(circle at 85% 78%, rgba(16, 219, 164, 0.1), transparent 42%),
    var(--bg-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 90px 90px;
    mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 52px;
`;

const Title = styled(motion.h2)`
  font-size: 3.4rem;
  color: #fff;
  margin-bottom: 16px;
  font-family: var(--font-heading);
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.35rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: rgba(229, 233, 242, 0.74);
  font-size: 1.08rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.75;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const TabContainer = styled.div`
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  gap: 16px;
  margin: 0 auto 60px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    gap: 8px;
    width: 100%;
    max-width: 420px;
  }
`;

const Tab = styled.button`
  background: ${({ $active }) => ($active ? 'linear-gradient(120deg, rgba(73, 221, 248, 0.2), rgba(84, 130, 255, 0.22))' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(108, 207, 255, 0.55)' : 'rgba(255, 255, 255, 0.08)')};
  color: ${({ $active }) => ($active ? '#fff' : '#94a5bf')};
  padding: 13px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  min-width: 160px;

  &:hover {
    background: rgba(102, 252, 241, 0.12);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid rgba(102, 252, 241, 0.7);
    outline-offset: 2px;
  }

  ${({ $active }) => $active && `
    box-shadow: 0 10px 26px rgba(56, 199, 246, 0.24);
  `}

  @media (max-width: 768px) {
    flex: 1;
    min-width: unset;
    font-size: 0.92rem;
    padding: 12px 18px;
  }
`;

const CarouselContainer = styled(motion.div)`
  perspective: 1900px;
  position: relative;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    height: 510px;
  }
`;

const CarouselCard = styled(motion.article)`
  position: absolute;
  width: clamp(280px, 31vw, 390px);
  height: 490px;
  background: linear-gradient(145deg, rgba(16, 20, 31, 0.96), rgba(6, 9, 15, 0.94));
  border: 1px solid ${({ $isActive, $color }) => ($isActive ? withAlpha($color, 0.58) : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 24px;
  padding: 30px 34px 34px;
  cursor: grab;
  box-shadow: ${({ $isActive, $color }) => ($isActive ? `0 22px 55px ${withAlpha($color, 0.3)}` : '0 12px 30px rgba(0, 0, 0, 0.55)')};
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  backdrop-filter: blur(8px);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, ${({ $color }) => withAlpha($color, 0.26)}, transparent 58%);
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.35)};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ $color }) => withAlpha($color, 0.2)}, ${({ $color }) => $color}, ${({ $color }) => withAlpha($color, 0.2)});
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.45)};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:active {
    cursor: grabbing;
  }

  ${({ $isActive }) => $isActive && `
    z-index: 20 !important;
  `}

  @media (max-width: 768px) {
    width: min(86vw, 360px);
    height: 468px;
    padding: 26px 24px 28px;
  }

  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.72)};

  h3 {
    color: #fff;
    font-size: clamp(1.34rem, 2.7vw, 1.74rem);
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
    line-height: 1.2;
    position: relative;
    z-index: 1;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: clamp(1.22rem, 5.4vw, 1.44rem);
      margin-bottom: 20px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    z-index: 1;
  }

  li {
    color: ${({ $isActive }) => ($isActive ? 'rgba(239, 244, 255, 0.92)' : 'rgba(204, 214, 232, 0.76)')};
    font-size: 1.02rem;
    padding-left: 24px;
    position: relative;
    line-height: 1.58;
    word-break: keep-all;

    &::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 10px;
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: ${({ $color }) => $color};
      box-shadow: ${({ $color }) => `0 0 12px ${withAlpha($color, 0.75)}`};
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.52;
    }
  }
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const TrackBadge = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => withAlpha($color, 0.16)};
  border: 1px solid ${({ $color }) => withAlpha($color, 0.36)};
  border-radius: 999px;
  padding: 7px 12px;
`;

const SlideIndex = styled.span`
  font-size: 0.8rem;
  color: rgba(190, 205, 228, 0.85);
  letter-spacing: 0.04em;
  font-weight: 600;
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  position: relative;
  z-index: 20;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '28px' : '10px')};
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(102, 252, 241, 0.45)' : 'rgba(255, 255, 255, 0.14)')};
  background: ${({ $active }) => ($active ? 'linear-gradient(90deg, #66fcf1, #8fc9ff)' : 'rgba(255, 255, 255, 0.22)')};
  box-shadow: ${({ $active }) => ($active ? '0 0 18px rgba(102, 252, 241, 0.5)' : 'none')};
  cursor: pointer;
  transition: all 0.25s ease;
  
  &:hover {
    background: ${({ $active }) => ($active ? 'linear-gradient(90deg, #66fcf1, #8fc9ff)' : 'rgba(255, 255, 255, 0.4)')};
    transform: translateY(-1px);
  }
`;

const ArrowControls = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const ArrowButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(241, 246, 255, 0.9);
  font-size: 1.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 252, 241, 0.13);
    border-color: rgba(102, 252, 241, 0.42);
  }

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }
`;

const sprintData = {
  dev: [
    {
      title: '💻 Web Sprint',
      color: '#2962FF',
      items: [
        'React/Vue 기반의 SPA 아키텍처 설계',
        '컴포넌트 단위의 UI 구현 및 상태 관리',
        '서버 API 연동 및 비동기 통신 처리',
        '배포 파이프라인(CI/CD) 구축 및 최적화'
      ]
    },
    {
      title: '⚙️ Server Sprint',
      color: '#00C853',
      items: [
        'RESTful API 설계 및 명세서 작성',
        '관계형/비관계형 데이터베이스 스키마 설계',
        'Spring Boot/Node.js 기반의 비즈니스 로직 구현',
        '보안(JWT, OAuth) 및 성능 최적화(Caching)'
      ]
    },
    {
      title: '🍎 iOS Sprint',
      color: '#FF5722',
      items: [
        'iOS 최신 패러다임 기반 개발 및 기술 스택 적용',
        '애플 워치 연동 및 홈 화면 위젯 개발',
        '유지보수와 확장을 고려한 모듈화 개발',
        'TestFlight를 통한 배포 및 QA 진행'
      ]
    },
    {
      title: '🤖 Android Sprint',
      color: '#00BCD4',
      items: [
        'Jetpack Compose / XML 기반의 모듈러 아키텍처를 통한 개발',
        'Material Design 가이드를 준수하는 UI 구현',
        'Retrofit, Room 등 필수 라이브러리 활용',
        'Google Play Store 배포 준비 및 테스트'
      ]
    }
  ],
  design: [
    {
      title: '💻 Web Design Sprint',
      color: '#FFB300',
      items: [
        '데스크탑 및 모바일 웹 뷰에 최적화된 반응형 UI 설계',
        '그리드 시스템 및 웹 타이포그래피 활용',
        '웹 접근성 및 브라우저 호환성 고려',
        '인터랙션 및 마이크로 애니메이션 기획'
      ]
    },
    {
      title: '🍎 iOS Design Sprint',
      color: '#651FFF',
      items: [
        'Apple Human Interface Guidelines(HIG) 이해',
        'iOS 특화 네비게이션 및 컴포넌트 활용',
        '동적인 화면 전환 및 제스처 기반 인터랙션 기획',
        '개발자와의 에셋 핸드오프 패키징'
      ]
    },
    {
      title: '🤖 Android Design Sprint',
      color: '#F50057',
      items: [
        'Google Material Design 3 시스템 이해',
        '안드로이드 폼팩터 다양성을 고려한 레이아웃',
        '시스템 UI(상태바, 네비게이션바)와의 통합',
        '명확한 피드백을 위한 애니메이션/트랜지션 기획'
      ]
    }
  ]
};

const Sprints = () => {
  const [activeTab, setActiveTab] = useState('dev');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const currentSprintCount = sprintData[activeTab].length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeThreshold = 70;
    if ((offset.x < -swipeThreshold || velocity.x < -420) && activeIndex < currentSprintCount - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if ((offset.x > swipeThreshold || velocity.x > 420) && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const calculateTransform = (i) => {
    const diff = i - activeIndex;
    const absDiff = Math.abs(diff);
    const direction = Math.sign(diff);

    if (diff === 0) {
      return {
        x: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10
      };
    }

    if (isMobile) {
      return {
        x: direction * (220 + absDiff * 50),
        z: -(absDiff * 90),
        rotateY: direction * -18,
        scale: 1 - (absDiff * 0.08),
        opacity: absDiff > 1 ? 0 : 0.7,
        zIndex: 10 - absDiff
      };
    }

    return {
      x: direction * (340 + absDiff * 130),
      z: -(absDiff * 130),
      rotateY: direction * -28,
      scale: 1 - (absDiff * 0.06),
      opacity: absDiff > 2 ? 0 : 0.88,
      zIndex: 12 - absDiff
    };
  };

  const handleKeyNavigation = (event) => {
    if (event.key === 'ArrowRight' && activeIndex < currentSprintCount - 1) {
      setActiveIndex((prev) => prev + 1);
    }

    if (event.key === 'ArrowLeft' && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <Section id="sprints">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            스프린트 커리큘럼
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            실무 플로우를 압축한 트랙별 미션으로, 기획부터 구현과 배포까지 직접 완주합니다.
          </Subtitle>
        </Header>

        <TabContainer>
          <Tab
            $active={activeTab === 'dev'}
            onClick={() => handleTabChange('dev')}
            aria-pressed={activeTab === 'dev'}
          >
            개발 스프린트
          </Tab>
          <Tab
            $active={activeTab === 'design'}
            onClick={() => handleTabChange('design')}
            aria-pressed={activeTab === 'design'}
          >
            디자인 스프린트
          </Tab>
        </TabContainer>

        <AnimatePresence mode="wait">
          <CarouselContainer
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            role="region"
            aria-label={`${activeTab === 'dev' ? '개발' : '디자인'} 스프린트 캐러셀`}
            tabIndex={0}
            onKeyDown={handleKeyNavigation}
          >
            {sprintData[activeTab].map((sprint, idx) => (
              <CarouselCard
                key={idx}
                $isActive={idx === activeIndex}
                $color={sprint.color}
                onClick={() => setActiveIndex(idx)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.14}
                onDragEnd={handleDragEnd}
                initial={false}
                animate={calculateTransform(idx)}
                transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                aria-selected={idx === activeIndex}
              >
                <CardMeta>
                  <TrackBadge $color={sprint.color}>Track</TrackBadge>
                  <SlideIndex>{idx + 1} / {currentSprintCount}</SlideIndex>
                </CardMeta>
                <h3>{sprint.title}</h3>
                <ul>
                  {sprint.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CarouselCard>
            ))}
          </CarouselContainer>
        </AnimatePresence>

        <Indicators>
          {sprintData[activeTab].map((_, idx) => (
            <Dot
              key={idx}
              $active={idx === activeIndex}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </Indicators>
        <ArrowControls>
          <ArrowButton
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            disabled={activeIndex === 0}
            aria-label="Previous sprint"
          >
            ‹
          </ArrowButton>
          <ArrowButton
            onClick={() => setActiveIndex((prev) => Math.min(prev + 1, currentSprintCount - 1))}
            disabled={activeIndex === currentSprintCount - 1}
            aria-label="Next sprint"
          >
            ›
          </ArrowButton>
        </ArrowControls>

      </Container>
    </Section>
  );
};

export default Sprints;
