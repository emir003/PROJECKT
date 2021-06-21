import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GameImg from "../img/game.jpg";
import DgameImg from "../img/dgame.jpg";
import WgameImg from "../img/wgame.jpg";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={GameImg} alt="Game" />
        <Carousel.Caption>
          <h3>Game image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            perferendis magni! Reiciendis atque quae ducimus libero accusantium
            expedita. Eaque voluptatem provident suscipit facere neque fuga?
            Blanditiis voluptas alias deserunt autem.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DgameImg} alt="Game" />
        <Carousel.Caption>
          <h3>Game image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            perferendis magni! Reiciendis atque quae ducimus libero accusantium
            expedita. Eaque voluptatem provident suscipit facere neque fuga?
            Blanditiis voluptas alias deserunt autem.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WgameImg} alt="Game" />
        <Carousel.Caption>
          <h3>Game image</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            perferendis magni! Reiciendis atque quae ducimus libero accusantium
            expedita. Eaque voluptatem provident suscipit facere neque fuga?
            Blanditiis voluptas alias deserunt autem.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
