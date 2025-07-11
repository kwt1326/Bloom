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
      {/* 1) 뒷배경 오버레이: fixed로 전체 화면, 반투명 회색, 클릭 차단 */}
      <div
        className="fixed inset-0 bg-gray-800/50 z-20"
        // 만약 클릭 시 모달을 닫고 싶으시면 아래 주석 해제
        // onClick={() => handleQuizComplete(0)}
      />

      {/* 2) 실제 모달 컨텐츠 */}
      <div
        className="
          fixed
          w-[70%]
          bottom-[30%]
          left-[50%]
          transform -translate-x-1/2
          z-30
          animate-slide-up
        "
      >
        <img
          src={quizBg}
          alt="Quiz Background"
          className="w-full relative z-30"
        />

        {/* 정답 버튼 */}
        <div
          onClick={() => handleQuizComplete(10)}
          className="
            absolute
            left-[12%]
            bottom-[12%]
            w-20 h-12
            z-40
          "
        />

        {/* 오답 버튼 */}
        <div
          onClick={() => handleQuizComplete(0)}
          className="
            absolute
            right-[12%]
            bottom-[12%]
            w-20 h-12
            z-40
          "
        />
      </div>
    </>
  )
}

export default QuizDialog
