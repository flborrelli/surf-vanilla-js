export default function initFetchBitcoin() {
  async function fetchBitcoin(url){
    try{
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcPreco = document.querySelector('.btc-preco');
      const bitcoinToHundredBRL = (1000 / bitcoinJson.BRL.sell).toFixed(4);
      btcPreco.innerText = bitcoinToHundredBRL;
    }
    catch(err){
      console.log('Something went wrong:', err)
    }
    
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
