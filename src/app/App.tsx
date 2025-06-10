import { FC } from "react";

import styles from "./App.module.scss";

const numberOfDots = 6;
const angleStepBetweenDots = 360 / numberOfDots;

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Исторические даты</h2>

        <div className={styles.timeline}>
          <div className={styles.yearLeft}>2015</div>
          <div className={styles.circle}>
            <div className={styles.dots}>
              {[...Array(angleStepBetweenDots)].map((_, i) => (
                <div
                  key={i}
                  className={styles.dot}
                  style={{
                    transform: `rotate(${
                      angleStepBetweenDots * i
                    }deg) translate(190px) rotate(-${
                      angleStepBetweenDots * i
                    }deg)`,
                  }}
                />
              ))}
              <div className={styles.countCircle}>
                6<span className={styles.label}>Наука</span>
              </div>
            </div>
          </div>
          <div className={styles.yearRight}>2022</div>
        </div>

        <div className={styles.navigation}>
          <div className={styles.slideCounter}>06/06</div>
          <button className={styles.navButton}>&lt;</button>
          <button className={styles.navButton}>&gt;</button>
        </div>

        <div className={styles.slider}>
          <div className={styles.slide}>
            <span>2015</span>
            <p>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </p>
          </div>
          <div className={styles.slide}>
            <span>2016</span>
            <p>
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </p>
          </div>
          <div className={styles.slide}>
            <span>2017</span>
            <p>
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
