import React from 'react';
import { Link } from 'react-router-dom';

class DocumentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: localStorage.getItem("documents") ? JSON.parse(localStorage.getItem("documents")) : [],
            deleteId: "",
            editId: ""
        }
    }

    uploadDocument = (event) => {
        
        event.preventDefault();
        const documents = this.state.documents;
        documents.push({
            "id": Number(new Date()),
            "label": event.target.elements.label.value,
            "filename": event.target.elements.file.value
        });
        this.setState({ documents: documents });
        localStorage.setItem("documents", JSON.stringify(documents));
    }

    editDocument = (event) => {
        
        event.preventDefault();
        const documents = this.state.documents;
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

        for (let i in documents) {
            if (documents[i].id === this.state.deleteId) {
                documents.splice(i, 1);
            }
        }
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
                    {
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
            <div className="modal fade" id="uploadDoc" tabIndex="-1" aria-labelledby="uploadDocLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="uploadDocLabel">Upload a File</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.uploadDocument}>
                                Label:  <input className='form-control' type="text" name="label" placeholder='Enter label' required />
                                File: <input className='form-control' type="file" name="file" placeholder='Upload file' required />
                                <input className='btn btn-primary' type="submit" value="Upload" data-bs-dismiss="modal" /> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="editDoc" tabIndex="-1" aria-labelledby="editDocLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editDocLabel">Upload a File</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.editDocument}>
                                Label:  <input className='form-control' type="text" name="label" placeholder='Enter label' />
                                File: <input className='form-control' type="file" name="file" placeholder='Upload file' />
                                <input className='btn btn-primary' type="submit" value="Update" data-bs-dismiss="modal" /> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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