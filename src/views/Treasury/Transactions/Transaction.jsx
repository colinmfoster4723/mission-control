import { ArrowDown, ArrowUp, GoldPaperArrow } from "../../../assets";
import { getHumanTime } from "../../../utilities/getHumanTime";

const MULTISIG_ADDRESS = "0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9";

const Transaction = ({ data, loading }) => {
  const transactionLink = `https://etherscan.io/tx/${data.hash}`;
  const timeStr = getHumanTime((Math.floor(Date.now() / 1000) - data.timeStamp) * 1000);
  const token = data.value / 10 ** data.tokenDecimal;
  const sent = data.from == MULTISIG_ADDRESS.toLocaleLowerCase();
  const value = `${token
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${data.tokenSymbol}`;

  return (
    <div
      className={`component-background relative mt-5 flex w-[336px] flex-col items-center rounded-[15px] border-[0.5px] border-blue-400 dark:border-yellow-100 py-2 shadow shadow-blue-500 hover:scale-105 dark:shadow-yellow-100 sm:w-[400px] 2xl:w-full 2xl:flex-row 2xl:justify-between 2xl:px-5 2xl:py-3 ${
        loading && "loading-component"
      }`}
    >
      {/*Sent or receive*/}
      <div className="relative right-3 flex items-center">
        <span className={`${loading && "loading-line"}`}>{loading ? "" : sent ? <ArrowUp /> : <ArrowDown />}</span>
        <p className={`text ml-3 font-Montserrat text-xl font-semibold text-amber-600 dark:text-moon-gold ${loading && "loading-line"}`}>{sent ? "Sent" : "Received"}</p>
      </div>
      {/*Ammount*/}
      <p
        className={`mt-2 block tracking-wide text-blue-950 dark:text-yellow-50 2xl:tracking-wider  truncate text-lg font-bold 2xl:mt-0 2xl:max-w-[43%] 2xl:hover:overflow-visible 2xl:hover:whitespace-pre xl:hover:text-center`}
      >
        <span className={`${loading && "loading-line"}`}>{value}</span>
      </p>
      {/*Date and Etherscan Link*/}
      <div className="mt-2 flex items-center 2xl:mt-0">
        <p className={`font-semibold text-slate-500 dark:text-slate-300 ${loading && "loading-line"}`}>{timeStr} ago</p>
        {!loading && (
          <a aria-label="Link to transaction information on Etherscan" className={`ml-2 block`} href={transactionLink} target="_blank">
            <GoldPaperArrow loading={loading} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Transaction;
