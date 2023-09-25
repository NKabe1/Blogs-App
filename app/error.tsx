'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-rose-800 mb-4">Something went wrong!</h2>
      <button className="rounded-lg bg-teal-50 p-2 text-gray-800 font-semibold" onClick={() => reset()}>Try again</button>
    </div>
  )
}