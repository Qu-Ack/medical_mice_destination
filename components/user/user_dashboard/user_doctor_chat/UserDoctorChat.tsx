import SidebarWrapper from '../SidebarWrapper'
import WaitingForApproval from './WaitingForApproval'

const UserDoctorChat = () => {
  return (
    <SidebarWrapper>
      <div className="flex h-full flex-col items-center justify-center bg-blue-50 text-center">
        <WaitingForApproval />
      </div>
    </SidebarWrapper>
  )
}

export default UserDoctorChat
