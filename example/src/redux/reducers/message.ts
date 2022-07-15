import type {HMSMessage} from '@100mslive/react-native-hms';
import ActionTypes from '../actionTypes';

type ActionType = {
  payload: {data: HMSMessage; isLocal: boolean};
  type: String;
};

type InitType = {
  messages: Array<{data: HMSMessage; isLocal: boolean}>;
};

const INITIAL_STATE: InitType = {
  messages: [],
};

const messageReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE.REQUEST:
      return {...state, messages: [...state.messages, action.payload]};
    case ActionTypes.CLEAR_MESSAGE_DATA.REQUEST:
      return {...state, messages: []};
    default:
      return state;
  }
};

export default messageReducer;
