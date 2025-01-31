import UserDetails from './UserDetails'

const UserProfilePage = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '123456789',
    address: 'New York, USA',
    passportDetails: 'ABCDEFG',
  }

  return <UserDetails initialProfile={userProfile} />
}

export default UserProfilePage
