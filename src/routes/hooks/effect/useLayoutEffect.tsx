import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/effect/useLayoutEffect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/effect/useLayoutEffect"!</div>
}
