import React from 'react';
import { Link } from 'react-router-dom';

class DocumentList extends React.Component {
    constructor() {
        super();
        this.state = {
            // fetching documents from localstorage
            documents: localStorage.getItem("documents") ? JSON.parse(localStorage.getItem("documents")) : [], 
            deleteId: "",
            editId: ""
        }
    }

    uploadDocument = (event) => {
        
        event.preventDefault();
        const documents = this.state.documents;
        // adding new document to the list 
        documents.push({
            "id": Number(new Date()),
            "label": event.target.elements.label.value,
            "filename": event.target.elements.file.value
        });
        // replacing new list of documents to localstorage & state
        this.setState({ documents: documents });
        localStorage.setItem("documents", JSON.stringify(documents));
    }

    editDocument = (event) => {
        
        event.preventDefault();
        const documents = this.state.documents;
        // iteratively updating selected document
        for (let i in documents) {
            if (documents[i].id === Number(this.state.editId)) {
                if (event.target.elements.filename && event.target.elements.filename.value !== "") {
                    documents[i].filename = event.target.elements.filename.value;
                }
                if (event.target.elements.label && event.target.elements.label.value !== "") {
                    documents[i].label = event.target.elements.label.value;
                }
            }
        }
        // replacing updated list of documents to localstorage & state
        localStorage.setItem("documents", JSON.stringify(documents));
        this.setState({ documents: documents });
    }

    setDeleteId = (id) => {
        this.setState({ deleteId: id });
    }

    setEditId = (id) => {
        this.setState({ editId: id });
    }

    deleteDocument = () => {
        const documents = JSON.parse(localStorage.getItem("documents"));
        // iteratively delete selected document
        for (let i in documents) {
            if (documents[i].id === this.state.deleteId) {
                documents.splice(i, 1);
            }
        }
        // replace the spliced document list to localstorage & state
        localStorage.setItem("documents", JSON.stringify(documents));
        this.setState({ documents: documents });
    }

    render() {
        return (<>
            <h2>My Uploads</h2>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>File Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {   // using map to display list of documents with their unique index
                        this.state.documents.map((item, index) => (
                            <tr key={index}>
                                <td>{item.label}</td>
                                <td>{item.filename}</td>
                                <td><Link data-bs-toggle="modal" data-bs-target="#editDoc" onClick={() => this.setEditId(item.id)}>Edit</Link> | <Link data-bs-toggle="modal" data-bs-target="#deleteDoc" onClick={() => this.setDeleteId(item.id)}>Delete</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#uploadDoc" >Upload Document</button>
            {/* pop up widow to upload new document  */}
            <div className="modal fade" id="uploadDoc" tabIndex="-1" aria-labelledby="uploadDocLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="uploadDocLabel">Upload a File</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* form to filup upload details  */}
                            <form onSubmit={this.uploadDocument}>
                                Label:  <input className='form-control' type="text" name="label" placeholder='Enter label' required />
                                File: <input className='form-control' type="file" name="file" placeholder='Upload file' required />
                                <input className='btn btn-primary' type="submit" value="Upload" data-bs-dismiss="modal" /> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* pop up window to edit existing document  */}
            <div className="modal fade" id="editDoc" tabIndex="-1" aria-labelledby="editDocLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editDocLabel">Upload a File</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* form to edit uploaded doc details  */}
                            <form onSubmit={this.editDocument}>
                                Label:  <input className='form-control' type="text" name="label" placeholder='Enter label' />
                                File: <input className='form-control' type="file" name="file" placeholder='Upload file' />
                                <input className='btn btn-primary' type="submit" value="Update" data-bs-dismiss="modal" /> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* pop up window to confirm delete  */}
            <div className="modal fade" id="deleteDoc" tabIndex="-1" aria-labelledby="deleteDocLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteDocLabel">Confirm Document Deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.deleteDocument} data-bs-dismiss="modal">OK</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default DocumentList;