import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/performance/useDeferredValue')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/performance/useDeferredValue"!</div>
}
