import { CardExpiration, CardNumber, CardType } from "../../@types";
import PendingCardActionType from "./pendingCardActionType";
import { makeActionCreator } from "../../utils/storeUtills";
import type { ActionTypeMap } from "../../utils/storeUtills";

interface SetCardNamePaylaod {
  cardName: string;
}

interface SetCardTypePayload {
  cardType: CardType;
}

interface SetCardNumberPayload {
  cardNumber: CardNumber;
}

interface SetCardExpirationPaylaod {
  cardExpiration: Partial<CardExpiration>;
}

interface SetCardUserNamePayload {
  cardUserName: string;
}

interface SetCardSecurityCodePayload {
  cardSecurityCode: string;
}

interface SetCardPasswordPayload {
  cardPassword: string;
}

const pendingCardActions = {
  setCardName: makeActionCreator(PendingCardActionType.SET_CARD_NAME)<SetCardNamePaylaod>(),
  setCardType: makeActionCreator(PendingCardActionType.SET_CARD_TYPE)<SetCardTypePayload>(),
  setCardNumber: makeActionCreator(PendingCardActionType.SET_CARD_NUMBER)<SetCardNumberPayload>(),
  setCardExpiration: makeActionCreator(PendingCardActionType.SET_CARD_EXPIRATION)<SetCardExpirationPaylaod>(),
  setCardUserName: makeActionCreator(PendingCardActionType.SET_CARD_USER_NAME)<SetCardUserNamePayload>(),
  setCardSecurityCode: makeActionCreator(PendingCardActionType.SET_CARD_SECURITY_CODE)<SetCardSecurityCodePayload>(),
  setCardPassword: makeActionCreator(PendingCardActionType.SET_CARD_PASSWORD)<SetCardPasswordPayload>(),
} as const;

type ActionTypeOfPendingCardAction = ActionTypeMap<typeof pendingCardActions>;
type UnionActionTypeOfPendingCardAction = ActionTypeOfPendingCardAction[keyof ActionTypeOfPendingCardAction];

export default pendingCardActions;
export type { UnionActionTypeOfPendingCardAction };