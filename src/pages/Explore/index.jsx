import templatePost from "../../assets/img/template-post.jpg"
import templateStory from "../../assets/img/template-story.png"

import "./_explore.scss"
import { Post } from "../../components/Post"

import { posts } from "../../utils/data"

export const Explore = () => {

  const { block_1, block_2, block_3, block_4 } = posts

  return (
    <div className="container">
      <main className="main">
        <section className="explore">
          <div className="explore__container">
            <div className="explore__content">
              <div className="explore__wrapper">
                <div className="explore__box">
                  {block_1.map(({ post_id, cover, type, url, isStory }, index) => (
                    <Post key={index} id={post_id} cover={cover} url={url} type={type} isStory={isStory} />
                  ))}
                </div>
                <div className="explore__box-r">
                  {block_2.map(({ post_id, cover, type, url, isStory }, index) => (
                    <Post key={index} id={post_id} cover={cover} url={url} type={type} isStory={isStory} />
                  ))}
                </div>
                <div className="explore__box">
                  {block_3.map(({ post_id, cover, type, url, isStory }, index) => (
                    <Post key={index} id={post_id} cover={cover} url={url} type={type} isStory={isStory} />
                  ))}
                </div>
                <div className="explore__box-r">
                  {block_4.map(({ post_id, cover, type, url, isStory }, index) => (
                    <Post key={index} id={post_id} cover={cover} url={url} type={type} isStory={isStory} />
                  ))}
                </div>
                <div className="explore__box-r">
                    <Post key={1} id={1} cover={templatePost} url={templatePost} type="image" />
                    <Post key={2} id={1} cover={templatePost} url={templatePost} type="video" />
                    <Post key={3} id={1} cover={templatePost} url={templatePost} type="image" />
                    <Post key={4} id={1} cover={templatePost} url={templatePost} type="video" />
                    <Post key={5} id={1} cover={templateStory} url={templateStory} type="image" isStory />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
