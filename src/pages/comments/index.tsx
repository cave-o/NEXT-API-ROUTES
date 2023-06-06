import React, { useState } from 'react'
import axios from 'axios'
import IComments from '@/interface'
export default function Index() {
  const [comments , setComments] = useState([])
  const [comment , setComment] = useState("")
  const fetchComments = async () => {
    const res = (await axios.get('/api/comments')).data
setComments(res)
  }
  const handler = async () => {
    const res = (await axios.post('/api/comments', {comment})).data
    console.log(res)
  }
  const findID = async (id : number) => {
    const res = (await axios.delete(`/api/comments/${id}`)).data
    console.log(res)
    fetchComments()
  }
    return (
    <>
    <input type="text" className='text-black' onChange={(e) => setComment(e.target.value)} />
    <button onClick={handler}>submit text</button>
    <button onClick={fetchComments}>Load comment</button>
    {comments.map((c : IComments) => {
         return (
            <div key={c.id}>
                {c.text}
                <button onClick={() => findID(c.id)}>delete</button>
            </div>
         )
    })}
    </>
  )
}
