import axios from 'axios';

const enum CommentsUrl {
  COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments',
}

export const getComments = async () => {
  try {
    const response = await axios.get(CommentsUrl.COMMENTS_URL, {
      params: { limit: 100 },
    });
    const data = await response.data;
    return console.log('Success ', data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
};
