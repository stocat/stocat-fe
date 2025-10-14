import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto w-fit h-screen mt-20 flex flex-col justify-start items-center">
        <p className="text-4xl text-gray-300 hover:text-gray-500 active:text-gray-800">
          Welcome to Stocat World!
        </p>
        <div className="flex flex-col items-start">
          <div className="mt-5 text-primary-500 font-bold">Primary</div>
          <div className="flex shadow-2xl">
            <div className="w-20 h-20 bg-primary-100 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-primary-200 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-primary-300 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-primary-400 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-primary-500 hover:scale-110 transition duration-100"></div>
          </div>
          <div className="mt-5 text-main-500 font-bold">Main</div>
          <div className="flex shadow-2xl">
            <div className="w-20 h-20 bg-main-100 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-main-200 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-main-300 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-main-400 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-main-500 hover:scale-110 transition duration-100"></div>
          </div>
          <div>
            <div className="mt-5 text-accent-500 font-bold">Accent</div>
            <div className="flex shadow-2xl">
              <div className="w-20 h-20 bg-accent-100 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-accent-200 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-accent-300 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-accent-400 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-accent-500 hover:scale-110 transition duration-100"></div>
            </div>
          </div>
          <div className="mt-5 text-neutral-500 font-bold">Neutral</div>
          <div className="flex shadow-2xl">
            <div className="w-20 h-20 bg-neutral-100 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-neutral-200 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-neutral-300 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-neutral-400 hover:scale-110 transition duration-100"></div>
            <div className="w-20 h-20 bg-neutral-500 hover:scale-110 transition duration-100"></div>
          </div>
          <div>
            <div className="flex shadow-2xl">
              <div className="w-20 h-20 bg-neutral-600 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-neutral-700 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-neutral-800 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-neutral-900 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-neutral-1000  hover:scale-110 transition duration-100"></div>
            </div>
          </div>
          <div className="flex flex-col mt-5 shadow-2xl">
            <div className="font-bold">OTHERS</div>
            <div className="flex ">
              <div className="w-20 h-20 bg-red-100 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-yellow-100 hover:scale-110 transition duration-100"></div>
              <div className="w-20 h-20 bg-blue-100 hover:scale-110 transition duration-100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
