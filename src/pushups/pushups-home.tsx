
function PushupsHome() {

    const buttonClass = "border-2 rounded-2xl font-bold p-2 w-48";
    const balance = 40;

    return <>
        <img src="/GHPC-logo.png" className="mx-auto justify-self-center"></img>
        <div className="space-y-6 my-6">
            <div className="flex-col items-center justify-center">
                <div>Balance</div>
                <div>{balance}</div>
            </div>
            <div className="space-x-4 flex flex-row items-center justify-center">
                <div className={buttonClass}>
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