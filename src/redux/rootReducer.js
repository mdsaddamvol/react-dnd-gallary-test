import { combineReducers } from "redux";
import gallaryRuducer from "./gallary/galaryReducer";
import mediaRedecer from "./media-side-bar/mediaReducer";
import modalRuducer from "./modal/modalReducer";

export default combineReducers({
	media: mediaRedecer,
	gallary: gallaryRuducer,
	modal: modalRuducer,
});
