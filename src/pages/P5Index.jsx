import React, { useState, useEffect } from 'react'
import Sketch from 'react-p5'

const P5Index = () => {
  /* 도형이 처음 위치하는 좌표를 뜻하는 x, y 값 */
  let x = 50;
  let y = 50;
  /* 이미지가 들어갈 객체 */
  let img, newImg;
  /* Sketch 컴포넌트에서 호출할 preload 메서드 */
  const preload = (p5) => {
    img = p5.loadImage('../../img/ifJPbUm9XMsQdt7AQAets-1200-80.jpg');
  }
  /* p5 캔버스가 어디에서부터 시작하는 지를 포함할 setup 메서드 */
  const setup = (p5, canvasParentRef) => {
    /* 캔버스를 생성, 부모 요소가 따로 없다면 p5 자체에서 생성됨 확인 */
    /* console.log(p5, canvasParentRef); */

    /* 캔버스의 영역을 X, Y로 지정, 부모 요소는 어떤 요소인지 지정 */
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.image(img, 0, 0);
  }
  /* draw 메서드는 해당 캔버스를 어떻게 편집할지 지정할 수 있음
  컴포넌트에서 draw 메서드를 정의해야 해당 캔버스를 인지 */
  /* const draw = (p5) => {
    해당 캔버스의 배경색깔 지정
    p5.background(0);

    해당 캔버스에 도형을 그림
    첫번째와 두번째 인수는 도형의 시작 좌표
    세번째와 네번째 인수는 도형의 가로와 세로 크기
    p5.ellipse(x, y, 70, 70);
    
    x 값을 계속 증가하여 원이 계속 움직임
    x++;
  } */

  return (
    <>
      {/* Sketch 컴포넌트를 먼저 전제 */}
      <Sketch preload={preload} setup={setup}></Sketch>
    </>
  )
}

export default P5Index
