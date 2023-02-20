import { CARD_NUMBER } from "../constants/card";
import Span from "./Span";
import useCardNumber from "../hooks/useCardNumber";

// TODO : {"-"} 구분자 입력
export default function CardNumberInput({cardNumber, onChange}) {
  // const dataId = useRef(0); // TODO : nextsibling auto focus & key 값 제어 (useRef)

  return (
    <div className="input-container">
      <Span className="input-title">카드 번호</Span>
      <div className="input-box">
        {["num0", "num1", "num2", "num3"].map((name, index) => {
          return (
            <input
              className="input-basic card-number"
              type={(index < 2)? "text" : "password"}
              name={name}
              key={index}
              onChange={onChange}
              value={cardNumber[name]}
              maxLength={CARD_NUMBER.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
