import { useEffect, useState } from "react";


const Contacts = ()=>{


    const [contacts, setcontacts] = useState(0);
    
    useEffect(()=>{
        const fetchDate = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setcontacts(data);
        }   
        fetchDate()
},[])


  return (
    <div>

      <h1>Contacts List</h1>
      <ul>
        {contacts && contacts.map(({userId, id, title, body})=>{
            return(
              <>
                <li><b className="justify-items-center">{userId}</b> <b>{id}</b> <b>{title}</b> <b>{body}</b></li>
              </>
            )
        })}
      </ul>

    </div>
  )

}

export default Contacts