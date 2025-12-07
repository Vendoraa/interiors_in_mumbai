import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
  <>
          <nav aria-label="Blog Pagination">
              <ul className="pagination text-center m-b30">
                  <li className="page-item"><Link className="page-link prev"><i className="la la-angle-left"></i></Link></li>
                  <li className="page-item"><Link className="page-link active">1</Link></li>
                  <li className="page-item"><Link className="page-link">2</Link></li>
                  <li className="page-item"><Link className="page-link">3</Link></li>
                  <li className="page-item"><Link className="page-link next"><i className="la la-angle-right"></i></Link></li>
              </ul>
          </nav>
  </>)
}

export default Pagination