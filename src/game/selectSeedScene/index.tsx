import { Link } from "react-router-dom";
import FullScreenImage from "@/components/FullSizeImage";
import { useVh } from "@/hooks/useVh";

// 이미지 임포트 (프로젝트 경로에 맞게 조정)
// import seedRegular from '/assets/seed-regular.png'
// import seedSpecial from '/assets/seed-special.png'
// import donateBtn from '/assets/btn-donate.png'

export default function SelectSeedScene() {
  useVh()

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
      {/* 배경 이미지 */}
      <FullScreenImage src="assets/seed.png" alt="Seed Selection" />

      {/* 첫 번째 Seed 클릭 영역 */}
      <Link
        to="/main"
        style={{
          position: 'absolute',
          top: '55%',
          left: '20%',
          width: '30%',
          height: '20%',       // 컨테이너 높이에 비례
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      />

      {/* 두 번째 Seed 클릭 영역 */}
      <Link
        to="/main"
        style={{
          position: 'absolute',
          top: '55%',
          left: '80%',
          width: '30%',
          height: '20%',       // 컨테이너 높이에 비례
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      />

      {/* Donate 클릭 영역 */}
      <Link
        to="/donate"
        style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          width: '50%',
          height: '8%',        // 컨테이너 높이에 비례
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      />
    </div>
  )
}
