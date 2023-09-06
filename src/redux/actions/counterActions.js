// action creators
import * as actionTypes from "./actionTypes";

// Redux'da durumun (state) nasıl değiştirileceğini tanımlayan işlevler
// Bu işlevler, aksiyonları oluşturur ve bunları dispatch işlemine sunar.
export const increaseCounter = () => ({
  //type özelliği, hangi türde bir aksiyon olduğunu belirtir
  type: actionTypes.INCREASE_COUNTER,
  //payload özelliği ise artış miktarını belirtir
  payload: 1,
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
