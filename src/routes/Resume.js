import React, { Component } from 'react'

import resumePDF from '../doc/resume.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Container } from 'react-bootstrap';
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
        const container = document.getElementById('pdf-container');
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
                    <div id="pdf-container" className="justify-content-center">
                        <div className="pdf-wrapper m-auto">
                            <Document file={resumePDF} onLoadSuccess={this.onPDFLoad} renderMode="svg">
                                <Page pageNumber={this.state.curr_page} scale={2.0} />
                            </Document>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
