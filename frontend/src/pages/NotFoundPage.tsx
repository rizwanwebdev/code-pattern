import { Link } from "react-router-dom"
const NotFoundPage = () => {
  return (
    <main className="mx-auto w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 w-10/12 md:w-8/12 lg:w-6/12 justify-center items-center p-4 bg-white rounded-2xl dark:bg-black">
        <h1 className="text-4xl dark:text-white font-bold">404</h1>
        <p className="text-black dark:text-white">The page you are looking for not found</p>
        <Link to="/" className="py-2 px-4 rounded bg-black text-white dark:bg-white dark:text-black shadow-sm shadow-blue-300">Return</Link>
      </div>
    </main>

  )
}

export default NotFoundPage