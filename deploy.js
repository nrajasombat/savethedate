const ghpages = require('gh-pages');
const fs = require('fs');

const distFolder = 'build';
const copyFilesToDist = files => {
  files.forEach(f => {
    console.log('coping file', f, ' over to dist');
    const contents = fs.readFileSync(f).toString();
    fs.writeFileSync(`${distFolder}/${f}`, contents);
  });
};

copyFilesToDist(['CNAME']);

const options = {};
ghpages.publish(distFolder, options, err => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Publish was a success');
  }
});
