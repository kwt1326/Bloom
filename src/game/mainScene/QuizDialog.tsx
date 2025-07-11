import quizBg from '/assets/quiz.png'

interface Props {
  handleQuizComplete: (n: number) => void
  showQuiz: boolean
}

const QuizDialog = ({
  handleQuizComplete,
  showQuiz
}: Props) => {
  if (!showQuiz) return null;

  return (
    <>
      {/* 뒤 배경 오버레이 */}
      <div className="fixed inset-0 bg-gray-800/50 z-20" />

      {/* 모달: 모바일 풀 너비, 최대 320px, 화면 아래 20px 위 */}
      <div
        className="
          fixed
          w-full           /* 좁은 화면에선 100% */
          max-w-xs         /* 최대 너비 20rem (320px) */
          left-1/2
          bottom-5         /* 1.25rem = 20px */
          transform -translate-x-1/2
          z-30
          animate-slide-up
        "
        style={{
          top: "35%"
        }}
      >
        <img
          src={quizBg}
          alt="Quiz Background"
          className="w-full relative z-30"
        />

        <div className="flex w-full z-50" style={{
          position: "fixed",
          top: 190,
          width: "100%",
          justifyContent: "space-between"
        }}>
          <div onClick={() => handleQuizComplete(0)} style={{
            height: 60,
            width: 150

          }}></div>
          <div onClick={() => handleQuizComplete(5)} style={{
            width: 150,
            padding: "0 20px",
            height: 60
          }}></div>

        </div>
          </div>
    </>
  )
}

export default QuizDialog
