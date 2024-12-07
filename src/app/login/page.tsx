import { openGraphBasicFields, openGraphImage } from "../shared-metadata";
import LoginForm from "@/components/LoginForm";

const title = 'eStore - Login'
const description =  'The login page'

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
}

/**
 * The login page
 * @returns {JSX.Element}
 */
export default function LoginPage(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center flex-row gap-4 w-fit p-4 bg-white shadow-sm border border-slate-100 rounded">
        <LoginForm/>
      </div>
    </div>
  )
}