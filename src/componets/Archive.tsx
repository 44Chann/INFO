import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import { db } from "../firebaseapp";
import { getArchives } from "../getArchives";
import { getDocs, collection } from "firebase/firestore";
export const Archives = () => {
    const [loading, setloading] = useState<Boolean>(false);
    const [date, setDate] = useState<String>('undefined');
    const [sources, setSources] = useState<Array<String>>([])
    const [source, setSource] = useState<String>("undefined")
    const [dates, setDates] = useState<Array<String>>([])
    const [headlines, setHeadlines] = useState<Array<Object>>([]);

    // filter by sources 
    const filterBySource = () => {
        console.log(source)

    }


    useEffect(() => {
        (async () => {
            // get all the dates those are available
            setloading(true);
            let articlesDates: any = []
            const querySnapshot = await getDocs(collection(db, "articles"));
            querySnapshot.forEach((doc) => {
                let sourceStr = doc.data().source
                let newsDate = doc.data().publishedAt;
                articlesDates.push(newsDate)
                sources.push(sourceStr)
            });
            // remove the duplicat
            let uniqDates: any = [...new Set(articlesDates)]
            let uniqSources: any = [...new Set(sources)]
            setDates(uniqDates)
            setSources(uniqSources)

            filterBySource()

            const news = await getArchives(date)
            setHeadlines(news)
            setloading(false)
        })();
    }, [date]);

    return (
        <>
            <div className="my-9 w-[90%] m-auto max-w-4xl">
                <div className="flex justify-between">
                    <h1>
                        {
                            date !== "undefined" ?
                                <span>
                                    Archive for {date}
                                </span>
                                :
                                < span >
                                    Archives from {dates ? dates[dates.length - 1] : ""} to {dates ? dates[0] : ""}
                                </span>
                        }
                    </h1>

                    <div className="mb-10">
                        <select className="px-4 py-1 outline-none rounded-full" name="Date" id="date" onChange={
                            (e) => {
                                setDate(e.target.value)
                                console.log(e.target.value)
                            }
                        } >
                            <option label="date">{"undefined"}</option>
                            {
                                dates.map((date: any) => {
                                    return <option value={date}>{date}</option>
                                })
                            }
                        </select>

                    </div>
                    <div className="mb-10">
                        <select className="px-4 py-1 outline-none rounded-full" name="source" id="source" onChange={
                            (e) => {
                                setSource(e.target.value)
                                console.log(e.target.value)
                            }
                        } >
                            <option label="source">{"undefined"}</option>
                            {
                                sources.map((source: any) => {
                                    return <option value={source}>{source}</option>
                                })
                            }
                        </select>

                    </div>
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
