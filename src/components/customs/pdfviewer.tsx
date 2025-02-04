'use client'
import React, { useEffect } from "react";
import { Document, Page,pdfjs } from "react-pdf";
import { useState } from "react";
import { Button } from "../ui/button";


const PdfViewer = ({ file }:any) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }:any) {
      setNumPages(numPages);
    }
    useEffect(() => {
      if (typeof window !== 'undefined') {
          pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
        }

  }, [pageNumber])
  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <Button
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
        >
          Prev
        </Button>
        <span>Page {pageNumber} of {numPages}</span>
        <button
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
