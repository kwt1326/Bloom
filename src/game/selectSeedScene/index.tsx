import { Link } from "react-router-dom";
import FullScreenImage from "@/components/FullSizeImage";
import { useVh } from "@/hooks/useVh";

// 이미지 임포트 (프로젝트 경로에 맞게 조정)
import seed1 from '/assets/seed_1.png'
import seed1bg from '/assets/seed_1_bg.png'
import seed2 from '/assets/seed_2.png'
import seed2bg from '/assets/seed_2_bg.png'
import seedRegText from '/assets/seed_reg_text.png'
import seedSpeText from '/assets/seed_spe_text.png'

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
      <FullScreenImage src="assets/seed_front.png" alt="Seed Selection" />

      {/* 첫 번째 Seed 클릭 영역 */}
      <Link
        to="/main"
        style={{
          position: 'absolute',
          top: '58%',
          left: '25%',
          width: '30%',
          height: '20%',       // 컨테이너 높이에 비례
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <img className="absolute" src={seed1} alt="seed1" />
        <img className="" src={seed1bg} alt="seed1bg" />
        <img className="pt-4" src={seedRegText} alt="seed1bg" />
      </Link>

      {/* 두 번째 Seed 클릭 영역 */}
      <Link
        to="https://onetreeplanted.org/pages/donate-crypto?srsltid=AfmBOor6shc51nr-UZpgg1lQ2hgq17WLywixyy0d_M5w7fcoZHdiiHm7"
        style={{
          position: 'absolute',
          top: '58%',
          left: '75%',
          width: '30%',
          height: '20%',       // 컨테이너 높이에 비례
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <img className="
              absolute
              
        " src={seed2} alt="seed2" />
        <img className="" src={seed2bg} alt="seed2bg" />
        <img className="pt-4" src={seedSpeText} alt="seed1bg" />
      </Link>
    </div>
  )
}
