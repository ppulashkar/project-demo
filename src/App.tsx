import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { AvatarField, ButtonCustom, BadgeCustom, AvatarCustom, InputTextField, ListItemReusable, RatingStar, MUIComponents, MUIIcons} from '@ppulashkar/dhre-component';
const { Input, Box } = MUIComponents;
const { Inbox, Edit } = MUIIcons;


function App() {

  const [rating, setRating] = useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue ?? 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Input/>
          <Box />
          <ButtonCustom label={'Click Me'}></ButtonCustom>
          <InputTextField label={'UserName'} variant={'outlined'}></InputTextField>
          <RatingStar value={rating} onChange={handleChange} precision={0.5} />
          <ListItemReusable
            title="Inbox"
            subtitle="You have new messages"
            avatar={<Inbox />}
            icon={<Edit />}
            onIconClick={() => alert('Edit clicked')}
            tooltip="Edit"
          />
          <AvatarField name={'Prashant Pulashkar'}  />
          <BadgeCustom color='success' badgeContent="ABC" />
          <AvatarCustom alt='PP' src={'/'} />
          
        </div>
      </header>
    </div>
  );
}

export default App;
