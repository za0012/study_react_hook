import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/effect/useEffect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/effect/useEffect"!</div>
}
