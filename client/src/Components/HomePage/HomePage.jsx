import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()
  const [toDoData, setToDoData] = useState([])
  const [doingdata, setDoingdata] = useState([])
  const [donedata, setDonedata] = useState([])

  useEffect(() => {
    dataDone();
    dataTodo();
    dataDoing();
  }, [])

  const dataDone = () => {
    axios.get("https://alok-todo-app.herokuapp.com/todos/Done").then((res) => setDonedata(res.data));
  }
  const dataTodo = () => {
    axios.get("https://alok-todo-app.herokuapp.com/todos/To_Do").then((res) => setToDoData(res.data));
  }
  const dataDoing = () => {
    axios.get("https://alok-todo-app.herokuapp.com/todos/Doing").then((res) => setDoingdata(res.data));
  }

  const handleDoing = (e) => {
    axios.patch(`https://alok-todo-app.herokuapp.com/todos/${e.target.value}`, {
      "task": "Doing"
    }).then(() => { dataDoing(); dataDone(); dataTodo() })
  }

  const handleDone = (e) => {
    axios.patch(`https://alok-todo-app.herokuapp.com/todos/${e.target.value}`, {
      "task": "Done"
    }).then(() => { dataDoing(); dataDone(); dataTodo() })
  }

  const handleTODo = (e) => {
    axios.patch(`https://alok-todo-app.herokuapp.com/todos/${e.target.value}`, {
      "task": "To Do"
    }).then(() => { dataDoing(); dataDone(); dataTodo() })
  }

  const handleEdit = (e) => {
    navigate(`/edit/${e.target.value}`)
  }

  const handleDeleteCard = (a) => {
    axios.delete(`https://alok-todo-app.herokuapp.com/todos/${a}`).then((res) => alert("Card Deleted Successfully")).then(() => { dataDoing(); dataDone(); dataTodo() })

  }

  return (
    <div className='HomePage'>

      <div className='MainTodo' >

        {/* Todo div start */}
        <div>
          <div className='TodoHeading'><p>To-Do</p></div>

          {
            toDoData.length !== 0 ?
              <div>
                {
                  toDoData.map((e) => (
                    <div className='Card' key={e._id}>

                      <div className='cardTopDelete'>
                        <div className='cardstatus'><p>{e.task}</p></div>
                        <div className='Delete' value={e._id} onClick={(a) => handleDeleteCard(e._id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></div>
                      </div>

                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        <button value={e._id} onClick={handleDoing}>Doing</button>
                        <button value={e._id} onClick={handleDone}>Done</button>
                      </div>
                      <div className='EditButton'><button value={e._id} onClick={handleEdit}>Edit</button></div>
                    </div>
                  ))
                }
              </div> :

              <h1>No Data Found</h1>
          }


        </div>

        {/* Doing div start */}
        <div>
          <div className='TodoHeading'><p>Doing</p></div>

          {
            doingdata.length !== 0 ?
              <div>
                {
                  doingdata.map((e) => (
                    <div className='Card' key={e._id}>

                      <div className='cardTopDelete'>
                        <div className='cardstatus'><p>{e.task}</p></div>
                        <div className='Delete' value={e._id} onClick={(a) => handleDeleteCard(e._id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></div>
                      </div>

                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        {/* <button>Doing</button> */}
                        <button value={e._id} onClick={handleTODo}>To Do</button>
                        <button value={e._id} onClick={handleDone}>Done</button>
                      </div>
                      <div className='EditButton' ><button value={e._id} onClick={handleEdit}>Edit</button></div>
                    </div>
                  ))
                }
              </div> :
              <h1>No Data Found</h1>
          }



        </div>

        {/* Done div start */}
        <div>
          <div className='TodoHeading'><p>Done</p></div>

          {
            donedata.length !== 0 ?
              <div>
                {
                  donedata.map((e) => (
                    <div className='Card' key={e._id}>

                      <div className='cardTopDelete'>
                        <div className='cardstatus'><p>{e.task}</p></div>
                        <div className='Delete' value={e._id} onClick={(a) => handleDeleteCard(e._id)} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></div>
                      </div>

                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        <button value={e._id} onClick={handleTODo}>To Do</button>
                        <button value={e._id} onClick={handleDoing}>Doing</button>
                      </div>
                      <div className='EditButton'><button value={e._id} onClick={handleEdit}>Edit</button></div>
                    </div>
                  ))
                }
              </div> :
              <h1>No Data Found</h1>
          }

        </div>
      </div>

    </div>
  )
}
