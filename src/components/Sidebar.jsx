import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      id="docs-sidebar"
      className="h-full hs-overlay font-sans [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden top-0 start-0 bottom-0 z-[60] w-64 bg-[#F8FAFC] border-e border-gray-200 pt-7 lg:flex flex-col pb-0 overflow-y-auto lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
    >
      <div className="px-6 flex items-center justify-between">
        <a
          className="flex text-xl font-semibold dark:text-white gap-2 items-center "
          href="#"
          aria-label="Brand"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M18.48 0H3.52001C1.57596 0 0 1.57596 0 3.52001V18.48C0 20.424 1.57596 22 3.52001 22H18.48C20.424 22 22 20.424 22 18.48V3.52001C22 1.57596 20.424 0 18.48 0Z"
              fill="#262626"
            />
            <path
              d="M17.7627 12.9381C18.8596 12.9381 19.7488 12.047 19.7488 10.9479C19.7488 9.84878 18.8596 8.95776 17.7627 8.95776C16.6658 8.95776 15.7766 9.84878 15.7766 10.9479C15.7766 12.047 16.6658 12.9381 17.7627 12.9381Z"
              fill="white"
            />
            <path
              d="M4.17823 12.9578C5.27512 12.9578 6.16433 12.0668 6.16433 10.9677C6.16433 9.86856 5.27512 8.97754 4.17823 8.97754C3.08134 8.97754 2.19214 9.86856 2.19214 10.9677C2.19214 12.0668 3.08134 12.9578 4.17823 12.9578Z"
              fill="white"
            />
            <path
              d="M6.12525 8.10188C7.22214 8.10188 8.11135 7.21086 8.11135 6.11173C8.11135 5.0126 7.22214 4.12158 6.12525 4.12158C5.02836 4.12158 4.13916 5.0126 4.13916 6.11173C4.13916 7.21086 5.02836 8.10188 6.12525 8.10188Z"
              fill="white"
            />
            <path
              d="M10.97 6.15157C12.0669 6.15157 12.9561 5.26055 12.9561 4.16142C12.9561 3.06229 12.0669 2.17126 10.97 2.17126C9.87309 2.17126 8.98389 3.06229 8.98389 4.16142C8.98389 5.26055 9.87309 6.15157 10.97 6.15157Z"
              fill="white"
            />
            <path
              d="M15.8165 8.10188C16.9134 8.10188 17.8026 7.21086 17.8026 6.11173C17.8026 5.0126 16.9134 4.12158 15.8165 4.12158C14.7196 4.12158 13.8304 5.0126 13.8304 6.11173C13.8304 7.21086 14.7196 8.10188 15.8165 8.10188Z"
              fill="white"
            />
            <path
              d="M15.8165 17.6546C16.9134 17.6546 17.8026 16.7636 17.8026 15.6645C17.8026 14.5653 16.9134 13.6743 15.8165 13.6743C14.7196 13.6743 13.8304 14.5653 13.8304 15.6645C13.8304 16.7636 14.7196 17.6546 15.8165 17.6546Z"
              fill="white"
            />
            <path
              d="M10.97 19.7244C12.0669 19.7244 12.9561 18.8334 12.9561 17.7343C12.9561 16.6352 12.0669 15.7441 10.97 15.7441C9.87309 15.7441 8.98389 16.6352 8.98389 17.7343C8.98389 18.8334 9.87309 19.7244 10.97 19.7244Z"
              fill="white"
            />
            <path
              d="M6.12525 17.6546C7.22214 17.6546 8.11135 16.7636 8.11135 15.6645C8.11135 14.5653 7.22214 13.6743 6.12525 13.6743C5.02836 13.6743 4.13916 14.5653 4.13916 15.6645C4.13916 16.7636 5.02836 17.6546 6.12525 17.6546Z"
              fill="white"
            />
          </svg>
          <h1>Front·Desk</h1>{" "}
        </a>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
            stroke="#64748B"
            stroke-width="0.666667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 2V14"
            stroke="#64748B"
            stroke-width="0.666667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="8" y="2" width="6" height="12" rx="1" fill="#64748B" />
        </svg>
      </div>
      <div className="p-2">
        <div className=" px-3 py-2 flex items-center justify-between mt-8 border-b-[#E2E8F0] shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)] rounded-md border-b border-solid bg-[#fff]">
          <a
            className="flex text-xl font-semibold dark:text-white gap-2 items-center "
            href="#"
            aria-label="Brand"
          >
            <p className="text-[#334155] text-xs  font-medium leading-5">
              Location Name
            </p>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.3334 7.33333L14 4.66667L11.3334 2"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 4.66663H6"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66667 14L2 11.3333L4.66667 8.66663"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11.3334H2"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="w-[193px] justify-center items-center ml-4 gap-1 px-3 py-1.5 rounded border border-slate-200 shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)] border-solid bg-[#f1f5f9]">
          <div className="flex gap-2">
            <h2 className="text-[#334155] font-bold">08:30 Am</h2>
            <p className="text-[#334155] text-sm font-medium">Tue 20 Jan</p>
          </div>

          <li className="flex items-center justify-between">
            <a
              className="flex gap-x-1 mt-1  bg-gray-100 text-[#334155] text-[10px]  font-medium rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.00004 12.4167C9.99158 12.4167 12.4167 9.99158 12.4167 7.00004C12.4167 4.0085 9.99158 1.58337 7.00004 1.58337C4.0085 1.58337 1.58337 4.0085 1.58337 7.00004C1.58337 9.99158 4.0085 12.4167 7.00004 12.4167Z"
                  stroke="#64748B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.58337 7H12.4167"
                  stroke="#64748B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.00004 1.58337C8.3549 3.06665 9.12487 4.99156 9.16671 7.00004C9.12487 9.00852 8.3549 10.9334 7.00004 12.4167C5.64518 10.9334 4.87522 9.00852 4.83337 7.00004C4.87522 4.99156 5.64518 3.06665 7.00004 1.58337Z"
                  stroke="#64748B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              UTC: +5 hours
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M4.5 6L8.5 10L12.5 6"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </div>
      </div>

      <nav
        className="hs-accordion-group pt-6 px-2 w-full flex-1 flex-col flex-wrap text-[#334155] text-xs font-medium"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5  ">
          <li className="hs-accordion" id="users-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full  flex items-center gap-2 py-2 px-2.5  rounded-lg hover:bg-white hover:shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Orders
            </button>
          </li>

          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full  flex items-center gap-2 py-2 px-2.5  rounded-lg hover:bg-white hover:shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_12388)">
                  <path
                    d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_12388">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Subscriptions
            </button>
          </li>

          <li>
            <a
              className="flex items-center gap-2 py-2 px-2.5  rounded-lg hover:bg-white hover:shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)]"
              href="#"
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              Calendar
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 py-2 px-2.5 rounded-lg  hover:bg-white hover:shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Waitlist
            </a>
          </li>
        </ul>
      </nav>
      <div className="mx-2">
        <div className="p-2 flex items-center justify-between  border-b-[#E2E8F0] shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)] rounded-md border-b border-solid bg-[#fff]">
          <Link
            className="flex items-center gap-2 py-2 px-2  text-[#334155] text-xs font-medium rounded-lg "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.66667 2H2V8H6.66667V2Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 2H9.33337V5.33333H14V2Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8H9.33337V14H14V8Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Dashboard
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 2H14V6"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 9.33333L14 2"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="mt-2 px-2 py-2.5 flex items-center justify-between shadow-[0px_1px_1px_0px_rgba(100,116,139,0.05)] rounded-md bg-white">
          <Link className="flex items-center gap-2 py-2 px-2.5" href="#">
            <img src="./profile.svg" alt="profile" />
            <div>
              <h3 className="text-[#0F172A] text-xs font-medium">Admin Name</h3>
              <p className="text-[#64748B] text-xs ">adminname@mail.com</p>
            </div>
          </Link>
          <Link href="/fdf">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className=" px-3 py-2 flex items-center justify-between">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-2.5 rounded-lg "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_12438)">
                <path
                  d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
                  stroke="#475569"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.05994 5.99989C6.21667 5.55434 6.52604 5.17863 6.93324 4.93931C7.34044 4.7 7.8192 4.61252 8.28472 4.69237C8.75024 4.77222 9.17248 5.01424 9.47665 5.37558C9.78083 5.73691 9.94731 6.19424 9.9466 6.66656C9.9466 7.99989 7.9466 8.66656 7.9466 8.66656"
                  stroke="#475569"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 11.3333H8.00667"
                  stroke="#475569"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_12438">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3 className="text-[#334155] text-xs">Help Center</h3>
              <p className="text-[#64748B] text-[10px] leading-4">
                @2024 Omnify.Inc.{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
