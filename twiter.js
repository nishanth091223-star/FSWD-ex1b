let posts = [];

function addPost() {
    let text = document.getElementById("postText").value;

    if (text.trim() == "") {
        alert("Write something!");
        return;
    }

    posts.unshift({
        text: text,
        likes: 0
    });

    document.getElementById("postText").value = "";
    displayPosts(posts);
}
