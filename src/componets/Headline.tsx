import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import { db } from "../firebaseapp";
import { getArchives } from "../getArchives";
export const Headline = () => {
    const [loading, setloading] = useState(false);
    const [headlines, setHeadlines] = useState<Array<Object>>([]);

    useEffect(() => {
        let today = new Date()
        let strDate: string = today.toISOString();
        strDate = strDate.slice(0, 10);

        (async () => {
            setloading(true);
            const news = await getArchives(strDate)
            console.log(news.length)
            setHeadlines(news)
            setloading(false);
        })();
    }, []);

    return (
        <>
            <div className="my-9 w-[90%] m-auto max-w-4xl">
                <div className="flex justify-between">
                    <h1>top headlines</h1>
                </div>
                {loading ? (
                    loading && <div>loading</div>
                ) : headlines ? (
                    headlines.map((ar: any) => {
                        return (
                            <NewsCard
                                author={ar.author ? ar.author : ""}
                                img={ar.imgUrl ? ar.imgUrl : "https://unsplash.it/400/250"}
                                title={ar.title}
                                content={ar.content ? ar.content = ar.content.slice(0, 200) : ""}
                                url={ar.url}
                                name={ar.source}
                                date={ar.publishedAt}
                            />
                        );
                    })
                ) : (
                    <>{loading && <div>loading</div>}</>
                )}
            </div>
        </>
    );
};
