import CONSTANTS from '../constants';

export const sendListChosenCategory = (payload) => ({
  type: CONSTANTS.SEND_LIST_CHOSEN_CATEGORY,
  payload
});