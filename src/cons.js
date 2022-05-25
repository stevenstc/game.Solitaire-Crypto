import {APP_CSRK, APP_TOKNN} from "@env";

const WS = true;  //TESTNET

const SCtest = "0xD9bb599445B160D9606EfDa11c34E009CCee237a";// contrato test market v2
const SC3test = "0xcB61d29BB0266263C60Caf982A10b307Fd39F73f";// contrado test Staking v2

const SC = "0xF29bACE830B2a81c33bC360317A0f9abe154c288";// direccion del contrato Market
const SC3 = "0xbF17C2Dda48158c6dc23DEEcD41690230C7517D8";// direccion del contrato Staking

const SCK = APP_CSRK;
const SCKDTT = APP_TOKNN;

const API = "http://solitairecrypto.ml:3004/";

const WALLETPAY = "0x1C261DE3DA6873c225079c73d7bA1B111eb9a5b3";
const FACTOR_GAS = 2;


export default {WALLETPAY,FACTOR_GAS, WS, SCtest, SC3test, SC, SC3, SCK, SCKDTT, API};
