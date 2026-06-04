import React from 'react'
import { FaUserTie } from 'react-icons/fa'

export default function HireMeFloat() {
  const gmailLink = 'https://mail.google.com/mail/?view=cm&to=tuyifeisrael@gmail.com&su=I%20Want%20To%20Hire%20You!'

  return (
    <a href={gmailLink} className="hireMeFloat" target="_blank" rel="noopener noreferrer">
      <FaUserTie size={24} color="#fff" />
    </a>
  )
}