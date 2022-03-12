import { proxy } from "valtio";
import { devtools } from "valtio/utils";


interface State {
  loginDetails: any;
}

const state = proxy<State>({
    loginDetails: null,
});

devtools(state, "State");

export default state;