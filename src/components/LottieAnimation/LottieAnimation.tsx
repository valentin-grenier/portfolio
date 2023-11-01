"use client";

import { ILottieAnimation } from "@/app/@types";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function LottieAnimation({ lottie }: ILottieAnimation) {
  return (
    <Player
      autoplay
      loop
      src={lottie}
      style={{ height: "250px", width: "250px" }}
    ></Player>
  );
}
