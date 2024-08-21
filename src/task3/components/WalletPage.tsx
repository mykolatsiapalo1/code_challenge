// import React, {useMemo} from "react";
//
// interface WalletBalance {
//     currency: string;
//     amount: number;
//     blockchain: string;
// }
//
// interface FormattedWalletBalance extends WalletBalance {
//     formatted: string;
// }
//
// interface Props extends BoxProps {}
//
// const WalletPage: React.FC<Props> = (props: Props) => {
//     const { children, ...rest } = props;
//     const balances = useWalletBalances();
//     const prices = usePrices();
//
//     const getPriority = (blockchain: string): number => {
//         switch (blockchain) {
//             case 'Osmosis':
//                 return 100;
//             case 'Ethereum':
//                 return 50;
//             case 'Arbitrum':
//                 return 30;
//             case 'Zilliqa':
//                 return 20;
//             case 'Neo':
//                 return 20;
//             default:
//                 return -99;
//         }
//     };
//
//     const balancePriorities = useMemo(() =>
//             balances.map(balance => ({
//                 ...balance,
//                 priority: getPriority(balance.blockchain)
//             })),
//         [balances]
//     );
//
//     const sortedBalances = useMemo(() =>
//             balancePriorities
//                 .filter(({ priority, amount }) => priority > -99 && amount > 0)
//                 .sort((lhs, rhs) => rhs.priority - lhs.priority),
//         [balancePriorities]
//     );
//
//     const formattedBalances = useMemo(() =>
//             sortedBalances.map(balance => ({
//                 ...balance,
//                 formatted: balance.amount.toFixed(2)
//             })),
//         [sortedBalances]
//     );
//
//     const rows = useMemo(() =>
//             formattedBalances.map((balance, index) => {
//                 const usdValue = prices[balance.currency] * balance.amount;
//                 return (
//                     <WalletRow
//                         className={classes.row}
//                         key={balance.currency + index}
//                         amount={balance.amount}
//                         usdValue={usdValue}
//                         formattedAmount={balance.formatted}
//                     />
//                 );
//             }),
//         [formattedBalances, prices]
//     );
//
//     return (
//         <div {...rest}>
//             {rows}
//         </div>
//     );
// };
