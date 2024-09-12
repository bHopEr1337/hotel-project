import styles from "./GaleryBlock.module.css"
import { useState } from "react"


function GaleryBlock({currentPage, postPerPage, setCurrentPage, arr}) {

    
    let endIndex = currentPage * postPerPage;
    let startIndex = endIndex - postPerPage;

    const paginationNambers = [];
    // const arrayText = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17","a18","z1", "z2"]

    const arrayText = arr

    for (let i = 1; i <= Math.ceil(arrayText.length/postPerPage); i++) {
        paginationNambers.push(i);
    }

    return(
        <div className={styles.root}>
            <div className={styles.block}>
                <div className={styles.imageBlock}>
                    {arrayText.slice(startIndex, endIndex).map((item, index) => {
                        return <img key={index} src={item} alt="" />
                    })}
                </div>
                <div className={styles.pagination}>
                    <div>
                        {paginationNambers.map((page, index) => {
                            return (
                                <button
                                key={index}
                                onClick={() => setCurrentPage(page)}
                                className={`${styles.paginationButton} ${
                                  page === currentPage ? styles.active : ""
                                }`}
                              >
                                {page}
                              </button>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GaleryBlock
