import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

  const results = [
    {
      status: userResult.status,
      value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason,
    },
    {
      status: photoResult.status,
      value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason,
    },
  ];

  return results;
}

export default handleProfileSignup;
