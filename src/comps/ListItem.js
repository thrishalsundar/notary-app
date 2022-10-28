import './ListItem.css'

function ListItem(fata){
    const item=fata.data
    return (
        <div className='list-item'>
            <p className='item-name'>{item.name}</p>
            <p className='item-email'>{item.email}</p>
            <p className='item-status'>{item.status}</p>
        </div>
    );
}

export default ListItem;
