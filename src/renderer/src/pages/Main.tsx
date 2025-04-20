import { Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from '~/components/Sidebar'
import { cn } from '~/utils'
import { Library } from './Library'
import { Record } from './Record'
import { Icon } from './arts/Icon'
import { Logo } from './arts/Logo'
import { GameScannerManager } from './GameScannerManager'
import { Light } from './Light'

export function Main(): JSX.Element {
  console.warn('[DEBUG] Main')
  return (
    <div>
      <Light />
      <div className={cn('flex flex-row w-screen h-screen pt-[30px] relative')}>
        <Sidebar />
        <Routes>
          <Route index element={<Navigate to="/library" />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/record/*" element={<Record />} />
          <Route path="/scanner/*" element={<GameScannerManager />} />
          <Route path="/icon" element={<Icon />} />
          <Route path="/logo" element={<Logo />} />
        </Routes>
      </div>
    </div>
  )
}
