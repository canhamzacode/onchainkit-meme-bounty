import { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi'; 
import { wagmiConfig } from '../wagmi'; 
 
type Props = { children: ReactNode };
 
const queryClient = new QueryClient(); 
 
function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
          chain={base}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider> 
  );
}
 
export default OnchainProviders;