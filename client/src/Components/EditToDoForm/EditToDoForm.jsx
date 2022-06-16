import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import "./EditToDoForm.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function EditToDoForm() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [title, setTitle] = useState("react default")
  const [description, setDescription] = useState("Description")
  const [task, setTask] = useState("To Do");

  const getDataFromParam = () => {
    axios.get(`https://alok-todo-app.herokuapp.com/todos/id/${id}`).then((res) => { setData(res.data); setTitle(res.data.title); setDescription(res.data.description); setTask(res.data.task) })
  }
  useEffect(() => {
    getDataFromParam()
  }, [])

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleUpdatecard = () => {
    const data = {
      title,
      description,
      task
    }
    if (description.length  >= 25) {
      console.log("data", data, id)
      axios.patch(`https://alok-todo-app.herokuapp.com/todos/${id}`, data).then((res) => console.log(res.data)).then(() => navigate("/"))
    }
    else {
      alert("Description is to short")
    }
  }

  const handleDeleteCard = () => {
    console.log("deke")
    axios.delete(`https://alok-todo-app.herokuapp.com/todos/${id}`).then((res) => alert("Card Deleted Successfully")).then(() => navigate("/"))

  }

  return (
    <div>
      <h1>edit</h1>

      <div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Title Input */}
          <TextField id="standard-basic" label="Name" value={title} variant="standard" onChange={(e) => setTitle(e.target.value)} /><br />

          {/* Description Input */}
          <TextField id="standard-basic" label="Description" value={description} variant="standard" onChange={(e) => {
            setDescription(e.target.value);
          }} /><br />

          {/* Task Status Input */}
          <FormControl >
            <InputLabel id="demo-simple-select-label">Task</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={task}
              label="Task"
              onChange={handleChange}
              defaultValue={task}
            >
              <MenuItem value={"To Do"}>To Do</MenuItem>
              <MenuItem value={"Doing"}>Doing</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
            </Select>
          </FormControl> <br /><br />

          {/* Add Card Button */}
          <Button variant="contained" onClick={handleUpdatecard} >Update Card</Button><br />
          <Button variant="contained" onClick={handleDeleteCard} >Delete Card</Button>

        </Box>

      </div>
    </div>
  )
}
