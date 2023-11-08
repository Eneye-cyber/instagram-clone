import { Outlet } from "react-router-dom"

function Base() {
  return (
    <>
      <main className="">
        <Outlet />
      </main>
    </>
  )
}

export default Base