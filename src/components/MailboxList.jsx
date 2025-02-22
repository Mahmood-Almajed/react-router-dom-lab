import { Link } from "react-router-dom"
const MailboxList=(props)=>{
const msg=`Mailbox Not Found!`;

    return(
        <>
        <h1>Mailbox List</h1>
        <ul>

        {props.mailboxes.length===0 ? (msg):(
        
        props.mailboxes.map((mailbox)=>(
            <li key={mailbox._id}><Link to={`/mailboxes/${mailbox._id}`}>{`Mailbox ${mailbox._id}`}</Link></li>
            
        )))}
        </ul>

        </>
    )
}

export default MailboxList