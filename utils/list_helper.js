const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let likes = 0;
  if (blogs.length > 0) {
    for (let blog of blogs) {
      likes += blog.likes;
    }
  }

  return likes;
};

const favoriteBlog = (blogs) => {
  let maxLikes = -1;
  let favoriteBlogIndex = 0;
  if (blogs.length === 0) {
    return;
  }
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > maxLikes) {
      maxLikes = blogs[i].likes;
      favoriteBlogIndex = i;
    }
  }

  return blogs[favoriteBlogIndex];
};

module.exports = { dummy, totalLikes, favoriteBlog };
