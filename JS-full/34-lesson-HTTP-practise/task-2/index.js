const successRequest = Promise.resolve({ name: 'Tom' });
successRequest
  .then(function onSuccess1(data) {
    // (1)
    throw new Error('Error with data');
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message);
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(function onError2(error) {
    throw new Error('Server error');
    // (2)
  })
  .then(function onSuccess2(data) {
    console.log('onSuccess2', data);
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message);
  });
