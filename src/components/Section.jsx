import Table from "./Table";

export default function Section() {
  return (
    <div className="font-sans flex-1 h-full pt-7">
      <h1 className=" text-#334155] text-xl font-semibold pl-5">Waitlist</h1>
      <div className="mx-2 mt-4">
        <div className="flex gap-3.5 px-4 py-3">
          <button className="border text-start border-[#64748B] rounded-md border-solid  py-2.5 px-2 w-full ">
            All Waitlists:
          </button>
          <button className="border text-start border-[#64748B] rounded-md border-solid  py-2.5 px-2 w-full">
            Newly Added
          </button>
          <button className="border text-start border-[#64748B] rounded-md border-solid  py-2.5 px-2 w-full">
            Leads
          </button>
        </div>
        <div className="px-4 py-3 mt-4 flex justify-between gap-4">
          <button className="flex items-center gap-1.5 py-2 px-3 rounded-md bg-[#f1f5f9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Add Filter
          </button>
          <div className="flex items-center gap-4">
            {" "}
            <input
              className="rounded-[var(--Radii-radius-sm,4px)] gap-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(16,24,40,0.10)] py-1 px-3 w-full"
              placeholder="Search Client"
              style={{
                backgroundImage: "url('/search.svg')",
                backgroundPosition: "left 10px center",
                backgroundRepeat: "no-repeat",
                paddingLeft: "30px",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2 1.33337V5.33337H6"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8.00003C13.9989 6.84224 13.6629 5.70948 13.0325 4.73839C12.4021 3.76729 11.5041 2.99934 10.447 2.52715C9.38987 2.05497 8.2187 1.89873 7.07476 2.07727C5.93082 2.2558 4.86297 2.7615 4 3.53336L2 5.33336"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14.6666V10.6666H10"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8C2.00105 9.15779 2.33707 10.2905 2.9675 11.2616C3.59794 12.2327 4.49588 13.0007 5.55301 13.4729C6.61013 13.9451 7.7813 14.1013 8.92524 13.9228C10.0692 13.7442 11.137 13.2385 12 12.4667L14 10.6667"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="hs-dropdown hs-dropdown-example relative inline-flex ">
              <button
                id="hs-dropdown-example"
                type="button"
                class="hs-dropdown-toggle  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 2V14"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div
                className="z-[21px]  h-[472px] bg-white hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 p-3 min-w-60  border border-slate-200 shadow-[0px_4px_4px_0px_rgba(100,116,139,0.10),0px_10px_8px_0px_rgba(100,116,139,0.04)] rounded-xl border-solid "
                aria-labelledby="hs-dropdown-example"
              >
                <h2 className="text-black  font-medium">Edit Columns</h2>
                <p className="text-[#334155] text-sm ">
                  Select the columns to rearrange
                </p>
                <form className="text-[#334155] text-sm  font-medium  mt-4 w-full">
                  <a
                    className="flex items-center  rounded-lg text-sm text-gray-800"
                    href="#"
                  >
                    <div className="flex gap-2  ">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 w-[201px] rounded-md border-solid px-3 py-1.5 "
                      >
                        Order Created On
                      </label>
                    </div>
                  </a>
                  <a
                    class="flex items-center rounded-lg text-sm text-gray-800 mt-3"
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className=" border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Payer
                      </label>
                    </div>
                  </a>
                  <a
                    class="flex items-center mt-3  rounded-lg text-sm text-gray-800 
                    "
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Status
                      </label>
                    </div>
                  </a>
                  <a
                    class="flex items-center mt-3 rounded-lg text-sm text-gray-800 "
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Email
                      </label>
                    </div>
                  </a>
                  <a
                    class="flex items-center mt-3 rounded-lg text-sm text-gray-800 "
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Payer Phone{" "}
                      </label>
                    </div>
                  </a>

                  <a
                    class="flex items-center mt-3 rounded-lg text-sm text-gray-800 "
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Service{" "}
                      </label>
                    </div>
                  </a>
                  <a
                    class="flex items-center my-3 rounded-lg text-sm text-gray-800"
                    href="#"
                  >
                    <div className="flex gap-2">
                      <input id="remember" type="checkbox"></input>
                      <label
                        htmlFor="remember"
                        className="border border-slate-200 rounded-md border-solid px-3 py-1.5"
                      >
                        Scheduled{" "}
                      </label>
                    </div>
                  </a>
                  <div className=" flex items-center gap-4 ">
                    <button className="border border-slate-200 rounded-md border-solid py-1 px-3 hover:bg-[#0f172a] hover:text-white">
                      Reset to Default{" "}
                    </button>
                    <button className="border border-slate-200 rounded-md border-solid py-1 px-3 hover:bg-[#0f172a] hover:text-white">
                      Apply{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}
