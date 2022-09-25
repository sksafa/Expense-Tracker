import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { paginateTo } from '../../features/FilterSlice';

export default function Pagination() {
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state.Filter);

    const paginationHandler = (page) => {
        dispatch(paginateTo(page));
    };
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end" style={{display:'flex', justifyContent:'space-evenly'}}>
                <div
                    className={` ${page.page === 1
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-600"
                        } px-4 py-1 rounded-full cursor-pointer`}
                    onClick={() => paginationHandler(1)}
                >
                    1
                </div>
                <div
                    className={` ${page.page === 2
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-600"
                        } px-4 py-1 rounded-full cursor-pointer`}
                    onClick={() => paginationHandler(2)}
                >
                    2
                </div>
                <div
                    className={` ${page.page === 3
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-600"
                        } px-4 py-1 rounded-full cursor-pointer`}
                    onClick={() => paginationHandler(3)}
                >
                    3
                </div>
                <div
                    className={` ${page.page === 4
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-600"
                        } px-4 py-1 rounded-full cursor-pointer`}
                    onClick={() => paginationHandler(4)}
                >
                    4
                </div>
            </div>
        </section>
    )
}
