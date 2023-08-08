const menu=[
    {
     home:"Home"
    },
    {
     home:"Foods"
    },
    {
     home:"Desserts"
    },
    {
     home:"Drinks"
    },
    {
     home:"Snacks"
    },
    {
     home:"Others"
    },
 ];
 var text='';
 for(let i in menu){
    text+=`<li> <a herf="#">${menu[i]['home']}</a></li>`;
 }
 document.getElementsByClassName('container')[0].innerHTML=`<ul>${text}</ul>`;

 const logo=[
    {
        id:'/image/Logotype Boutique Fashion Neon.png'
    }
 ];
 var pageLogo='';
 for(let i in logo){
    pageLogo=`<img src="${logo[i]['id']}" alt="">`;
 }
 document.getElementsByClassName('logo')[0].innerHTML=pageLogo;
 document.getElementsByClassName('footer-logo')[0].innerHTML=pageLogo;

 const pageName=[
    {
        pagename : 'MY Food Shop'
    }
 ];
 for(let i in pageName){
     var pagename=pageName[i]['pagename'];
 }
 document.getElementById('page-name').innerHTML=pagename;

 const Socail=[
    {
        'follow':'https://cdn-icons-png.flaticon.com/128/145/145802.png',
        'url':'https://www.facebook.com/hok.panha.79?mibextid=LQQJ4d'
    },
    {
        'follow':'https://cdn-icons-png.flaticon.com/128/5968/5968804.png',
        'url':'https://www.facebook.com/hok.panha.79?mibextid=LQQJ4d'
    },
    {
        'follow':'https://cdn-icons-png.flaticon.com/128/4782/4782345.png',
        'url':'https://www.facebook.com/hok.panha.79?mibextid=LQQJ4d'
    },
 ];
 var link='';
 for(let i in Socail){
    link+=`<a herf="${Socail[i]['url']}" target="_blank">
            <img src="${Socail[i]['follow']}" alt="">
            </a>`;
 }
 document.getElementsByClassName('label')[0].innerHTML=link;
 
 const search=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    const list=[...new Set(data.map((item)=>{
        return item;
    }))];
    console.log(list)
    document.getElementById('search').addEventListener('keyup',(e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item)=>{
            return item.title.toLowerCase().includes(searchData);
        });
        displayItem(filterData);
    });
    const displayItem=((item)=>{
        document.getElementById('root').innerHTML = item.map((item)=>{
            const {image,title,price,button}=item;
            return (`
            <div class="card">
            <div class="thumbnail">
                <img src="${image}" alt="">
            </div>
            <div class="detail">
                <h3>${title}</h3>
                <h4>${price}</h4>
                <button type="submit" >${button}</button>
            </div>
        </div>
            `);
        }).join('');
    })
 }
 search();