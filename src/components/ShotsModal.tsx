


function ShotsModal({
  drink,
  onClose,
}: {
  drink: any
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-2">
          🍸 {drink.name}
        </h2>

        <p className="text-gray-600">
          {drink.description}
        </p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default ShotsModal
