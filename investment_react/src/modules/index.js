import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import investjournalReducer from "./InvestmentJournalModule";
import investjournaldetailReducer from "./InvestmentJournalDetailModule";

const rootReducer = combineReducers({
    memberReducer,
    investjournalReducer,
    investjournaldetailReducer,
});

export default rootReducer;