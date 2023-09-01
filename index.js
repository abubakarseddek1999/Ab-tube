const handleBlog = () => {
    window.open("blog.html")
}

const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const category = data.data;
    console.log(category);
    const categoryContainer = document.getElementById('category-container')
    category.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="handleItem(${category.category_id})" class="tab btn">${category.category}</button>
        
        `
        categoryContainer.appendChild(div);

    });

}
handleCategory();

const handleItem = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    console.log(data);
    const itemCard = document.getElementById('item-card')
    itemCard.innerHTML = '';
    data.data?.forEach(item => {
        console.log(item)
        const img = document.getElementById('img');
       
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mt-4  bg-base-100 shadow-xl">
            <figure ><img class=" w-full h-56" src=${item.thumbnail
            } alt="Shoes" />
            </figure>
            <div class="card-body  ">
            
            <h2 class="card-title">
               <div class=" rounded-md">
                <img class="w-14 h-14 rounded-full" src="${item.authors[0]?.profile_picture}" alt=""/>
               </div>
                <span class=" text-xl font-bold">${item.title} </span>
            </h2>
            <h2 class="card-title">
               <div class="text-xl ">
                    <p>${item.authors[0].profile_name
                    }</p>
               </div>
              
               <div>${item.authors[0].verified ? '<img src="tick.png"/>' :  " "}
               </div>
                
            </h2>
            
            
            <p>${item.others?.views
            } views</p>
            
            </div>
        </div>
        `
        itemCard.appendChild(div);

    });

}
handleItem(1000);