
import { Outlet } from 'react-router-dom'
import PreFooter from '../footer/PreFooter'

export default function Layout() {
  return (
    <div>
        <Outlet/>
        <PreFooter/>
    </div>
  )
}
