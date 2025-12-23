import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/performance/useTransition')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/performance/useTransition"!</div>
}
