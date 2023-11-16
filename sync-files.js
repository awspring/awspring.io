const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadFile(url, filename = path.basename(url)) {
    https.get(url, (res) => {
        const fileStream = fs.createWriteStream(filename);
        res.pipe(fileStream);

        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Download finished')
        });
    })
}

downloadFile("https://raw.githubusercontent.com/awspring/spring-cloud-aws/main/README.md", "what-is-spring-cloud-aws.md");
downloadFile("https://raw.githubusercontent.com/awspring/spring-cloud-aws/main/CONTRIBUTING.md", "contributing.md");
