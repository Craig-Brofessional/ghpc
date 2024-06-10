import { useEffect, useState } from "react";
import { PushupApi } from "../api/pushupApi";

function PushupsHome() {
    const [balance, setBalance] = useState<string|null>(null);
    const buttonClass = "border-2 rounded-2xl font-bold p-2 w-48";

    const getBalance = async () => {
        const b = await PushupApi.getBalance(1);
        const b_formatted = b ? b.toString() : null;
        setBalance(b_formatted);
    }

    const increment = async (amount: number) => {
        const newBalance = await PushupApi.incrementBalance(1, amount);
        setBalance(newBalance);
    }

    useEffect(() => {
        getBalance();
    }, []);

    return <>
        <img src="/GHPC-logo.png" className="mx-auto justify-self-center"></img>
        <div className="space-y-6 my-6">
            <div className="flex-col items-center justify-center">
                <div>Balance</div>
                {balance ? (<div>{balance}</div>) :
                    (<div>Loading</div>)}
            </div>
            <div className="space-x-4 flex flex-row items-center justify-center">
                <div className={buttonClass} onClick={() => increment(10)}>
                    <div>Phone in Pocket</div>
                    <div>+10</div>
                </div>
                <div className={buttonClass}>
                    <div>Pushups Completed</div>
                    <div>-10</div>
                </div>
            </div>
            <div className="space-x-4 flex flex-row items-center justify-center">
                <div className={buttonClass}>
                    <div>Other</div>
                    <div>+/-</div>
                </div>
                <div className={buttonClass}>
                    <div>Undo</div>
                    <div>-10</div>
                </div>
            </div>
        </div>
    </>;
}

export { PushupsHome };