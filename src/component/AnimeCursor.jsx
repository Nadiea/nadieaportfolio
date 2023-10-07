
import AnimatedCursor from "react-animated-cursor";

export default function AnimeCursor() {
  return (
    <AnimatedCursor
    innerSize={28}
    outerSize={20}
    color="255, 255, 255"
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
  );
}
