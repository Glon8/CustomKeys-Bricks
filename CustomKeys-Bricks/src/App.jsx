import { useRef, useState } from 'react'
import './App.scss'

import Switch from './components/Switch.jsx'
import SwitchTab from './components/SwitchTab.jsx'
import TitleTab from './components/TitleTab.jsx'
import InputTab from './components/InputTab.jsx'
import DisplayTab from './components/DisplayTab.jsx'
import ListTab from './components/ListTab.jsx'
import Button from './components/Button.jsx'
import Frame from './components/Frame.jsx'

function App() {
  const dis = useRef('co');
  const theme = useRef('pu');
  const hudS = useRef('sh');
  const goS = useRef('sh');

  const [useDis, setDis] = useState(dis.current);
  const [useTheme, setTheme] = useState(theme.current);

  const curPageSh = useRef(true);

  const switchWindows = (stat) => {
    if (stat) {
      curPageSh.current = true;
      setPage(scriptsHud);
    }
    else {
      curPageSh.current = false;
      setPage(scriptsOptions);
    }
  }

  const switchDis = (type) => {
    dis.current = type;
    setDis(type);
  }

  const switchTheme = (type) => {
    theme.current = type;
    setTheme(!type);
  }

  const switchHUDS = (type) => {
    hudS.current = type;
  }

  const switchGoS = (type) => {
    goS.current = type;
  }

  const scriptsOptions = [
    [
      {
        type: "title",
        value: "Custom Keys - Bricks"
      },
      {
        type: "switch",
        leftValue: "Game Hud",
        rightValue: "Options",
        asChange: switchWindows,
      }
    ],
    [
      {
        type: "title",
        value: "General"
      },
      {
        type: "title",
        value: "Visuals",
        font: 3
      },
      {
        type: "selection",
        desc: "Theme",
        options: [
          { id: 'pu', show: 'Purple' },
          { id: 're', show: 'Red' },
          { id: 'gr', show: 'Green' },
          { id: 'ye', show: 'Yellow' },
          { id: 'bl', show: 'Blue' },
        ],
        asChange: switchTheme,
        cur: theme
      },
      {
        type: "selection",
        desc: "Display",
        options: [
          { id: "co", show: "Color" },
          { id: "pl", show: "Plain" },
          { id: "em", show: "Emoji" }
        ],
        asChange: switchDis,
        cur: dis
      },
      {
        type: "title",
        value: "Accessability",
        font: 3
      },
      {
        type: "selection",
        desc: "HUD-S",
        options: [
          { id: "sh", show: "Short" },
          { id: "lo", show: "Long" }
        ],
        asChange: switchHUDS,
        cur: hudS
      },
      {
        type: "selection",
        desc: "GO-S",
        options: [
          { id: "sh", show: "Short" },
          { id: "lo", show: "Long" }
        ],
        asChange: switchGoS,
        cur: goS
      }
    ],
    [
      {
        type: "title",
        value: "Kill Switch"
      },
      {
        type: "title",
        value: "Binding",
        font: 3
      },
      {
        type: "input",
        desc: "Trigger",
        value: "c+0"
      }
    ]
  ];

  const scriptsHud = [
    [
      {
        type: "title",
        value: "Custom Keys - Bricks"
      },
      {
        type: "switch",
        leftValue: "Game Hud",
        rightValue: "Options",
        asChange: switchWindows
      },
      {
        type: "toggle",
        value: "GO-GAME"
      }
    ],
    [
      {
        type: "title",
        value: "Kill Switch"
      },
      {
        type: "toggle",
        value: "Switch"
      }
    ]
  ];

  const [usePage, setPage] = useState(scriptsHud ?? []);

  return (<div className='w-per-20 h-per-20 relative'>
    <div className='flex'>
      <TitleTab value={'Made by Demon_Ruz'} fontSize={'3'} c={'light'} />
      <div className='w-per-10 flex a-content-b j-content-r'>
        <TitleTab value={'Not for sale'} fontSize={'3'} c={'light'} />
      </div>
    </div>
    {
      usePage.map((form, ind) => {
        return <Frame key={ind * 10} cusMain={ind !== 0 ? 'mt-3' : ''}>
          {
            form.map((item, index) => {
              if (item?.type === "title") {
                if (curPageSh.current === true && hudS.current === 'sh' && !!item?.font) return null;

                return <TitleTab value={item?.value} fontSize={item?.font ?? '5'}
                  key={ind + index + 1050} />
              }

              if (item?.type === "selection")
                return <ListTab desc={item?.desc} value={item?.cur?.current} options={item?.options}
                  bgColor={'gray'} asChange={item?.asChange}
                  key={ind + index + 505} />

              if (item?.type === "toggle")
                return <SwitchTab value={item?.value} type={useDis ?? 'co'}
                  bgColor={useDis !== 'co' ? 'purple' : null}
                  c={useDis !== 'co' ? 'light' : null} key={ind + index + 200}
                  cSign={useDis !== 'co' ? 'light-purple' : null}
                  cusSign={useDis !== 'co' ? 'bg-c-dark' : null} />

              if (item?.type === "switch")
                return <Switch asChange={item?.asChange} leftValue={item?.leftValue}
                  rightValue={item?.rightValue} bgOn={'purple'} cOn={'light'}
                  cOff={'light-purple'} cusMain={'mt-1'} key={ind + index + 60} />

              if (item?.type === "input")
                return <InputTab desc={item?.desc} value={item?.value}
                  bgColor={'gray'} key={ind + index + 700}
                  pholder={item?.pholder ?? 'Your bind goes here'} />

              if (item?.type === "button")
                return <Button value={item?.value} w={'w-per-15'} h={'h-fix-2'} c={'light'}
                  cusMain={'mt-5 j-self-c'} bgColor={'purple'} key={ind + index + 800} />

              if (item?.type === "display") {
                if (curPageSh.current === true && hudS.current === 'sh') return null;

                return <DisplayTab desc={item?.desc} value={item?.value}
                  bgColor={'gray'} cusVal={'bg-c-light'} type={item?.type2 ?? 'small'}
                  key={ind + index + 100} />
              }

              return null;
            })
          }
        </Frame>
      })
    }
    <div className={`flex j-self-c w-fix-17 mt-3 bb-solid bb-c-light bb-w-1
      ${usePage.length <= 2 ? 'fixed bottom-6' : ''}`}></div>
  </div >)
}

export default App
