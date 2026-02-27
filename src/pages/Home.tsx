export const Home = () => {
  return (
    <>
        <div className="flex flex-1 lg:mx-auto lg:max-w-[80%] justify-center items-center">
          <div className="justify-center p-6">
            <div className="card bg-emerald-50 text-black flex flex-col rounded-2xl">
              <div className="card-body flex flex-col flex-1">
                <div className="rounded-2xl">
                  <div className="flex-col flex justify-center justify-items-center">
                    <div className="text-center">
                      <h1 className="text-5xl font-bold">FPL Week In Review</h1>
                      <p className="py-4">
                        Use your FPL League ID to generate a snapshot of your
                        league at the last gameweek. View your league standings,
                        view everyones picks and chips played.
                      </p>
                    </div>
                    <div className="card flex justify-center text-center">
                      <div className="card-body p-0">
                        <fieldset className="fieldset flex flex-col items-center">
                          <label htmlFor="input" className="label">
                            FPL League ID
                          </label>
                          <input
                            id="input"
                            name="input"
                            type="number"
                            className="input bg-white text-center"
                            placeholder="Enter your FPL League ID"
                          />
                          <button className="btn mt-4">Generate Review</button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Push button to bottom */}
                <div className="mt-auto flex justify-center justify-items-center text-center">
                  <ul className="list bg-emerald-100 max-w-lg rounded-box shadow-md">
                    <li className="p-4 pb-2 font-bold opacity-60 tracking-wide">
                      How to get your FPL league ID
                    </li>

                    <li className="list-row">
                      <p>1</p>
                      <p>Login to your official FPL account</p>
                    </li>

                    <li className="list-row">
                      <p>2</p>
                      <p>Navigate to Leagues & Cups</p>
                    </li>

                    <li className="list-row">
                      <p>3</p>
                      <p>
                        Select your <u><b>classic league</b></u> and copy the id from
                        the URL
                      </p>
                    </li>
                    <li className="p-5 text-center">
                      <code className="text-xs whitespace-normal wrap-break-word">
                        https://
                        <wbr />
                        fantasy.
                        <wbr />
                        premierleague.
                        <wbr />
                        com/
                        <wbr />
                        leagues/
                        <wbr />
                        <span className="bg-yellow-300 text-black px-1 rounded">
                          314
                        </span>
                        <wbr />
                        /standings
                        <wbr />
                        /c
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
