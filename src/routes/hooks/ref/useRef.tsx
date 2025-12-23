import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/ref/useRef')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/ref/useRef"!</div>
}
