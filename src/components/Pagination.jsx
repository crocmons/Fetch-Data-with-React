import React from "react";


const Pagination = ({
    totalPosts,
    rowsPerPage,
    setPage,
    page,
}) => {
    let pages = [];

    for (let i = 0; i <= Math.ceil(totalPosts / rowsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((p, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setPage(p)}
                        className={p === page ? "active" : ""}>
                        {p}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;