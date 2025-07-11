import { useVh } from '../../hooks/useVh'

import bg from '/assets/bg.png'
import logo from '/assets/logo.png'
import d1 from '/assets/d_1.png'
import d2 from '/assets/d_2.png'
import d3 from '/assets/d_3.png'
import d4 from '/assets/d_4.png'
import d5 from '/assets/d_5.png'
import d6 from '/assets/d_6.png'
import db from '/assets/d_b.png'
import plant1 from '/assets/plants_1.png'
import plant2 from '/assets/plants_2.png'
import plant3 from '/assets/plants_3.png'
import plant4 from '/assets/plants_4.png'
import plant5 from '/assets/plants_5.png'
import pot from '/assets/pot_1.png'
import pot2 from '/assets/pot_2.png'
import pota from '/assets/pot_3.png'
import potShadow from '/assets/pot_shadow.png'
import sunIcon from '/assets/sun_off.png'
import waterIcon from '/assets/wat_off.png'
import windIcon from '/assets/wind_off.png'
import shopIcon from '/assets/shop.png'
import journalIcon from '/assets/book.png'
import trophyIcon from '/assets/ranking.png'
import watering from '/assets/water_1.png'
import sunnying from '/assets/sun_1.png'
import sunnyingLight from '/assets/light.png'
import winding from '/assets/wind_1.png'
import gmSun from '/assets/gm_sun.png'
import gmAir from '/assets/gm_air.png'
import gmW from '/assets/gm_w.png'

import FullScreenImage from '@/components/FullSizeImage'
import QuizDialog from './QuizDialog'

import { useState } from 'react'
import BloomDialog from './BloomDialog'

