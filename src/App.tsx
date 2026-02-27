import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="font-mono">
        <section className=" flex justify-center">
          <div className="grid grid-cols-12 gap-2.5 pt-18 md:max-w-5xl w-full *:col-span-full border-2 justify-items-center border-black">
            <h1 className="text-5xl">section-name-h1</h1>
          </div>
        </section>
        <section className=" flex justify-center">
          <div className="grid grid-cols-12 gap-2.5 pt-10 md:max-w-5xl w-full *:col-span-full border-2 justify-items-center border-black">
            <h2 className="text-3xl">section-name-h2</h2>
            <p>section-text</p>
            <div className="w-full justify-items-center border border-black">
              <form
                action="#"
                className="grid grid-rows-[1em_5em_3em] gap-3 w-full justify-items-center mb-5 border border-black"
              >
                <label htmlFor="league-id-search" className="hidden">
                  Enter FPL League identifier
                </label>
                <input
                  className="row-start-2 w-3xs text-center border border-black"
                  type="text"
                  id="league-id-search"
                  placeholder="ENTER FPL LEAGUE ID"
                />
                <input
                  className="row-start-3 w-3xs h-full text-center border border-black"
                  type="button"
                  value="GO&rarr;"
                />
              </form>
            </div>
          </div>
        </section>
        <section className=" flex justify-center">
          <div className="grid grid-cols-12 gap-2.5 pt-5 pb-5 md:max-w-5xl w-full *:col-span-full border-2 justify-items-center border-black">
            <h3 className="text-2xl">section-name-h3</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full justify-items-center">
              <div className="bg-gray-200 h-75 w-[80%] p-6 border border-black">
                <div>
                  <p>Text</p>
                </div>
                <div>
                  <p>Image</p>
                </div>
              </div>
              <div className="bg-gray-300 h-75 w-[80%] p-6 border border-black"><div>
                  <p>Text</p>
                </div>
                <div>
                  <p>Image</p>
                </div></div>
              <div className="bg-gray-400 h-75 w-[80%] p-6 border border-black"><div>
                  <p>Text</p>
                </div>
                <div>
                  <p>Image</p>
                </div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
