import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GameImg from "../assets//game.jpg";
import DgameImg from "../assets//dgame.jpg";
import WgameImg from "../assets/wgame.jpg";
import "./Header.css";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" id="d-block" src={GameImg} alt="Game" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" id="d-block" src={DgameImg} alt="Game" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" id="d-block" src={WgameImg} alt="Game" />
      </Carousel.Item>
    </Carousel>
  );
}
