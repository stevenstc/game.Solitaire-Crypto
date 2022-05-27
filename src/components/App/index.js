import React, { Component } from "react";

import Web3 from "web3";

import Inventory from "../Inventory";
import Market from "../Market";
import TronLinkGuide from "../TronLinkGuide";
import cons from "../../cons";

import abiMarket from "../../market";
import abiStaking from "../../staking";
import abiGame from "../../game";


var addressMarket = cons.SC;
var addressGame = cons.SC2;
var addressStaking = cons.SC3;

var chainId = cons.chainId;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: false,
      metamask: false,
      conectado: false,
      currentAccount: null,
      binanceM:{
        web3: null,
        contractToken: null,
        contractMarket: null
      },
      baneado: false
      
    };

    this.conectar = this.conectar.bind(this);
  }

  async componentDidMount() {

    setInterval(async() => {
      this.conectar();

    },3*1000);

  }

  async conectar(){

    if (typeof window.ethereum !== 'undefined') {

      this.setState({
        metamask: true
      })  

      if(!this.state.baneado){ 
          
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainId}],
        });
        
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(async(accounts) => {

          var ban = false;//await fetch(cons.API+"api/v1/user/ban/"+accounts[0]);
          //ban = await ban.text();

          if(ban === "true"){
            ban = true;
          }else{
            ban = false;
          }

          //console.log(accounts)
          this.setState({
            currentAccount: accounts[0],
            metamask: true,
            conectado: true,
            baneado: ban
          })
        })
        .catch((error) => {
          console.error(error)
          this.setState({
            metamask: true,
            conectado: false,
            baneado: false
          })   
        });
  
        var web3 = new Web3(window.web3.currentProvider); 
        var contractMarket = new web3.eth.Contract(
          abiMarket,
          addressMarket
        );
        var contractGame = new web3.eth.Contract(
          abiGame,
          addressGame
        );
        var contractStaking = new web3.eth.Contract(
          abiStaking,
          addressStaking
        );
  
        this.setState({
          binanceM:{
            web3: web3,
            contractMarket: contractMarket,
            contractGame: contractGame,
            contractStaking: contractStaking,
          }
        })
  

      }else{

            var ban = false;//await fetch(cons.API+"api/v1/user/ban/"+accounts[0]);
            //ban = await ban.text();

            if(ban === "true"){
              ban = true;
            }else{
              ban = false;
            }

            this.setState({
              baneado: ban
            })
  
      }
        
    } else {    
      this.setState({
        metamask: false,
        conectado: false
      })         
          
    }

    
    }

  render() {

    
      var getString = "";
      var loc = document.location.href;
      //console.log(loc);
      if(loc.indexOf('?')>0){
                
        getString = loc.split('?')[1];
        getString = getString.split('#')[0];
        getString = getString.split('&')[0];
        getString = getString.split('=')[1];
  
      }

        if(!this.state.baneado){

          if (!this.state.metamask) return (<TronLinkGuide />);
    
          if (!this.state.conectado) return (<TronLinkGuide installed />);
    
          switch (getString) {
            case "market":
              return(<Market wallet={this.state.binanceM} currentAccount={this.state.currentAccount}/>);

           case "inventory":
              return(<Inventory wallet={this.state.binanceM} currentAccount={this.state.currentAccount}/>);
            default:
              return(<Inventory wallet={this.state.binanceM} currentAccount={this.state.currentAccount}/>);
          } 
        }else{
          return(<div className="container"><h1 className="text-center">Loading...</h1></div>);

        }

  }
}
export default App;