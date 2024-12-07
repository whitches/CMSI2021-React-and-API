export default function Generate({ action }) {
  function randomItem() {
    let itemNumber = Math.floor(Math.random() * 2469) + 1;
    action(itemNumber);
  }
  return <button onClick={randomItem}> Get Random Item</button>;
}
