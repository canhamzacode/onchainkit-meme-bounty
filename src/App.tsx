
import { useAccount } from 'wagmi';
import { useCoins } from './hooks/useCoins';
import { CoinTable } from './components/CoinTable/CoinTable';
import { WalletComponents } from './components/Wallet/Wallet';
import SwapComponents from './components/Swap/Swap';



function App() {
  const { address } = useAccount();
  const { memeCoins, loading } = useCoins();
  console.log(address);

  return (
    <div className='w-full'>
      <nav className='w-full p-4 bg-gray-300 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>CanHamzaCode</h1>
        <WalletComponents />
      </nav>
      <main className='px-4 py-7 mb-4'>
        <div className='w-full max-w-[800px] mx-auto text-center flex flex-col gap-3'>
          <h1 className='text-2xl font-bold'>Top Memes Tokens by Market Capitalization</h1>
          <p className='text-xl'>This page lists the top meme coins and tokens. These projects are listed by market capitalization with the largest first and then descending in order.</p>
        </div>
        <CoinTable  coins={memeCoins} loading={loading} /> 
        <SwapComponents />
      </main>
    </div>
  )
}

export default App
