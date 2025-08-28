import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Skeleton className="h-16 w-3/4 mb-6 bg-slate-700" />
            <Skeleton className="h-8 w-full mb-6 bg-slate-700" />
            <Skeleton className="h-6 w-2/3 mb-8 bg-slate-700" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-14 w-64 bg-slate-700" />
              <Skeleton className="h-14 w-64 bg-slate-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <Skeleton className="h-12 w-12 mb-4" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-start">
                <Skeleton className="w-16 h-16 rounded-full mr-6 flex-shrink-0" />
                <div className="flex-grow">
                  <Skeleton className="h-6 w-1/3 mb-2" />
                  <Skeleton className="h-5 w-2/3 mb-3" />
                  <div className="grid md:grid-cols-2 gap-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
