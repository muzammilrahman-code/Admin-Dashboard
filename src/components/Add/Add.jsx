import React from 'react'
import './Add.css'

const Add = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        //add new item
        //axios.post(`/api/${slug}s`, {})
    }
  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1 className='name'>Add New {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns.filter((item) => item.field !== "id" && item.field !== "img")
                .map((column) =>(
                    <div className="item1">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button className='sendBtn'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add