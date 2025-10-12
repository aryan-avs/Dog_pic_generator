import React from 'react'

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '50px' }}>
      <span>
        Create With <span style={{ color: '#e11d48' }}>♥</span> By AVS
      </span>
      <a 
        href="https://github.com/aryan-avs/Dog_pic-_generator" 
        target="_blank" 
        rel="noopener noreferrer"
        title="GitHub Repo"
        style={{ display: 'inline-flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.724-4.033-1.611-4.033-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.761-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.311.469-2.382 1.236-3.222-.124-.304-.536-1.527.116-3.176 0 0 1.008-.322 3.3 1.23a11.518 11.518 0 013.003-.404 11.52 11.52 0 013.003.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.872.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.804 5.625-5.475 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.629-5.371-12-12-12z"/>
        </svg>
      </a>
    </footer>
  )
}

export default Footer
