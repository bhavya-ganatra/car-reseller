import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React, {useEffect,useState} from 'react'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css'
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../../Firebase';
import { useStateValue } from '../../StateProvider';
import firebase from "firebase/compat/app"


function Chat() {
    const {peerId} = useParams();
    const [seed,setSeed] = useState('');
    const [input,setInput] = useState('');
    // const [roomName,setRoomName] = useState("");
    const [messages,setMessages] = useState([]);
    const [peerName,setPeerName] = useState("");
    const [avatars,setAvatars] = useState("");
    // const [{user},dispatch] = useStateValue();
    const user = JSON.parse(localStorage.curuser)
    // console.log('in char curuser:',user)
    // console.log('peerid: ',peerId)
    // const [set]
    // db.collection('users').doc(user.name).collection('messagesRecv')
    //         .where("sender","==",peerId)
    //         .orderBy('timestamp','asc')
    //         .onSnapshot((querySnapshot) => {
    //             querySnapshot.docChanges().forEach((change) => {
    //                 setIsdocchange(isdocchange|(change.type==="added"))
    //             })
    //         })
    

    useEffect( ()=>{
        console.log("peerId chat:",peerId)
        // if(roomId){
        //     db.collection('rooms').doc(roomId)
        //     .onSnapshot(snapshpot => (
        //         setRoomName(snapshpot.data().name)
        //     ));

        //     db.collection('rooms').doc(roomId)
        //     .collection('messages').orderBy('timestamp','asc')
        //     .onSnapshot(snapshpot=>(
        //         setMessages(snapshpot.docs.map(doc=>doc.data()))
        //     ))
        // }

        if(peerId){
            
            const unsubscribe = db.collection('users').doc(user.uid).collection(peerId)
            .orderBy('timestamp','asc')
            .onSnapshot((querySnapshot)=>{
                setMessages(querySnapshot.docs.map(doc=>doc.data()))
            })

            return () => unsubscribe()
        // return function cleanup() {
        //     setMessages([])
          };
    },[peerId]);

    useEffect(()=>{
        // setSeed(Math.floor(Math.random()*10000))
        db.collection('users')
        .doc(peerId)
        .get()
        .then(res=>{
            setPeerName(res.data().displayName)
            setAvatars(res.data().photoURL)
        })
        .catch(err=>console.log('err in getting peer Name',err))
    },[peerId]);
    const sendMessage =  (e)=>{
        e.preventDefault();
        // db.collection('rooms').doc(roomId)
        // .collection('messages').add({
        //     message:input,
        //     name:user.displayName,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // })
        // NOTE: for peer to peer -> name attribute in above is not required
        
        // const curTime = await firebase.firestore.FieldValue.serverTimestamp()

       const addObj =  {
            message:input,
            author:user.displayName,
            receiver:peerId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        
        db.collection('users').doc(user.uid)
        .collection(peerId).add(addObj)
        
        db.collection('users').doc(peerId)
        .collection(user.uid).add(addObj)

        console.log("typed: ",input)
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={avatars} />
                {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}
                <div className="chat__headerInfo">
                    <h3>{peerName}</h3>
                    <p>{ (!messages || messages.length==0)?"Last seen....": new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message=>(
                    <p key={message?.timestamp + message.author} className={`chat__message ${message.author===user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name">{message.author}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message && message.timestamp? (new Date(message.timestamp?.toDate())?.toString()):" "}
                        </span>
                        {/* {console.log(message)} */}
                    </p>
                ))}
                {/* <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Barney</span>
                    Hello fdydfj Insdsame djskjs
                    <span className="chat__timestamp">1:00am</span>
                </p> */}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input autoFocus="autofocus" value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
