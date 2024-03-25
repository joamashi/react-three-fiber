import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  증가() {
    set((state) => ({ count: state.count + 1 }))
  },
}))

const Card = () => {
  const { count } = useStore()
  return (
    <>
      <p>카드 {count}</p>
    </>
  )
}

const Zustand = () => {
  const { count, 증가 } = useStore()
  return (
    <>
      <p>Zustand</p>
      <div>{count}</div>
      <button
        onClick={() => {
          // useStore.setState({ count: count + 1 })
          증가()
        }}>
        +
      </button>
      <Card />
    </>
  )
}
export default Zustand
