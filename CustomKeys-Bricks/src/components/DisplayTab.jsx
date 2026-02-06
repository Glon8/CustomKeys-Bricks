function DisplayTab({ desc, value, type, c, bgColor, borderColor, o, cusMain, cusDes, cusVal }) {
    return (<div className={`
        h-fix-3 flex a-items-c bg-c-${bgColor ?? 'light'} 
        o-${o ?? '19'} b-w-1 b-solid
        b-c-${borderColor ?? 'dark'} c-${c ?? 'dark'}
        r-2 mt-2 ${cusMain ?? ''}`}
    >

        <label className={`w-per-${type === 'long' ? '5' : '15'} 
        h-per-20 flex a-items-c ${cusDes ?? ''} rl-2 pl-3 pr-1`}>
            {desc ?? 'Desc'}
        </label>
        <div className={`w-per-${type === 'long' ? '15' : '5'}
        h-per-20 flex j-content-r a-items-c bl-w-1
        bl-solid bl-c-dark rr-2 pr-3 ${cusVal ?? ''}`}>
            <label>{value ?? 'Value'}</label>
        </div>

    </div>)
}

export default DisplayTab