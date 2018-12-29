import { IS_FETCHING } from '../../actions/types';

const common = (state = {}, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default common;
