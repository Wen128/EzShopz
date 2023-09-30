import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const SendSOL: FC<{ price: number }> = ({ price }) => {
  const navigate = useNavigate();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // 890880 lamports as of 2022-09-01
    const realPrice = 1000000000 * price;
    const lamports = realPrice;
    console.log(lamports, realPrice, price);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports,
      })
    );

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });

    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });

    navigate('/invoice');
  }, [publicKey, sendTransaction, connection, price, navigate]);

  return (
    <button
      onClick={onClick}
      disabled={!publicKey}
      className="bg-green-500 w-44 text-lg font-semibold h-12 rounded-md text-white ml-6 hover:bg-green-600"
    >
      Pay
    </button>
  );
};
