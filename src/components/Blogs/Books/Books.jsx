import React, { useState, useRef } from 'react';
import {
  Modal,
  Button,
  Label,
  TextInput,
  Textarea,
  FileInput,
} from 'flowbite-react';

// Sample book data (now using absolute paths for PDFs in the public directory)
const books = [
  {
    title: 'Typescript Javascript Development Guide Compress',
    author: 'Nicholas Brown',
    pdfUrl:
      '/assets/books/pdf/typescript-javascript-development-guide_compress.pdf', // Absolute path
  },
  {
    title: 'Mastering React',
    author: 'Jane Smith',
    pdfUrl: '/assets/books/pdf/mastering-react.pdf', // Absolute path
  },
  {
    title: 'Web Development with Tailwind CSS',
    author: 'Alex Johnson',
    pdfUrl: '/assets/books/pdf/web-development-tailwind.pdf', // Absolute path
  },
];

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({ title: '', author: '', pdfUrl: '' });
  const iframeRef = useRef(null); // Ref to access the iframe element

  // Function to open a book (view PDF)
  const openBook = (pdfUrl) => {
    setSelectedBook(pdfUrl);
  };

  // Function to go back to the book list
  const goBack = () => {
    setSelectedBook(null); // Reset selectedBook to null to show the book list
  };

  // Function to toggle fullscreen mode for the iframe
  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (!document.fullscreenElement) {
        iframeRef.current
          .requestFullscreen()
          .catch((err) =>
            console.error('Error attempting to enable fullscreen mode:', err)
          );
      } else {
        document
          .exitFullscreen()
          .catch((err) =>
            console.error('Error attempting to exit fullscreen mode:', err)
          );
      }
    }
  };

  // Handle modal input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle PDF file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Assuming you have a function to handle the file upload and get the URL
      // Here you would handle the upload and update `newBook.pdfUrl` accordingly
      // For demonstration, we'll just use a placeholder URL
      setNewBook({ ...newBook, pdfUrl: URL.createObjectURL(file) });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new book to the list
    books.push(newBook);
    // Reset form and close modal
    setNewBook({ title: '', author: '', pdfUrl: '' });
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold text-center">Books</h1>
        {!selectedBook ? (
          <Button onClick={() => setModalOpen(true)} color="blue">
            Add New Book
          </Button>
        ) : (
          <div>
            <Button onClick={goBack} color="blue" className="mr-4">
              Back to Book List
            </Button>
            <Button onClick={toggleFullscreen} color="green">
              Toggle Fullscreen
            </Button>
          </div>
        )}
      </div>
      {!selectedBook ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              onClick={() => openBook(book.pdfUrl)}
              className="cursor-pointer border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-4">Author: {book.author}</p>
              <p className="text-blue-500">Click to view PDF</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <iframe
              ref={iframeRef}
              src={selectedBook}
              width="80%"
              height="500px"
              title="PDF Viewer"
              className="border rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Add New Book Modal */}
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Add New Book</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <TextInput
                id="title"
                name="title"
                type="text"
                value={newBook.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <TextInput
                id="author"
                name="author"
                type="text"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="pdfUrl">PDF</Label>
              <FileInput
                id="pdfUrl"
                name="pdfUrl"
                accept="application/pdf"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" color="blue">
                Add Book
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Books;
