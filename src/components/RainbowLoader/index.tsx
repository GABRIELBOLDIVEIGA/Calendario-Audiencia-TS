import styles from "./RainbowLoader.module.css";

export default function RainbowLoader() {
  return (
    <div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
  </div>
</div>
  )
}
