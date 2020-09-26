import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import resumePDF from '../doc/resume.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button, Container } from 'react-bootstrap';
import '../sass/routes/resume.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 

export default class Resume extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pdf_width: 100,
            num_pages: 0,
            curr_page: 1,
        }

        this.onPDFLoad = this.onPDFLoad.bind(this);
    }

    componentDidMount() {
        const container = document.getElementById('pdf-wrapper');
        this.setState({pdf_width: container.clientWidth});
        window.addEventListener('resize', e => {
            this.setState({pdf_width: container.clientWidth});
        });
    }

    onPDFLoad(pdf) {
        this.setState({num_pages: pdf._pdfInfo.num_pages});
    }

    render() {
        return (
            <div>
               <Container>
                    <div id="pdf-container" className="mx-auto p-md-5 p-sm-2 p-xs-1 text-center">
                        <a href={resumePDF} download><Button className="my-3 mx-auto shadow-sm"><FontAwesomeIcon icon={faDownload} /> Download</Button></a>
                        <div id="pdf-wrapper" className="pdf-wrapper m-auto">
                            <Document file={resumePDF} onLoadSuccess={this.onPDFLoad} renderMode="svg">
                                <Page pageNumber={this.state.curr_page} width={this.state.pdf_width} />
                            </Document>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
