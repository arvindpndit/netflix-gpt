import React from 'react'

interface Props {
  toggleLoginForm: boolean,
  setToggleLoginForm:React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm : React.FC<Props> = (props) => {
  const {toggleLoginForm, setToggleLoginForm} = props;
  return (
    <div className="w-11/12 md:w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black text-white rounded-lg bg-opacity-80 shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        {toggleLoginForm ? "Sign In" : "Sign Up"}
      </h1>
      {
        !toggleLoginForm &&
        <input
        type="text"
        placeholder="Full Name"
        className="w-full py-2 px-3 rounded-lg mb-4 bg-gray-800 text-white placeholder-gray-400"
        />
      }
      <input
        type="text"
        placeholder="Email or phone number"
        className="w-full py-2 px-3 rounded-lg mb-4 bg-gray-800 text-white placeholder-gray-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full py-2 px-3 rounded-lg mb-4 bg-gray-800 text-white placeholder-gray-400"
      />
      <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold mb-4">
        {toggleLoginForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="text-sm text-gray-300 cursor-pointer" onClick={() => setToggleLoginForm(!toggleLoginForm)}>
        {toggleLoginForm ? (
          <>
            New to Netflix-GPT? <span className="text-red-500">Sign up now.</span>
          </>
        ) : (
          <>
            Already a user? <span className="text-red-500">Sign in now.</span>
          </>
        )}
      </p>
    </div>
  )
}

export default LoginForm;