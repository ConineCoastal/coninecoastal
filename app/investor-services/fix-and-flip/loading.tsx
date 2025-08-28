import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="h-[70vh] bg-gray-200 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <Skeleton className="h-16 w-full max-w-4xl mx-auto" />
          <Skeleton className="h-8 w-full max-w-3xl mx-auto" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          <div className="flex justify-center gap-4 mt-8">
            <Skeleton className="h-12 w-48" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>

      {/* Services Overview Skeleton */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-20 mx-auto mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-6 w-32 mx-auto mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="text-center mb-12">
                <Skeleton className="h-10 w-80 mx-auto mb-4" />
                <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="bg-white p-6 rounded-lg border">
                    <Skeleton className="h-6 w-full mb-4" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
