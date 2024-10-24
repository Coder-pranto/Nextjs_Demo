// import axios from 'axios';

// export const getAllPosts = async () => {
//   const { data } = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=10'
//   );
//   return data;
// };





export const getAllPosts = async()=>{
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an error fetching posts");
    }

    return result.json();
}




/* In Next.js 13/14, the revalidate option is used with the fetch API to enable ISR (Incremental Static Regeneration). However, when using axios, you don't have built-in support for revalidate directly like in fetch. Since axios doesn’t handle caching or ISR natively, you need to implement a workaround when using it. */

