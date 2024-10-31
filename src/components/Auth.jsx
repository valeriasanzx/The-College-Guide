import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button className="ml-2 py-1 px-2 bg-white hover:bg-gray-300 rounded-md border-red-900 border-2" onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div className="flex justify-end items-center">
      Hello, {loggedInUserDisplayName()}  
      <button className="ml-2 py-1 px-2 bg-white hover:bg-gray-300 rounded-md border-red-900 border-2" onClick={logout}>Sign out</button>
    </div>
  )
}