import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddToDoForm from '../AddToDoForm/AddToDoForm'
import EditToDoForm from '../EditToDoForm/EditToDoForm'
import HomePage from '../HomePage/HomePage'

export default function Routing() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditToDoForm />} />
        <Route path="/add_todo" element={<AddToDoForm />} />

      </Routes>
    </div>
  )
}
