"use client"
import { useAuth } from "../../providers/AuthProvider";
import Button from "../Button";
import { useEffect, useState } from "react";
import Input from "../Input";
import { useRouter } from "next/navigation";

/**
 * The login form
 * @returns {JSX.Element}
 */
export default function LoginForm(): JSX.Element {
  const {login} = useAuth()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  /**
   * handles the form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try{
      e.preventDefault()
      const form = e.currentTarget as HTMLFormElement
      const formData = new FormData(form);

      const username = formData.get('username')?.toString()
      const password = formData.get('password')?.toString()

      if (username && password) {
        await login(username, password)
        router.push('/')
      }
    } catch (error) {
      setError((error as Error).message)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 5000)
  },[error])

  return (
    <form className="flex flex-col items-center" onSubmit={onSubmit} onChange={() => setError(null)}>
      <h2 className="text-2xl font-semibold mb-8  text-cyan-500">Login</h2>
      <Input label="Username" id="username" defaultValue="mor_2314" name="username" autoComplete='username' type='text' required />
      <Input label="Password" id="password" defaultValue="83r5^_" autoComplete="current-password" name="password" type='password' required />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <Button type="submit" className="bg-cyan-500 hover:bg-cyan-700">
        Login
      </Button>
    </form>
  )
}