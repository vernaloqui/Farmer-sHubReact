import { useState } from "react";
import {storage, db} from '../config/Config'

export const AddProducts = () =>{

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [pic, setPic] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const profilePicHandler =(e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setPic(selectedFile);
            setError('');
        }
        else{
            setPic(null);
            setError('Please select a valid image type png, jpg or jpeg');
        }
    }

    const addUser = (e) =>{
        e.preventDefault();
        // console.log(name, username, pic);
        
        const uploadTask = storage.ref(`img/${pic.name}`).put(pic);
        uploadTask.on( 'state_changed', snapshot =>{
            const progress =(snapshot.bytesTransferred/snapshot.totalBytes) *100;
            console.log(progress);
        }, err =>{
            setError(err.message)
        }, () =>{
            storage.ref('img').child(pic.name).getDownloadURL().then(url => {
                db.collection('User').add({
                    Name: name,
                    Username: username,
                    Pic: url
                }).then(()=>{
                    setName('');
                    setUsername('');
                    setPic('');
                    setError('');
                    document.getElementById('pic').value = '';
                }).catch(err => setError(err.message));
                console.log(url);
            })
            
        }
    )}

    return(
        <div className="container">
            <form autoComplete="off" className="form-group" onSubmit={addUser}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"  required onChange={(e)=> setUsername(e.target.value)} value={username}/>
            </div>
            <div>
                <label htmlFor="pic" className="form-label">Photo</label>
                <input type="file" className="form-control" id="pic" onChange={profilePicHandler}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )

}