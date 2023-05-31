import {account} from "../../../mocks/account";

export const Info = (): JSX.Element => {
  return (
    <div className='w-full p-4 rounded-lg bg-white shadow'>
      <p className='text-xl font-medium pb-4'>About</p>
      <InfoBlock title={'Full Name'} value={account.name}/>
      <InfoBlock title={'Username'} value={account.username}/>
      <InfoBlock title={'Location 1'} value={account.locations.first}/>
      <InfoBlock title={'Location 2'} value={account.locations.second}/>
      <InfoBlock title={'Age'} value={account.age}/>
      <InfoBlock title={'Balance'} value={account.balance}/>
      <InfoBlock title={'Height'} value={account.height}/>
      <InfoBlock title={'Phone Number'} value={account.phone_number}/>
      <InfoBlock title={'Gender'} value={account.gender}/>
    </div>
  )
}

const InfoBlock = ({title, value}: any) => (
  <div className='mb-4'>
    <p className='text-base'>{title}</p>
    <p className='text-md pl-2 font-medium'>{value}<span
      className='italic'>{value !== 0 && !value && 'null'}</span></p>
  </div>
)