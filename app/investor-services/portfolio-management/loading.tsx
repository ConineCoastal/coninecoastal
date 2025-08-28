import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-48" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </section>

      {/* Services Overview Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <Skeleton className="h-12 w-12 mb-4" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-12 w-1/2 mx-auto mb-16" />
          <div className="grid lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white border rounded-lg p-6">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-6" />
                <div className="space-y-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-4 flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
