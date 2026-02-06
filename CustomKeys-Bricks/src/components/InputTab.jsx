import { useEffect, useState } from "react"

function InputTab({ desc, value, pholder, type, o, bgColor, descColor, inputColor, borderColor, asChange, cusMain, cusDes, cusInp }) {
    const [useValue, setValue] = useState('');

    useEffect(() => {
        if (typeof value === 'string' && value && value != useValue)
            setValue(value);
    }, [value]);

    useEffect(() => {
        asChange ? asChange(useValue) : '';
    }, [useValue]);

    return (<div className={`h-fix-3 r-2 b-w-1 b-solid mt-2
            o-${o ?? '19'} bg-c-${bgColor ?? 'light'}
            c-${descColor ?? 'dark'} b-c-${borderColor ?? 'dark'}
            flex ${cusMain ?? ''}`}>

        <div className={`w-per-5 h-per-20 br-c-dark br-solid br-w-1
             flex a-items-c pl-3 pr-1 ${cusDes ?? ''}`}
        >
            {desc ?? 'Input'}
        </div>
        <input type={type ?? 'text'} placeholder={pholder ?? 'Place holder'}
            value={useValue}
            onChange={(e) => {
                const val = e.target.value;
                if (val !== useValue) setValue(val);
            }}
            className={`w-per-15 rr-2 b-w-0 pl-1 pr-2 
            c-${inputColor ?? 'dark'} ${cusInp ?? ''}`} />

    </div>)
}

export default InputTab