import { db } from "./firebaseapp";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getArchives = async (date:any='undefined') => {
    let pubDate = `${date}`
    console.log(pubDate)
    let articles = <Array<Object>>[];
    const articlesRef = collection(db, 'articles')
    const q = query(articlesRef, where("publishedAt", '==', pubDate));
    if (pubDate !== 'undefined') {
        const querySnapshot = await getDocs(q)
        console.log('runing')
        querySnapshot.forEach((doc) => {
            articles.push({ id: doc.id, ...doc.data() })
        })

    } else {
        const querySnapshot = await getDocs(collection(db, "articles"));
        querySnapshot.forEach((doc) => {
            articles.push({ id: doc.id, ...doc.data() })
        });
    }

    return articles

}