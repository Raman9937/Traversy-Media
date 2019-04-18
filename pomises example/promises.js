const posts = [
    {title:'first title', body:'This is post one'},
    {title:'second title', body:'This is post two'}
];

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post,index) => { 
          output+= `<li> ${post.body} </li>`;
        });
        document.body.innerHTML = output;
    },1000);
}


function createPost(post){
 //defining the promise and it takes a callback function
 //and it takes 2 argument
  return new Promise((resolve,reject)=> {
    setTimeout(() => {
        posts.push(post);

        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject('oops! something went wrong');
        }
    },2000 );

  });
 
}

//lets call createPost method
//"createPost" method returns a promise so we can use then()
// createPost({title:'Third title',body:'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err) ); // if any error occures in createPost method then here we catch the error and then console it..


//Async  /Await

async function async(){
   await createPost({title:'Fourth Title',body:'This is post four'}); 
   //here we are waiting "createPost" to be done before "getPosts" calling
    getPosts();
}

async();