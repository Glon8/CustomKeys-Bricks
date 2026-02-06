import { useState } from 'react'

import Button from './Button'

function Switch({ asChange, leftValue, rightValue, w, h, cOn, cOff, bgOn, bgOff, cusMain, cusLeft, cusRight }) {
    const [useSwitch, setSwitch] = useState(false);

    const onClick = () => {
        setSwitch(!useSwitch);
        asChange(useSwitch);
    }

    return (
        <div className={`flex f-row ${w ?? ''} ${cusMain ?? ''}`}>

            <Button value={leftValue ?? 'Left'}
                asClick={onClick}
                w={'w-per-10'}
                h={h ?? 'h-fix-3'}
                c={useSwitch ?
                    (cOn ?? 'dark') :
                    (cOff ?? 'blue')}
                bgColor={useSwitch ?
                    (bgOn ?? 'green') :
                    (bgOff ?? 'dark')}
                r={'rl-1'}
                cusMain={`br-w-0 ${cusLeft ?? ''}`}
            />
            <Button value={rightValue ?? 'Right'}
                asClick={onClick}
                w={'w-per-10'}
                h={h ?? 'h-fix-3'}
                c={!useSwitch ?
                    (cOn ?? 'dark') :
                    (cOff ?? 'blue')}
                bgColor={!useSwitch ?
                    (bgOn ?? 'red') :
                    (bgOff ?? 'dark')}
                r={'rr-1'}
                cusRight={`bl-w-0 ${cusRight ?? ''}`}
            />

        </div>
    )
}

export default Switch