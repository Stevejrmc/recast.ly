var searchYouTube = ({max, query, key}, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&type=video&videoEmbeddable=true&key=${key}`,
    data => {
      callback(data.items);
    })
    .fail(err => {
      console.log('Error: ', err);
    });
};

export default searchYouTube;
