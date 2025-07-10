import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

import quizBg from '/assets/quiz.png'

interface Props {
  handleQuizComplete: (n: number) => void
  showQuiz: boolean
  setShowQuiz: (b: boolean) => void
}

const QuizDialog = ({
  handleQuizComplete,
  showQuiz,
  setShowQuiz
}: Props) => {
  if (!showQuiz) return null;

  return (
    <div className="fixed bottom-[30%] left-1/2 transform -translate-x-1/2 z-20 animate-slide-up">
            <img src={quizBg} alt="Quiz Background"
              className="w-full relative z-30 animate-slide-up" />
            <div
              onClick={() => handleQuizComplete(10)}
              className="!bg-transparent border-0 absolute z-40 block w-20 h-12 left-[12%] bottom-[12%] text-left px-4 py-2 rounded"
            />

            <div
              onClick={() => handleQuizComplete(0)}
              className="!bg-transparent border-0 absolute z-40 block w-20 h-12 right-[12%] bottom-[12%] text-left px-4 py-2 rounded"
            />
          </div>
  )

  return (
    <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
      <DialogContent className="
        fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20 animate-slide-up">
          {/* 이제 quizBg 이미지는 content 안에서 z-20 이상이므로 무조건 위에 표시됩니다 */}
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20 animate-slide-up">
            <img src={quizBg} alt="Quiz Background"
              className="w-full mb-4 relative z-30 animate-slide-up" />
            <button
              onClick={() => handleQuizComplete(10)}
              className="!bg-transparent block w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
            />

            <button
              onClick={() => handleQuizComplete(0)}
              className="!bg-transparent block w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
            />
          </div>
        </DialogContent>
    </Dialog>
  )
}

export default QuizDialog
