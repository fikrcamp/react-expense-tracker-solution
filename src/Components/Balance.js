function Balance({ total }) {
  return (
    <div className="balance space">
      <div>Total:</div>
      <div>
        <b>💲{total}</b>
      </div>
    </div>
  );
}

export default Balance;
