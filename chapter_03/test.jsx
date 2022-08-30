function Test(props) {
  return (
    <table>
      <tr>
        <td>책 이름: </td>
        <td>{props.td}</td>
      </tr>
      <tr>
        <td>저자: </td>
        <td>{props.td}</td>
      </tr>
      <tr>
        <td>가격: </td>
        <td>{props.td}</td>
      </tr>
      <tr>
        <td>구입일: </td>
        <td>{props.td}</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input type="submit"></input>
        </td>
      </tr>
    </table>
  );
}

export default Test;
