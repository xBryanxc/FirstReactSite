import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const createUserMutation = gql`
  mutation createUser($email: String!, $username: String!) {
    createUser(input: { name: "Bryan", username: $username, email: $email }) {
      id
      name
      username
      email
    }
  }
`;

function HeroSection() {
  const [email, setEmail] = useState("");

  const [createUser, {error}] = useMutation(createUserMutation);

  const submitFreeTrial = (e) => {
    e.preventDefault();

    const username = email.split('@')[0]

    createUser({ variables: { email, username } })
    .then(result => {
      if (result !== null){
        console.log("!!")
      }
    });

    setEmail("");
  };

  return (
    <>
      <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden min-h-screen">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <a className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 cursor-pointer">
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                    WE'RE HIRING
                  </span>
                  <span className="ml-4 text-sm">Visit our careers page</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">A better way to</span>
                  <span className="block text-indigo-400">ship web apps</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-5 sm:mt-8 lg:justify-start">
                  <form onSubmit={submitFreeTrial}>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                      className="appearance-none w-full bg-white border border-transparent rounded-md text-gray-900 placeholder-gray-500 px-8 py-3"
                    />
                    <div className="rounded-md py-3">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10">
                        Start free trial
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-10 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:-ml-40">
                <img
                  className="w-full lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
