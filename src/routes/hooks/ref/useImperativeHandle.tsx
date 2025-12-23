import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/ref/useImperativeHandle')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/ref/useImperativeHandle"!</div>
}
