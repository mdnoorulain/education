import React from 'react'
import { Link } from 'react-router-dom'
function branch() {
  return (
    <div className="font-Poppins bg-Solitude h-screen w-screen">
        branch
        <div>

        </div>
        <Link
            to="/"
            className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold "
          >
            Back
          </Link>

    </div>
  )
}

export default branch