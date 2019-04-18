const posts = [
    {title:'first title', body:'This is post one'},
    {title:'second title', body:'This is post two'}
];

//define the method
function getPosts(){
    //setTimeout methods takes callback in a argument
    setTimeout(()=> {
        let output = '';
        posts.forEach((post,index) => { //forEach method takes callback as a argument
          output+= `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

//here in a 2nd argument we will take a callback function
//after successfull push then the function will call
function createPost(post, callback){
 setTimeout(() => {
     posts.push(post);
     callback(); //here "getPosts" method will replaced when we pass "getPosts" in 2nd argument of "createPost" method
 },2000 );
} //it will wait 2 sec then shows all of the posts


// call the method
// getPosts();


//here we are pushing the one new post to the array
//but it won't print in the browser 
//because "creatPost" takes 2000 sec to push but "getPost takes 1000 sec to load the data from the server"
//"createPost takes longer than "getPost"
createPost({ title:'Thrd title', body:'This post three'},getPosts);
//By the time we are running "createPost" the DOM is already printed so we can't do anything in that point
//HERE the role of CALLBACK comes

// when we use callback then it will wait till the all the data get loaded from the server then only the data will printed
