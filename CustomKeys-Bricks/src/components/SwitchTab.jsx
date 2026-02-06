import { useEffect, useState } from "react"

function SwitchTab({ value, asChange, type, h, c, cSign, bgColor, borderColor, o, cusMain, cusDes, cusSign }) {
    const [useSwitch, setSwitch] = useState(false);

    const plain = {
        true: 'ON',
        false: 'OFF'
    }

    const emojis = {
        true: '\u{2714}',
        false: '\u{2718}',
    }

    const sign = {
        true: 'dark',
        false: 'purple',
    }

    useEffect(() => {
        asChange ? asChange() : '';
    }, [useSwitch]);

    return (<a href="#" onClick={(e) => {
        e.preventDefault();

        setSwitch(!useSwitch);
    }}
        className={`w-per-20 ${h ?? 'h-fix-3'} flex t-d-none
        a-items-c
        bg-c-${bgColor ??
            (type === 'co' ?
                sign[useSwitch] :
                'light')} 
        o-${o ?? '19'} b-w-1 b-solid b-c-${borderColor ?? 'dark'}
         mt-2 ${cusMain ?? ''} r-2`} >

        <div className={`w-per-15 h-per-20 flex a-items-c 
        c-${c ?? (type === 'co' ? (
                useSwitch ? 'light-purple' : 'light'
            ) : 'dark')} pl-3 pr-1 ${cusDes ?? ''} rl-2
        ${type === 'pl' ? `br-w-1 br-solid b-c-${borderColor ?? 'dark'}` : ''}`}>
            {value ?? 'Switch'}
        </div>
        <div className={`w-per-5 h-per-20 f-s-4 flex j-content-r pr-3
            a-items-c rr-2 ${cusSign ?? ''}`}
        >
            <label className={`c-${cSign ?? (c ?? 'dark')}`}>
                {type === 'em' ?
                    emojis[useSwitch] :
                    (type === 'co' ?
                        '' :
                        plain[useSwitch])}
            </label>
        </div>

    </a>)
}

export default SwitchTab