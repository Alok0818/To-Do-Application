import React, { useState } from 'react'
import "./AddToDoForm.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddToDoForm() {

  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddcard = () => {
    const data = {
      title,
      description,
      task
    }

    if (description.length  >= 25) {
      console.log("data", data)
      axios.post("https://todo-backend-30x6.onrender.com/todos", data).then((res) => console.log(res.data)).then(() => navigate("/"))
    }
    else {
      console.log("length kkk",description.length)
      alert("Description is to short")
    }

  }

  return (
    <div>
      <h2>Add New Card</h2>

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
          <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} /><br />

          {/* Description Input */}
          <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => {
            setDescription(e.target.value)
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
          <Button disabled={!title || !description || !task} variant="contained" onClick={handleAddcard} >Add Card</Button>

        </Box>

      </div>
    </div>
  )
}
