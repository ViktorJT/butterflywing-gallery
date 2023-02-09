import dynamic from 'next/dynamic'
import Butterflies from '@/components/canvas/models/Butterflies'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/'), { ssr: false })

// Dom components go here
export default function DOM(props) {
  return (
    <div>
    </div>
  )
}

function Canvas(props) {
  return (
    <Butterflies />
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
DOM.canvas = (props) => <Canvas />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
