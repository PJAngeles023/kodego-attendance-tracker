import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import ChessBoard from 'chessboardjsx';
import { Chess } from 'chess.js'

function Dashboard() {
  const [fen, setFen] = useState("start")

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, [])

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare
    })
    if (move === null) {
      alert("Invalid Move");
      return;
    }
    setFen(game.current.fen())
  }

  return (
    <div>
      <h6 className="mt-4 text-center">WELCOME TO</h6>
          <h4 className="text-center">KodeGo Chess</h4>
        <div className="p-4 border rounded mt-4 mb-2">
          <h4>User1</h4>
          <Link to="/" className="float-end">← Logout</Link>
          <div className="app d-flex justify-content-center">
            <ChessBoard position={fen}
              onDrop={onDrop} />
          </div>
          <h4>User2</h4>
        </div>
        
    </div>
  );
}

export default Dashboard;
