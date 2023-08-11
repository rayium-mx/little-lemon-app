const ConfirmDialog = ({ message, onConfirm }) => {
  return (
    <div
      data-testid="confirm-dialog"
      className="fixed inset-0"
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
      onClick={() => onConfirm(false)}>
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col items-center justify-center absolute bg-light rounded-md p-8"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}>
        <p className="text-primary-1 text-lg">{message}</p>
        <div className="flex items-center justify-around mt-12 w-full flex-col-reverse sm:flex-row">
          <button onClick={() => onConfirm(false)} className="button text-primary-1 mt-4 sm:mt-0">
            No, go back
          </button>
          <button onClick={() => onConfirm(true)} className="button primary-2">
            Yes, continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
