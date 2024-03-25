import MemoBoard from 'Components/MemoBoard'
import MemoElem from 'Components/MemoElem'
import MemoInput from 'Components/MemoInput'
import { useMemoStore } from 'Store/MemoList'

const Zustand2 = () => {
  const { memoList } = useMemoStore()

  return (
    <>
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            )
          })
        ) : (
          <span>메모를 입력해주세요</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  )
}

export default Zustand2
