import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    console.log(photo.body.firstName, user.body.lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}