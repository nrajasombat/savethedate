const ghpages = require('gh-pages');

const options = {};
ghpages.publish('build', options, err => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Publish was a success');
  }
});
