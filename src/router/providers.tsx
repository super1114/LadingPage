import {
    ConnectionProvider,
    useLocalStorage,
    WalletProvider,
  } from '@solana/wallet-adapter-react';
  import { clusterApiUrl } from '@solana/web3.js';
  import { FC, useMemo, useCallback } from 'react';
  import { UseWalletProvider } from 'use-wallet';
  import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
  import {
    WalletConnectButton as ReactUIWalletConnectButton,
    WalletDisconnectButton as ReactUIWalletDisconnectButton,
    WalletModalButton as ReactUIWalletModalButton,
    WalletModalProvider as ReactUIWalletModalProvider,
    WalletMultiButton as ReactUIWalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
  import {
    getBloctoWallet,
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolletExtensionWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import { useSnackbar } from 'notistack';
  export const Providers: FC = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', true);
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSolflareWallet(),
            getSlopeWallet(),
            getTorusWallet({
                options: {
                    clientId: 'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ',
                },
            }),
            getLedgerWallet(),
            getBloctoWallet({ network }),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network }),
        ],
        [network]
    );
    // const { enqueueSnackbar } = useSnackbar();
    const onError = useCallback(
        (error: WalletError) => {
            // enqueueSnackbar(error.message ? `${error.name}: ${error.message}` : error.name, { variant: 'error' });
            console.error(error);
        },
        []
    );
    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
          <UseWalletProvider>
            <ReactUIWalletModalProvider>
              {children}
            </ReactUIWalletModalProvider>
          </UseWalletProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
  };
  