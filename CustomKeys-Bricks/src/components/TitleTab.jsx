function TitleTab({ value, fontSize, fontWeight, c, font, cusMain }) {
    return (<label className={`mt-2 f-w-${fontWeight ?? '1'}
        f-s-${fontSize ?? '4'} c-${c ?? 'dark'}
        ${font ?? 'font-tufuli-bold'} ${cusMain ?? ''}`}
    >{value ?? ''}</label>)
}

export default TitleTab