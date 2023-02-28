import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const P5copy = () => {
  let img, newImg;

  const preload = (p5) => {
    /* 인스턴스에 이미지 부르기 */
    img = p5.loadImage("../../img/ifJPbUm9XMsQdt7AQAets-1200-80.jpg");
  };
  const setup = (p5, canvasParentRef) => {
    /* 캔버스 생성, 이미지의 너비는 유지, 높이 * 2 */
    p5.createCanvas(500, 1000).parent(canvasParentRef);
    /* newImg에 할당, 이미지 너비와 높이 만큼 */
    newImg = p5.createImage(img.width, img.height);
    /* 배경색 지정 */
    p5.background(100);
    /* 이미지 띄워보기 */
    p5.image(img, 0, 0);
    /* 이미지 카피 메서드 실행, p5 인수로 넘기기 */
    imgCopy(p5);
  }
  /* p5는 파라미터로 받아오기 */
  const imgCopy = (p5) => {
    /* img에 loadPixels 메서드 호출 */
    img.loadPixels();
    /* 새 이미지에 loadPixels 메서드 호출 */
    newImg.loadPixels();
    /* 픽셀 호출을 알려고 함, [0]은 R, [1]은 G, [2]는 B, [3]은 알파 값을 말함 */
    console.log(img.pixels[0]);
    console.log(img.pixels[1]);
    console.log(img.pixels[2]);
    console.log(img.pixels[3]);
    console.log(img.pixels);
    for(let i = 0; i < img.width * img.height * 4; i += 4) {
      newImg.pixels[i + 0] = img.pixels[i + 0];
      newImg.pixels[i + 1] = img.pixels[i + 1];
      newImg.pixels[i + 2] = img.pixels[i + 2];
      newImg.pixels[i + 3] = img.pixels[i + 3];
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 500);
  }

  return (
    <div>
      <Sketch preload={preload} setup={setup}></Sketch>
    </div>
  );
};

export default P5copy;
