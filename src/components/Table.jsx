export default function Table(){
    return(
        <>

<div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div className="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.5 5H10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Created On</div></th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Payer</div> </th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_19_4423)">
    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_19_4423">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>Status</div></th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Email</div></th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Payer Phone</div></th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Services</div></th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"><div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.5 5H10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Scheduled</div></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Regional Paradigm Technician</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">john@site.com</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">New York No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Jim Green</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Forward Response Developer</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">jim@site.com</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">27</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">London No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Joe Black</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Product Directives Officer</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">joe@site.com</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Sidney No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
    )
}