import { Post } from './Post'
import { posts } from '../utils/api'

export const Posts = () => {
    return (
        <main className="bg-dark20 sm:px-8">
            <div className="md:max-w-[1216px] md:mx-auto py-10 sm:py-14 md:py-20 flex flex-col gap-10 mx-6">
                {posts.map(post => (
                    <Post
                        key={post.id}
                        date={post.date}
                        title={post.title}
                        content={post.content}
                        liked={post.liked}
                    />
                ))}
            </div>
        </main>
    )
}
