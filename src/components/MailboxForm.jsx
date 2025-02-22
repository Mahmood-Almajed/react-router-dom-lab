import { useState } from "react"
import { useNavigate } from "react-router-dom"
const MailboxForm=(props)=>{

    const navigate =useNavigate();

    const newMailbox ={
        boxSize:'',
        boxholder:''

    }

    const [formData,setFormData]=useState(newMailbox);

    const handleChange =(e)=>{

        setFormData({...formData ,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addBox(formData);
        navigate('/mailboxes')
        setFormData(newMailbox);
    }

    return(
        <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter a Boxholder:</label>
            <input type="text" placeholder="Boxholder name" value={formData.boxholder} name="boxholder" onChange={handleChange} />
            <label htmlFor="">Select a Box Size:</label>
            <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                <option value="" disabled></option>
                 <option value='Small'>Small</option>
                 <option value='Meduim'>Meduim</option>
                 <option value='Large'>Large</option>

            </select>

            <button type="submit">Submit    </button>


        </form>    
        </>


    )
}

export default MailboxForm