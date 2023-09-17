import React, {useState} from 'react';
import s from './Blog.module.scss'
import bigTools from '@/assets/blog/big-tools.png'
import bigPlanning from '@/assets/blog/big-planning.png'
import bigDiary from '@/assets/blog/big-diary.png'
import iconAdmin from '@/assets/blog/admin-users.svg'
import iconCalendar from '@/assets/blog/calender.svg'
import iconTag from '@/assets/blog/tag.svg'
import smallNotebook from '@/assets/blog/small-notebook.png'
import smallReadMore from '@/assets/blog/small-read-more.png'
import smallTools from '@/assets/blog/small-tools.png'
import smallFlower from '@/assets/blog/small-notebook-flower.png'
import smallCoffee from '@/assets/blog/small-notebook-coffee.png'
import Input from '@/components/input/Input';
import PaginationItems from '@/layouts/pagination/Pagination';

export type CaptionsType = {
    id: number
    icon: string
    title: string
}

export type BlogArticlesType = {
    id: number
    src: string
    captions: CaptionsType[]
    title: string
    text: string
}

const categories = [
    {name: 'Crafts', amount: 2},
    {name: 'Design', amount: 8},
    {name: 'Handmade', amount: 7},
    {name: 'Interior', amount: 1},
    {name: 'Wood', amount: 6},
]

const blogArticles = [
    {
        id: 1,
        src: bigTools,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Going all-in with millennial design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 2,
        src: bigPlanning,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[2].name}
        ],
        title: 'Exploring new ways of decorating',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 3,
        src: bigDiary,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Handmade pieces that took time to make',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 1,
        src: bigTools,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Going all-in with millennial design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 2,
        src: bigPlanning,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[2].name}
        ],
        title: 'Exploring new ways of decorating',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 3,
        src: bigDiary,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Handmade pieces that took time to make',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 1,
        src: bigTools,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Going all-in with millennial design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 2,
        src: bigPlanning,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[2].name}
        ],
        title: 'Exploring new ways of decorating',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        id: 3,
        src: bigDiary,
        captions: [
            {id: 1, icon: iconAdmin, title: 'Admin'},
            {id: 2, icon: iconCalendar, title: '14 Oct 2022'},
            {id: 3, icon: iconTag, title: categories[4].name}
        ],
        title: 'Handmade pieces that took time to make',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Mus mauris vitae ultricies leo integer malesuada nunc. ' +
            'In nulla posuere sollicitudin aliquam ultrices. ' +
            'Morbi blandit cursus risus at ultrices mi tempus imperdiet. ' +
            'Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. ' +
            'Nibh cras pulvinar mattis nunc sed blandit libero. ' +
            'Pellentesque elit ullamcorper dignissim cras tincidunt. ' +
            'Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
]

const recentPosts = [
    {src: smallNotebook, title: 'Going all-in with millennial design', date: '03 Aug 2022'},
    {src: smallReadMore, title: 'Exploring new ways of decorating', date: '03 Aug 2022'},
    {src: smallTools, title: 'Handmade pieces that took time to make', date: '03 Aug 2022'},
    {src: smallFlower, title: 'Modern home in Milan', date: '03 Aug 2022'},
    {src: smallCoffee, title: 'Colorful office redesign', date: '03 Aug 2022'},
]

const BlogArticlesList = ({articles}: {articles: BlogArticlesType[]}) => {
    return <>
        {articles.map(article => {
            return (
                <article className={s.posts__item} key={article.id}>
                    <img src={article.src} className={s.posts__img} width='817px' height='500px' alt='article-picture'/>
                    <div className={s.posts__description}>
                        {article.captions.map(caption => {
                            return (
                                <div className={s.posts__caption} key={caption.id}>
                                    <img src={caption.icon} width='20px' height='20px' alt='caption_icon'/>
                                    <span>{caption.title}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className={s.posts__title}>{article.title}</p>
                    <p className={s.posts__text}>{article.text}</p>
                    <a href='#' className={s.posts__link}>Read more</a>
                </article>
            )
        })}
    </>
}

const categoriesList = categories.map(category => {
    return (
        <div key={category.name} className={s.categories__item}>
            <div >{category.name}</div>
            <div>{category.amount}</div>
        </div>
    )
})

const resentPostsList = recentPosts.map(post => {
    return (
        <div key={post.title} className={s.resentPosts__item}>
            <img src={post.src} className={s.resentPosts__img} width='80px' height='80px' alt='resent-post-picture'/>
            <div>
                <p className={s.resentPosts__name}>{post.title}</p>
                <p className={s.resentPosts__date}>{post.date}</p>
            </div>
        </div>
    )
})

const Blog = ({itemsPerPage}: { itemsPerPage: number }) => {

    //pagination
    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(blogArticles.length / itemsPerPage);
    const currentPageData = blogArticles.slice(offset, offset + itemsPerPage);
    const handlePageClick = (e: { selected: React.SetStateAction<number>; }) => {
        setCurrentPage(e.selected);
    };

    return (
        <section className={s.blog}>
                <div className={s.posts__wrapper}>
                    {<BlogArticlesList articles={currentPageData}/>}
                    <div className={s.posts__pagination}>
                        <PaginationItems
                            pageCount={pageCount}
                            handlePageClick={handlePageClick}
                        />
                    </div>
                </div>
                <aside>
                    <div className={s.blog__input}>
                        <Input icon={true} textLabel={''} width='311px' height='58px'/>
                    </div>
                    <div className={s.categories}>
                        <p className={s.categories__title}>Categories</p>
                        <div className={s.categories__list}>
                            {categoriesList}
                        </div>
                    </div>
                    <div className={s.resentPosts}>
                        <p className={s.resentPosts__title}>Resent Posts</p>
                        <div className={s.resentPosts__list}>
                            {resentPostsList}
                        </div>
                    </div>

                </aside>
        </section>
    );
};

export default Blog;