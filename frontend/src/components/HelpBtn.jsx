import React, { useState } from 'react'
import { CircleQuestionMark, X } from 'lucide-react'

const HelpBtn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Help Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 text-white rounded-full w-10 h-10 p-2 shadow-lg hover:scale-110 transition"
        >
          <CircleQuestionMark />
        </button>
      </div>

      {/* Help Modal */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">

          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-red-600 rounded-t-xl">
            <h3 className="font-semibold text-white">Quick Help</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 text-sm text-gray-700 space-y-3">

            <div>
              <p className="font-semibold">🔍 Search Tips</p>
              <ul className="list-disc ml-4">
                <li>Search by ingredient (paneer, chicken)</li>
                <li>Search by dish name (pasta, biryani)</li>
                <li>One keyword works best</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">📖 Using Recipes</p>
              <ul className="list-disc ml-4">
                <li>Scroll for ingredients & steps</li>
                <li>Watch video tutorial if available</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">ℹ️ Info</p>
              <p>Recipes powered by TheMealDB</p>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default HelpBtn
