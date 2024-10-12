import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Heading } from '@radix-ui/themes';
import { useState } from 'react';

const NewPostDialog = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API call)

    // Close the dialog after submission
    // setIsOpen(false);
  };

  return (
    <Dialog open={'true'}>
      {/* <DialogTrigger className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        New Post
      </DialogTrigger> */}
      <DialogContent className="border-blue-500 p-8 rounded-lg shadow-2xl max-w-lg mx-auto mt-20 space-y-6">
        <Heading>Create New Post</Heading>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-lg w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              className="mt-1 border border-gray-300 rounded-lg w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Submit
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostDialog;


