import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { useDispatch, useSelector } from "react-redux"
import { getPage } from "../redux/actions/movieAction"

const Page = () => {

    const [pageCount, setPageCount] = useState(0)

    const dispatch = useDispatch()

    const pages = useSelector((state) => state.pageCount)

    useEffect(() => {
        setPageCount(pages)
    }, [])

    const handlePageClick = (data) => {
        dispatch(getPage(data.selected + 1))
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination justify-content-center p-3"}
            activeClassName="active" />
    )
}

export default Page