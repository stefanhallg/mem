const fs = require('fs');  

const path = require('path');
const dir='C:\\git\\Personal\\mem\\SystemData\\';

const setupRoutes = router => {
    router.get('/files', (req, res) => {
        const result = getAllFiles(dir+'Config')
         return res.json(result); 

    });
    router.get('/files/:env', (req, res) => {
        fs.readdir(dir+'Config\\'+req.params.env, function (error, result) {
            if (error) {
                return res.json('bæe');
            } else {
                return res.json(result);
            }
          });
    });
    router.get('/files/:env/:id', (req, res) => {
        const filename=req.params.id;
        const env=req.params.env;
        fs.readFile(dir+'Config\\'+env+'\\'+filename, function (error, result) {
            if (error) {
                return res.json('bæe');
            } else {
                return res.json(JSON.parse(result.toString()));
            }
          });
    });
    router.get('/master', (req, res) => {
      
        fs.readFile(dir+'Definition\\Keys\\Master.Keys.json', 'utf8', function (error, result) {
            if (error) {
                return res.json(JSON.parse(error));
            } else {
                return res.json(JSON.parse(result));
            }
          });
    });

 
};

const getAllFiles = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    const confdir=dir+'Config\\';
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push((path.join(dirPath, "/", file)).replace(confdir, ''))
      }
    })
  
    return arrayOfFiles
  }



module.exports = setupRoutes;
