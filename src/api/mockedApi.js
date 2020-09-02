import { mockedResponse } from './mockedResponse';

export const mockedApiCall = () => new Promise((response) => {
  setTimeout(() => { response(mockedResponse); }, 500);
});
