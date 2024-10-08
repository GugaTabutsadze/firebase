/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import styles from "./Content.module.css"

const Content = ({ fireBasies, updatedFireBasies }) => {

const [editText, setEditText] = useState("")
const [editId, setEditId] = useState(null)

const startEditing = (id, text) => {
   setEditText(text)
   setEditId(id)
}

const saveEdit = (id) => {
  updatedFireBasies(fireBasies.map(fireBase => 
    fireBase.id == id ? {...fireBase, text: editText} : fireBase
  ))
  setEditId(null)
  setEditText("")
};

const cancelEdit = () => {
  setEditId(null)
  setEditText("")
}

const deleteBase = (id) => {
  updatedFireBasies(fireBasies.filter(fireBase => fireBase.id !== id))
}


return (
  <div>
    {
    fireBasies.length === 0 ? (
      <div className={styles.noContactSection}>
       <img width={53.453}
            height={72}
            src='/images/clearimage.png' alt='/'
       />
       <p>No Contact Found</p>
      </div>
    ) : (
      <div className={styles.fireBaseContainer}>
        <ul>
          {
          fireBasies.map(firebase => (
            <li className={styles.contentContainer}
                key={firebase.id}>
               {
                editId === firebase.id ? 
                <div className={styles.editContainer}>
                  <div className={styles.frame3}>
                     <img src="/images/user.png" alt='/' />
                       <input className={styles.editInput} type='text' alt='/'
                         value={editText}
                         onChange={(e) => setEditText(e.target.value)}
                      />
                  </div>
                  <div className={styles.frame4}>
                      <button onClick={() => saveEdit(firebase.id)}>save</button>
                      <button onClick={cancelEdit}>cancel</button>
                  </div>
                </div>
                 :
                <>
                <div className={styles.frame1}>
                   <img src="/images/user.png" alt='/' />
                    {firebase.text}
                </div>
                <div className={styles.frame2}>
                   <img onClick={() => startEditing(firebase.id, firebase.text)} src='/images/edit.png' alt='/' />
                   <img onClick={() => deleteBase(firebase.id)} src='/images/trash.svg' alt='/' />
                </div>
                </>
               }
            </li>
         ))
           }
       </ul>
      </div>
     )
        }
      </div>
    );
  };
  
  export default Content;
