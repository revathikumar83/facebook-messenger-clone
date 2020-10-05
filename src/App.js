import React, {
  useState,
  useEffect
} from 'react';
import {
  FormControl,
  Input
} from '@material-ui/core';
import './App.css';
import Message from './message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {
  IconButton
} from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
          username: 'reva',
          message: 'hey'
      },
      {
          username: 'ras',
          message: 'hellloooo'
      }
  ]);
  const [username, setUsername] = useState('');


  useEffect(() => {
      db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({
              id: doc.id,
              message: doc.data()
          })))
      })
  }, [])

  useEffect(() => {
      setUsername(prompt('please enter name'));
  }, [])

  const sendMessage = (event) => {
      event.preventDefault();

      db.collection('messages').add({
          message: input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      //setMessages([...messages, {username: username, text: input} ]);
      setInput('');

  }

  return ( 
      <div className = "App" >

      
      <img src = "https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
      alt = 'messanger icon' />

      
      <form className = "app__form" >
      
      <FormControl className = "app__formcontrol" >

      
      <Input className = "app__Input"
      placeholder = 'Enter a message'
      value = {input}
      onChange = { event => setInput(event.target.value)}
      />

      
      <IconButton className = "app__IconButton"
      disabled = {!input}
      type = 'submit'
      variant = 'contained'
      color = 'primary'
      onClick = {sendMessage} >
      
      <SendIcon />
      
      </IconButton>

      
      </FormControl> 
      </form> 
      <FlipMove> 
        {
          messages.map(({
              id,
              message
          }) => ( <Message key = {id}
              username = {
                  username
              }
              message = {
                  message
              }
              />
          ))
      } 
      </FlipMove> 
      </div>
  );
}

export default App;