import PropTypes from 'prop-types'

import heartfill from '../assets/heart-fill.svg'
import heartoutline from '../assets/heart-outline.svg'
import { useState } from 'react'

export const Post = ({ date, title, content }) => {
    const [liked, setLiked] = useState(false)

    const renderIcon = () => (liked ? heartfill : heartoutline)

    return (
        content && (
            <article className="border-2 border-brand rounded-lg py-8 px-6 sm:p-10">
                <div>
                    <div className="flex justify-between">
                        <span className="text-brand text-xs sm:text-sm lg:text-base font-inter">
                            {date}
                        </span>
                        <img
                            className="cursor-pointer"
                            onClick={() => setLiked(!liked)}
                            src={renderIcon()}
                            alt="icon heart fill like article"
                        />
                    </div>

                    <div>
                        <h2 className="text-white text-xl lg:text-2xl font-space mt-5">{title}</h2>
                        <p className="text-gray20 text-sm sm:text-base lg:text-xl font-inter mt-4">
                            {content}
                        </p>
                    </div>
                </div>
            </article>
        )
    )
}

Post.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
