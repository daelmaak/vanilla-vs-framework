export function Pager({ listModel }) {
  return (
    <div className="pager">
      <button onClick={() => listModel.loadPrevious()}>Prev</button>
      <button onClick={() => listModel.loadNext()}>Next</button>
    </div>
  );
}