export default function MainScene() {
  useVh()

  const [action, setAction] = useState<null | 'sun' | 'water' | 'wind' | 'fail'>(null)
  const [currentDay, setCurrentDay] = useState(1)
  const [currentPot, setCurrentPot] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [score, setScore] = useState(0)

  const getPlantSrc = (day: number) => {
    if (day <= 2) return plant1
    if (day <= 4) return plant2   // Days 2–3: Sprout
    if (day <= 6) return plant3   // Days 4–5: Bud
    if (day === 7) return plant4   // Day 6: Early bloom
    return plant5                  // Day 7+: Full bloom
  }

  const pots = [pot, pot2, pota]
  const messages = [gmSun, gmAir, gmW]

  const getDaySrc = (day: number) => {
    return [d6, d5, d4, d3, d2, d1, db].find((_, i) => i + 1 === day)
  }

  const plantSrc = getPlantSrc(currentDay)
  const daySrc = getDaySrc(currentDay)


  // Progress bar 퍼센트 계산
  const progressPercent = Math.min(100, score)

  const plusScore = (increase: number) => setScore(score + increase)

  // 퀴즈 완료 시 호출
  const handleQuizComplete = (earned: number) => {
    setScore(prev => prev + earned)
    setShowQuiz(false)

    if (earned === 5) {
      handleAction("wind")
    }
    if (earned === 0) {
      handleAction("fail")
    }
  }

  const handleAction = (type: 'sun' | 'water' | 'wind' | 'fail') => {
    setAction(type)
    if (type === 'fail') {
      setCurrentPot(2)
    } else {
      setCurrentPot(1)
    }
    setTimeout(() => {
      setAction(null)
      setShowMessage(true)
      setCurrentPot(0)
      if (type !== 'fail') {
        setCurrentDay((d) => Math.min(7, d + 1))
      }
      setTimeout(() => setShowMessage(false), 1000)
    }, 2000) // 2초 후 원복
  }

  const getRandomElement = (arr: Array<string>) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

  return (
    <div
      style={{
        position: "relative",
        width: "375px", // 기준 너비
        maxWidth: "100%", // 화면에 맞춰 축소
        aspectRatio: "375 / 674",
        margin: "0 auto", // 가운데 정렬
      }}
    >
      <FullScreenImage src={bg} alt="Bloom Background" />

      {/* 상단 로고 */}
      <img
        src={logo}
        alt="Bloom Logo"
        className="absolute top-4 left-4 w-16 h-auto"
      />

      {/* 상단 우측 D-7 */}
      <img
        src={daySrc}
        alt="D-7"
        className="absolute top-2 right-2 w-12 h-auto"
      />

      {/* 상단 중앙 아이콘들 */}
      {action == null && (
        <div>
          {action !== "sun" && (
            <div
              className="
              absolute
              top-[30%]
              left-[25%]
              transform -translate-x-1/2
              flex
              space-x-4
            "
              onClick={() => {
                plusScore(5);
                handleAction("sun");
              }}
            >
              <img src={sunIcon} className="w-15 h-15" />
            </div>
          )}

          {action !== "water" && (
            <div
              className="
          absolute
          top-[20%]
          left-1/2
          transform -translate-x-1/2
          flex
          space-x-4
        "
              onClick={() => {
                plusScore(5);
                handleAction("water");
              }}
            >
              <img src={waterIcon} className="w-15 h-15" />
            </div>
          )}

          {action !== "wind" && (
            <div
              className="
          absolute
          top-[30%]
          left-[75%]
          transform -translate-x-1/2
          flex
          space-x-4
        "
              onClick={() => setShowQuiz(!showQuiz)}
            >
              <img src={windIcon} className="w-15 h-15" />
            </div>
          )}
        </div>
      )}

      {/* Elephaant Watering Image */}
      {action && action === "water" && (
        <img
          src={watering}
          alt="Watering"
          className="absolute top-[23%] right-[-10%] transform -translate-x-1/2 -rotate-30 w-[45%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
        />
      )}

      {action && action === "sun" && (
        <div>
          <img
            src={sunnying}
            alt="Sunny"
            className="absolute top-[20%] left-[20%] transform -translate-x-1/2 w-[23%] max-w-[180px] z-30 opacity-100 transition-opacity duration-500"
          />
          <img
          src={sunnyingLight}
          alt="Sunny"
          className="absolute top-[20%] left-[20%] transform -translate-x-1/2 w-[23%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
          style={{
            width: 300,
            height: 300,
            left: 145,
            top: 180,
          }}
          />
        </div>
      )}

      {action === "wind" && (
        <div className="absolute">
          <img
            src={winding}
            alt="winding"
            className="absolute max-w-none z-50 transition-opacity duration-500"
            style={{
              left: 40,
              top: -330,
              width: 80
            }}
          />
          <img
            src={winding}
            alt="winding"
            className="absolute max-w-none z-50 transition-opacity duration-500"
            style={{
              left: 270,
              top: -420,
              width: 80
            }}
          />
        </div>
      )}


      {/* 냄비 위에 올릴 식물(단계별로 바뀜) */}
      <img
        src={plantSrc}
        alt={`Day ${currentDay} Plant`}
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[160px]"
      />
      <img
        src={pots[currentPot]}
        alt="Pot"
        className="absolute top-[63%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[140px] z-10"
      />
      <img
        src={potShadow}
        alt="Pot Shadow"
        className="absolute top-[75%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[140px]"
      />

      {/* 프로그레스 바 */}
      <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-[60%] max-w-[300px]">
        <div className="bg-white/50 rounded-full h-2 w-full overflow-hidden">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {showMessage && (
        <img
          src={getRandomElement(messages)}
          alt="message"
          className="absolute top-[75%] left-1/4 w-[80%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
        />
      )}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          transform -translate-x-1/2
          flex
          space-x-6
        "
      >
        {[shopIcon, journalIcon, trophyIcon].map((src, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-lg !p-0 !bg-transparent !bg-none"
          >
            <img src={src} className="w-16 h-16 !bg-none" />
          </div>
        ))}
      </div>

      <QuizDialog
        handleQuizComplete={handleQuizComplete}
        showQuiz={showQuiz}
      />

      {(currentDay === 7) && <BloomDialog />}
    </div>
  );
}
