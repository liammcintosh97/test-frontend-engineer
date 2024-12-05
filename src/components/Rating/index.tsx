import { FaStar, FaStarHalf } from "react-icons/fa";
import { RatingProps } from "./type";

/**
 * Renders a 5 star rating component that shows the value
 * @param {RatingProps} props - The props of the Rating component
 * @returns {JSX.Element}
 */
export default function Rating({value}: RatingProps): JSX.Element {
  const baseColor = "#cbd5e1";
  const highlightColor = "#fde047";
  const floor = slipFloor(value);
  const half = floor % 1 === 0.5;
  const wholes = floor - (half ? 0.5 : 0);

  return (
    <div className="flex flex-col -space-y-4">
      <div className="flex flex-row gap-2 ">
        <FaStar color={baseColor}/>
        <FaStar color={baseColor}/>
        <FaStar color={baseColor}/>
        <FaStar color={baseColor}/>
        <FaStar color={baseColor}/>
      </div>
      <div className="flex flex-row gap-2">
        {Array.from({length: wholes}).map((_, index) => <FaStar key={index} color={highlightColor}/>)}
        {half && <FaStarHalf color={highlightColor}/>}
      </div>
    </div>
  )
}

/**
 * Rounds a number to the nearest half
 * @returns {number}
 */
function slipFloor(num: number): number {
  const f = Math.floor(num);
  if(num-f < 0.5){
    return f;
  } else if ( num-f > 0.5){
    return f + 1;
  }

  return f+0.5;
}