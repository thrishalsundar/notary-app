import axios from 'axios';
import {useEffect, useState} from 'react';
import './Body.css'
import ListItem from './ListItem';

function Body(){
   
    const [items,setItems] =useState([])

    useEffect(()=>{
        async function fetchUsers(){
            try{
                const data=await axios.post("http://demo2211087.mockable.io/mock")
                const retArr=await data.data.companies;
                setItems(retArr);
            }catch(err){
                console.log(err);
                setItems([{name:"no items found"}])
            }
        }
        fetchUsers();
    },[])
    
    return (
        <div className='body'>
            <div className='user-title'>
                <p className='user-text'>Users</p>
            </div>
            <div className='user-list'>
            <div className='head-item'>
                <p className='head-name'>Name</p>
                <p className='head-email'>Email</p>
                <p className='head-status'>Status</p>
            </div>
                {items.map(function(item){
                    return <ListItem data={item} key={item.name} />
                })}
            </div>
        </div>
    );
}

export default Body;
