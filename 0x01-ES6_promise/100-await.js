import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Handle any errors here, but for this case, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
