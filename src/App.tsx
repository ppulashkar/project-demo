import logo from './logo.svg';
import './App.css';
import { AvatarField, Button, InputTextField, ListItemReusable, RatingStar } from '@ppulashkar/dhre-component';
import { Edit, Inbox } from '@mui/icons-material';
import { useState } from 'react';

function App() {

  const [rating, setRating] = useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue ?? 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button label={'Click Me'}></Button>
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
        <AvatarField name={'Prashant Pulashkar'} />
      </header>
    </div>
  );
}

export default App;
