import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  // TODO: Implement dark mode toggle logic
  return (
    <button onClick={onToggle}>{isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"} {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle