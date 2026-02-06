import { useEffect, useState } from "react"

function ListTab({ desc, value, options, opacity, bgColor, descColor, inputColor, borderColor, asChange, cusMain, cusDes, cusList }) {
    const [useValue, setValue] = useState('Color');

    useEffect(() => {
        if (value && value != useValue)
            setValue(value);
    }, [value]);

    return (<div className={`h-fix-3 r-2 b-w-1 b-solid mt-2
            o-${opacity ?? '19'} bg-c-${bgColor ?? 'light'}
            c-${descColor ?? 'dark'} b-c-${borderColor ?? 'dark'}
            flex ${cusMain ?? ''}`}>
        <div className={`w-per-5 h-per-20 br-c-dark br-solid
            br-w-1 flex a-items-c pl-3 pr-1 ${cusDes ?? ''}`}>
            {desc ?? 'Choose'}
        </div>
        <select value={useValue}
            className={`w-per-15 rr-2 b-w-0 pr-3 
            c-${inputColor ?? 'dark'} ${cusList ?? ''}`}
            onChange={(e) => {
                const val = e.target.value;

                if (val != useValue) {
                    setValue(val);
                    asChange?.(val);
                }
            }}>
            {
                options ?
                    options.map((item, ind) => {
                        return (<option key={ind} value={item?.id}>{item?.show}</option>)
                    }) :
                    (<option value={'default'}>Default</option>)
            }
        </select>
    </div>)
}

export default ListTab