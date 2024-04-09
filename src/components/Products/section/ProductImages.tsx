import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductImages() {
    return (
        <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
            <div className="relative h-96">
                <img
                    src=''
                    alt=''
                    className="h-full w-full max-w-full transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
            <div className="relative flex border-t border-palette-lighter">
                <button
                    aria-label="left-scroll"
                    className="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"

                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1 text-palette-primary" />
                </button>
                <div
                    style={{ scrollBehavior: "smooth" }}
                    className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
                >
                    {
                        //map img
                    }
                </div>
                <button
                    aria-label="right-scroll"
                    className="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1 text-palette-primary" />
                </button>
            </div>
        </div>
    )
}
