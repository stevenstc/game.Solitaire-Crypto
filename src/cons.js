import {APP_CSRK, APP_TOKNN} from "@env";

const WS = true;  //TESTNET

var SC = "0x1860D0262b201Cc405D50DD9F0442E3C4a137Da2";// contrato Market
var SC2 = "0xde7b9c194C20Eae069828CC0e5C7f92207686145";// contrato GAME
var SC3 = "00x3a448b5b1E26149746afa3ebed9c9DeeA482d6b4";// contrato Staking
var chainId = '0x38';

if(false){
    SC = "0xD9bb599445B160D9606EfDa11c34E009CCee237a";// contrato test market v2
    SC2 = "0x1F902Dc0d3A7BFdff5a67d7Ed873e7Dc50DC0987";// contrato test GAME
    SC3 = "0xcB61d29BB0266263C60Caf982A10b307Fd39F73f";// contrado test Staking v2
    chainId = '0x61';
}

const SCK = APP_CSRK;
const SCKDTT = APP_TOKNN;

const API = "https://solitairecrypto.ml/";

const WALLETPAY = "0x793Afd1E23996303127171c65F56C3E9E4A8CBb1";
const FACTOR_GAS = 2;


export default {WALLETPAY,FACTOR_GAS, WS, SC, SC2, SC3, chainId, SCK, SCKDTT, API};
