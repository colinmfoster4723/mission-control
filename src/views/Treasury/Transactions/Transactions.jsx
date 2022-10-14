import {useState, useEffect} from 'react';
import Header from '../../../components/Header';
import Transaction from "./Transaction"
import { Line } from '../../../components/Layout';

// MoonDAO Multsig Wallet address.
const MULTISIG_ADDRESS = '0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9';
const ETHERSCAN_API_BASE = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY = 'TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS';

const WalletTransactions = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const url = ETHERSCAN_API_BASE +
    `?module=account&action=tokentx&address=${MULTISIG_ADDRESS}` +
    `&page=1` +
    `&offset=10` +
    `&sort=desc` +
    `&apikey=${ETHERSCAN_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.result);
          setIsLoaded(true);
          setTransactions(result.result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="mt-12 lg:mt-0 xl:w-[45%] xl:max-w-[700px]">
      <Header text="Recent Activity"/>
      <Line/>
      <div className='mt-10'>
      {transactions.map((e, i) =><Transaction key={i} data={e} />)}
      </div>
      </section>
    )
  }
}

export default WalletTransactions