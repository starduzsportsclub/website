import { proxy } from "valtio";
import { devtools } from "valtio/utils";


interface State {
  loginDetails: any;
  qrCodeDetails: any;
}

const state = proxy<State>({
    loginDetails: null,
    qrCodeDetails: null
});

devtools(state, "State");

export default state;