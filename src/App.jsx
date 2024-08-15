import React from 'react'
import PublicRoutes from './routes/publicroutes'

export default function App() {
  return (
    <>
      <React.Suspense>
        <div className="App">
          <PublicRoutes />
        </div>
      </React.Suspense>
    </>
  )
}
