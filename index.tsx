import React from "react";
import { Calendar } from "./Calendar";
import { DivWrapper } from "./DivWrapper";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import frame427320856 from "./frame-427320856.png";
import frame4273208812 from "./frame-427320881-2.png";
import frame427320881 from "./frame-427320881.png";
import frame4273208822 from "./frame-427320882-2.png";
import frame427320882 from "./frame-427320882.png";
import frame4273208832 from "./frame-427320883-2.png";
import frame427320883 from "./frame-427320883.png";
import frame4273208842 from "./frame-427320884-2.png";
import frame427320884 from "./frame-427320884.png";
import frame4273208852 from "./frame-427320885-2.png";
import frame427320885 from "./frame-427320885.png";
import glow2 from "./glow-2.svg";
import glow3 from "./glow-3.svg";
import glow from "./glow.svg";
import image from "./image.png";
import image1 from "./image.svg";
import "./style.css";

export const Teste = (): JSX.Element => {
  return (
    <div className="teste">
      <div className="div-2">
        <div className="overlap">
          <img className="glow" alt="Glow" src={glow} />

          <div className="CONTENT">
            <div className="HERO">
              <div className="paragraph-container">
                <p className="a-maior-comunidade">
                  A maior comunidade de
                  <br />
                  memecoins do Brasil. 🇧
                </p>
              </div>
            </div>
          </div>

          <header className="HEADER">
            <div className="group" />
          </header>

          <div className="group-2">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <p className="figma-community-3">
                Descubra os trendings do momento
              </p>
            </div>

            <img className="frame-4" alt="Frame" src={frame427320856} />
          </div>

          <div className="group-3">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <p className="figma-community-3">
                Descubra os trendings do momento
              </p>
            </div>

            <img className="frame-5" alt="Frame" src={frame427320881} />
          </div>

          <Frame />
          <div className="group-4">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <p className="figma-community-3">
                Descubra os trendings do momento
              </p>
            </div>

            <img className="frame-5" alt="Frame" src={frame427320882} />
          </div>
        </div>

        <div className="overlap-2">
          <img className="glow-2" alt="Glow" src={image1} />

          <img className="glow-3" alt="Glow" src={glow3} />

          <FrameWrapper />
          <img className="glow-4" alt="Glow" src={glow2} />

          <div className="text-wrapper-9">Sobre a Elixir</div>

          <DivWrapper />
          <img className="frame-6" alt="Frame" src={frame4273208822} />

          <img className="frame-7" alt="Frame" src={frame4273208832} />

          <img className="frame-8" alt="Frame" src={frame4273208842} />

          <div className="HERO-2">
            <div className="paragraph-container">
              <div className="text-wrapper-10">BENEFÍCIOS</div>
            </div>
          </div>

          <Calendar />
          <div className="group-5">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <p className="figma-community-3">
                Descubra os trendings do momento
              </p>
            </div>

            <img className="frame-9" alt="Frame" src={frame4273208812} />
          </div>

          <p className="figma-community-4">
            Com anos de mercado, nós, administradores da Elixir, temos o maior
            ecossistema brasileiro do mercado de memecoins, englobando
            ferramentas, estratégias e aulas para que você possa maximizar a sua
            operação e se tornar um trader qualificado dentro do mercado.
          </p>

          <div className="group-6">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <div className="overlap-group-2">
                <p className="figma-community-5">
                  Descubra os trendings do momento
                </p>

                <p className="figma-community-5">
                  Descubra os trendings do momento
                </p>
              </div>
            </div>

            <img className="frame-10" alt="Frame" src={frame427320883} />
          </div>

          <div className="group-7">
            <div className="frame-2">
              <div className="frame-3">
                <div className="figma-community-2">Os melhores tokens</div>
              </div>

              <p className="figma-community-3">
                Descubra os trendings do momento
              </p>
            </div>

            <img className="frame-11" alt="Frame" src={frame427320884} />
          </div>

          <p className="figma-community-6">O que a comunidade te da acesso?</p>
        </div>

        <div className="testing-environment">
          <p className="text-wrapper-11">Garanta sua vaga na comunidade!</p>

          <img className="frame-12" alt="Frame" src={frame4273208852} />

          <img className="frame-12" alt="Frame" src={image} />

          <img className="frame-12" alt="Frame" src={frame427320885} />
        </div>

        <p className="label">
          2025 Elixir Alpha Corporation ®<br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
