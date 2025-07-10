import { useVh } from '../../hooks/useVh'

import bg from '/assets/bg.png'
import logo from '/assets/logo.png'
import d1 from '/assets/d_1.png'
import d2 from '/assets/d_2.png'
import d3 from '/assets/d_3.png'
import d4 from '/assets/d_4.png'
import d5 from '/assets/d_5.png'
import d6 from '/assets/d_6.png'
import d7 from '/assets/d_7.png'
import plant1 from '/assets/plants_1.png'
import plant2 from '/assets/plants_2.png'
import plant3 from '/assets/plants_3.png'
import plant4 from '/assets/plants_4.png'
import plant5 from '/assets/plants_5.png'
import pot from '/assets/pot_1.png'
import potShadow from '/assets/pot_shadow.png'
import sunIcon from '/assets/sun_off.png'
import waterIcon from '/assets/wat_off.png'
import windIcon from '/assets/wind_off.png'
import shopIcon from '/assets/shop.png'
import journalIcon from '/assets/book.png'
import trophyIcon from '/assets/ranking.png'
import watering from '/assets/water_1.png'
import sunnying from '/assets/sun_1.png'
import winding from '/assets/wind_1.png'

import FullScreenImage from '@/components/FullSizeImage'
import QuizDialog from './QuizDialog'

import { useState } from 'react'

export default function MainScene() {
  useVh()

  const [action, setAction] = useState<null | 'sun' | 'water' | 'wind'>(null)
  const [currentDay, setCurrentDay] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [score, setScore] = useState(0)

  // 2. Day 구간별 이미지 매핑 함수
  const getPlantSrc = (day: number) => {
    if (day === 1) return plant1
    if (day <= 3) return plant2   // Days 2–3: Sprout
    if (day <= 5) return plant3   // Days 4–5: Bud
    if (day === 6) return plant4   // Day 6: Early bloom
    return plant5                  // Day 7+: Full bloom
  }

  const getDaySrc = (day: number) => {
    return [d1, d2, d3, d4, d5, d6, d7].find((_, i) => i + 1 === day)
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

    if (earned === 10) {
      handleAction("wind")
    }
  }

  const handleAction = (type: 'sun' | 'water' | 'wind') => {
    setAction(type)
    setTimeout(() => setAction(null), 2000) // 2초 후 원복
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '375px',       // 기준 너비
        maxWidth: '100%',     // 화면에 맞춰 축소
        aspectRatio: '375 / 674',
        margin: '0 auto',     // 가운데 정렬
      }}
    >
      <FullScreenImage
        src={bg}
        alt="Bloom Background"
      />

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
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 flex space-x-6 z-10">
        {action !== 'sun' && (
          <button onClick={() => { plusScore(5); handleAction('sun') }}>
            <img src={sunIcon} alt="Sun" className="w-[12%] max-w-[50px]" />
          </button>
        )}
        {action !== 'water' && (
          <button onClick={() => { plusScore(5); handleAction('water') }}>
            <img src={waterIcon} alt="Water" className="w-[12%] max-w-[50px]" />
          </button>
        )}
        {action !== 'wind' && (
          <button onClick={() => setShowQuiz(!showQuiz)}>
            <img src={windIcon} alt="Wind" className="w-[12%] max-w-[50px]" />
          </button>
        )}
      </div>

      {/* Elephaant Watering Image */}
      {(action && action === 'water') && (
        <img
          src={watering}
          alt="Watering"
          className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
        />
      )}

      {(action && action === 'sun') && (
        <img
          src={sunnying}
          alt="Sunny"
          className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
        />
      )}

      {(action && action === 'wind') && (
        <img
          src={winding}
          alt="winding"
          className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[35%] max-w-[180px] z-20 opacity-100 transition-opacity duration-500"
        />
      )}

      {/* 냄비 위에 올릴 식물(단계별로 바뀜) */}
      <img
        src={plantSrc}
        alt={`Day ${currentDay} Plant`}
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[30%] max-w-[160px]"
      />
      <img
        src={pot}
        alt="Pot"
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-[25%] max-w-[140px] z-10"
      />
      <img
        src={potShadow}
        alt="Pot Shadow"
        className="absolute top-[72%] left-1/2 transform -translate-x-1/2 w-[25%] max-w-[140px]"
      />

      {/* 프로그레스 바 */}
      <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 w-[60%] max-w-[300px]">
        <div className="bg-white/50 rounded-full h-2 w-full overflow-hidden">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* ———— 데모용: Day 변경 버튼 ———— */}
      <div className="absolute top-10 flex space-x-2">
        <button
          onClick={() => setCurrentDay(d => Math.max(1, d - 1))}
          className="px-3 py-1 text-amber-900 rounded bg-amber-500"
        >
          Prev Day
        </button>
        <button
          onClick={() => setCurrentDay(d => Math.min(7, d + 1))}
          className="px-3 py-1 text-amber-900 bg-amber-500 rounded"
        >
          Next Day
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6">
        {[shopIcon, journalIcon, trophyIcon].map((src, i) => (
          <button key={i} className="w-[12%] max-w-[60px] h-[12%] max-h-[60px] rounded-lg p-0 bg-transparent">
            <img src={src} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>

      <QuizDialog handleQuizComplete={handleQuizComplete} setShowQuiz={setShowQuiz} showQuiz={showQuiz} />
    </div>
  )
}
