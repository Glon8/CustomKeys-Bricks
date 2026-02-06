function Frame({ children, o, bgColor, cusMain }) {
    return (<div className={`o-${o ?? '19'} bg-c-${bgColor ?? 'light'} 
        b-w-0 r-3 px-2 py-3 ${cusMain ?? ''} flex f-column`}
    >
        {children}
    </div>)
}

export default Frame