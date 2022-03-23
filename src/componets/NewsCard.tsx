interface Props {
    img: string
    title: string
    content: string
    url: string
    name: string
    date: string
    author: string
}

export const NewsCard = ({ img, title, content, url, name, date, author }: Props) => {
    return (
        <>
            <div className='w-full lg:flex mb-5  shadow-lg hover:shadow-xl   border '>
                <div className='flex items-center  justify-center lg:w-[40%] w-[100%] flex-shrink-0 '>
                    <img src={img} className="object-cover" alt="" />
                </div>
                <div className='py-3 px-3'>
                    <p className="text-xl pb-3">{title}</p>
                    <p className="mb-4">{content}</p>
                    <p className="mb-4">written by {author} on  {date}</p>
                    <a className="border-black  border  mt-4 py-1 px-2 rounded-full" target="_blank" href={url}>Read on {name}</a>

                </div>
            </div>
        </>
    )
}