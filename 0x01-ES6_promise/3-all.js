import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    console.log(`${photo.body.firstName} ${user.body.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
