import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const FeedbackComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number>(0);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setFeedback('');
    setRating(0);
  };

  const handleSubmit = () => {
    console.log(`Feedback recebido: ${feedback}`);
    console.log(`Rating recebido: ${rating}`);
    closeDialog();
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Dar Feedback
      </button>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white p-4 rounded-lg w-96 mx-auto shadow-lg">
                <Dialog.Title className="text-lg font-semibold">
                  Deixe seu Feedback
                </Dialog.Title>

                {/* Rating Component */}
                <div className="flex justify-center items-center space-x-2 mt-4">
                  <span>Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer ${
                        star <= rating ? 'text-yellow-500' : 'text-gray-300'
                      } text-2xl`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 border rounded-lg mt-2 p-2"
                  placeholder="Digite seu feedback aqui..."
                />

                <div className="flex justify-end mt-4">
                  <button
                    onClick={closeDialog}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 mr-2 rounded"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FeedbackComponent;
