import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationComponent = ({currentPage, totalPages, setPage}) => (
  <Pagination  defaultActivePage={currentPage} totalPages={totalPages} onClick={(activePage) => {
    setPage(activePage.target.innerText)
    console.log(activePage.target.innerText)
}}/>
)

export default PaginationComponent
