// dummy data

// const posts=[

//     {
//         title:'this is title1',
//         body:'this is body1'
//     },
//     {
//         title:'this is title2',
//         body:'this is body2'
//     },
//     {
//         title:'this is title3',
//         body:'this is body3'
//     },
//     {
//         title:'this is title4',
//         body:'this is body4'
//     },
//     {
//         title:'this is title5',
//         body:'this is body5'
//     },
//     {
//         title:'this is title6',
//         body:'this is body6'
//     },
//     {
//         title:'this is title7',
//         body:'this is body7'
//     },
//     {
//         title:'this is title8',
//         body:'this is body8'
//     }
// ]

// Its for a single Data



// const fetchData = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         return data;
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// const postsElement = document.querySelector('.posts');

// const loadData = async () => {
//     try {
//         const post = await fetchData('https://fakestoreapi.com/products/1');

//         const postElement = document.createElement('div');
//         postElement.classList.add('post');
//         postElement.innerHTML = `<h2>${post.title}</h2>
//             <p class="post-para">${post.id}</p>`;
//         postsElement.appendChild(postElement);
//     } catch (error) {
//         console.error('Error loading data:', error.message);
//     }
// };

// loadData();


const fatchData=async(config)=>{
    try{
    const res= await fetch(config);
    const data=await res.json();
    return data;
   
    }
    catch(err){
        
        throw Error(err);

}
}

const postsElement=document.querySelector('.posts');

const loadData= async()=>{
    const posts= await fatchData('https://fakestoreapi.com/products')
    posts.map(post=>{
        const postElement=document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML=`<h2>${post.title}</h2>
        <p class="post-para">${post.id}</p>`;
        postsElement.appendChild(postElement);
    });

};

loadData() 





