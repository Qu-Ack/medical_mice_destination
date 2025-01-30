import SidebarWrapper from '../SidebarWrapper'
import UserDetails from './UserDetails'

const UserProfilePage = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '123456789',
    address: 'New York, USA',
    passportDetails: 'ABCDEFG',
  }

  return (
    <SidebarWrapper>
      {/* <div className="flex h-full flex-col items-center justify-center bg-blue-50 text-center"> */}
      <UserDetails initialProfile={userProfile} />
      {/* </div> */}
    </SidebarWrapper>
  )
}

export default UserProfilePage
