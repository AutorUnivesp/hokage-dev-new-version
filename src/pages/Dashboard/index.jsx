import { Header } from "../../components/Header"
import { HeaderDashBoard } from "../../components/HeaderDashBoard"
import { SideMenuDash } from "../../components/SideMenuDash"


export const Dashboard = () => {
  const idUser = localStorage.getItem('id')
  return(
    <>
      <Header
      title="MEU DASHBOARD"
      local="Home"
      direction={"/hokage/index"}
      user={idUser}
      />
      <HeaderDashBoard/>
      <SideMenuDash/>
    </>
  )
}
