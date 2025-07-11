import nft from '/assets/nft.png'

const BloomDialog = () => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800/50 z-20"/>

      {/* <div
        className="
          fixed
          w-[70%]
          bottom-[30%]
          left-[50%]
          transform -translate-x-1/2
          z-30
        "
      > */}
      <div className="
      fixed
          w-full           /* 좁은 화면에선 100% */
          max-w-xs         /* 최대 너비 20rem (320px) */
          left-1/2
          bottom-5         /* 1.25rem = 20px */
          transform -translate-x-1/2
          z-30
          "
          style={{
          top: "20%"
        }}
          >
        <img
          src={nft}
          alt="nft-card"
          className="w-full relative z-30"
        />
      </div>
    </>
  )
}

export default BloomDialog
