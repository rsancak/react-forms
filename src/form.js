import { useState } from 'react';
import Select from 'react-select';

function Form() {
    const [inputs, setInputs] = useState({});
    const options = [
        { value: 'istanbul', label: 'İstanbul' },
        { value: 'ankara', label: 'Ankara' },
        { value: 'izmir', label: 'İzmir' },
    ];
    const handleChange = (event) => {
        const name = event.target?.name ? event.target.name : "select";
        const value =  event.target?.value == "on" ? event.target.checked : event.value || event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('dataID').innerHTML = JSON.stringify(inputs);
    }
    return (
        <div className="row justify-content-center m-0">
            <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2 mt-4">
                        <label htmlFor="text">Text</label>
                        <input onChange={handleChange} type="text" className="form-control" id="text" name="text" placeholder="Text" />
                    </div>
                    <hr />
                    <div className="form-group  mb-2">
                        <label htmlFor="textarea">Textarea</label>
                        <textarea onChange={handleChange} className="form-control" id="textarea" name="textarea" placeholder="Textarea" />
                    </div>
                    <hr />
                    <div className="form-group  mb-2">
                        <label>Select (with react-select)</label>
                        <Select
                            id="select"
                            name="select"
                            onChange={handleChange}
                            placeholder="Select"
                            options={options}
                        />
                    </div>
                    <hr />
                    <div className="form-group mb-2">
                        <label htmlFor="file" className="form-label">File</label>
                        <input onChange={handleChange} className="form-control" type="file" id="file" name="file" />
                    </div>
                    <hr />
                    <div className="form-group mb-2">
                        <div className="form-check">
                            <input onChange={handleChange} className="form-check-input" type="radio" name="radio" id="radio1" value="OK" defaultChecked />
                            <label className="form-check-label" htmlFor="radio1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={handleChange} className="form-check-input" type="radio" name="radio" id="radio2" value="NO" />
                            <label className="form-check-label" htmlFor="radio2">
                                Second radio
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className="form-group mb-2">
                        <div className="form-check">
                            <input onChange={handleChange} className="form-check-input" type="checkbox" id="checkbox" name="checkbox" defaultChecked />
                            <label className="form-check-label" htmlFor="checkbox">Check</label>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign in</button>
                </form>
            </div>
            <div className='col-md-4 p-4'>
                <h2>DATA</h2>
                <pre id='dataID' style={{whiteSpace:'pre-wrap', wordBreak: 'break-word'}}>
                </pre>
            </div>
        </div>
    )
}

export default Form;