/* eslint-disable */
const ftp = require("basic-ftp")
const fs  = require('fs')

let client = new ftp.Client()


let local_base_dir = './dist'
var base_dir       = '/'

client.ftp.verbose = false

upload();

async function upload()
{
  
  await client.access({
    host: '188.241.222.47',
    user: 'main@pottertech.ro',
    password: '2v4$Ejg-{f~Q',
    secure: false
  });

  let index_file     = base_dir + '/index.html'
  let css_dir        = base_dir + '/css'
  let fonts_dir      = base_dir + '/fonts'
  let img_dir        = base_dir + '/img'
  let js_dir         = base_dir + '/js'

  await client.remove(index_file).catch( (err) => { console.log("EROARE LA STERGERE index_file"); }); 
  await client.removeDir(css_dir  , true).catch( (err) => { console.log("EROARE LA STERGERE static"); }); 
  await client.removeDir(fonts_dir, true).catch( (err) => { console.log("EROARE LA STERGERE fonts"); }); 
  await client.removeDir(img_dir  , true).catch( (err) => { console.log("EROARE LA STERGERE img"); }); 
  await client.removeDir(js_dir   , true).catch( (err) => { console.log("EROARE LA STERGERE js"); }); 

  var folders_tree   = get_folders_tree(local_base_dir, base_dir)
  var files_tree     = get_files_tree  (local_base_dir, base_dir)

  for( i = 0; i < folders_tree.length; i++ ){
    var folder_name = folders_tree[i];
    await client.ensureDir(folder_name.DestinationFolder, true)
              .then( (x)=> { console.log('am creat folder ' + folder_name.DestinationFolder); } )
              .catch((err) => { console.log( folder_name ); console.log(err); });
  }

  for( i = 0; i < files_tree.length; i++ ){
    var file_name = files_tree[i];
    await client.upload( fs.createReadStream(file_name.FullName), file_name.DestinationFolder)
              .then( (x)=> { console.log('Am facut upload de ' + file_name.DestinationFolder); } )
              .catch((err) => { console.log( file_name.DestinationFolder ); console.log(err); });
  }
  console.log("Upload de zeu realizat!");
  client.close()
  process.exit();
}



function get_folders_tree (folder, destFolder) {
    var ret = []
    fs.readdirSync(folder).forEach(file => {
      var full_file_name = folder + "/" + file
      var is_directory   = fs.lstatSync(full_file_name).isDirectory()
  
      var f = new FileInfo();
      f.FullName    = full_file_name;
      f.FileName    = file;
      f.LocalFolder = folder;
  
      if( is_directory )
      {
          f.FileType          = "folder"
          f.DestinationFolder = destFolder + "/" + f.FileName
          ret.push(f)
  
          var response = get_folders_tree( full_file_name, destFolder + "/" + file )
          response.forEach(new_file => {
              ret.push( new_file )
          });
      }
      
    })
    return ret
}

function get_files_tree (folder, destFolder) {
  var ret = []
  fs.readdirSync(folder).forEach(file => {
    var full_file_name = folder + "/" + file
    var is_directory   = fs.lstatSync(full_file_name).isDirectory()

    var f = new FileInfo();
    f.FullName    = full_file_name;
    f.FileName    = file;
    f.LocalFolder = folder;


    if( is_directory )
    {
        var response = get_files_tree( full_file_name, destFolder + "/" + file )
        response.forEach(new_file => {
            ret.push( new_file )
        });
    }
    else
    {
        f.DestinationFolder = destFolder + "/" + file
        f.FileType = "file"
        ret.push(f)
    }
    
  })
  return ret
}

function FileInfo() {
    this.FileType           = "file";
    this.LocalFolder        = "";
    this.FullName           = "";
    this.FileName           = "";
    this.DestinationFolder  = "";
}