
export interface IPagininProps {
    currentPage: number, 
    totalPages: number, 
    pageLimit: number,
    onPageChange?: (page: number)=> void;
}

const Pagining= ({
    currentPage, 
    totalPages,
    pageLimit,
    onPageChange=(page:number)=>{}
}: IPagininProps) => {
    const pages= [];

    for(let i=1; i<= totalPages; i++) {
        if(i===currentPage) {
            console.log(currentPage);
            pages.push(
                <li>
                <a href="#" key={i}  className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{i}</a>
              </li>
            )
        } else {
            pages.push(
                <li>
                <a href="#"  key={i} onClick={()=> onPageChange(i)} className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{i}</a>
              </li>
            )
        }
    }

    return (
        <nav aria-label="Page navigation example " >
            <ul className="inline-flex -space-x-px ">
            <li>
                <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                     </li>
               {
                    pages
               } 
               <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagining; 