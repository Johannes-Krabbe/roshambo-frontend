import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { request } from '../../helpers/context'
import React from "react";


const Game: NextPage = () => {
  const router = useRouter()
  const { gameID } = router.query
  const [playerID, setPlayerID] = React.useState("");
  const [isGame, setIsGame] = React.useState(true);
  

    request
      .post("/get-game", { gameID: gameID})
      .then((response) => {
        if (response.status === 200) {
            setIsGame(true)
            
            console.log(Object.keys(response.data))

            if(response.data.player1 === false){
                setPlayerID("1");
            }else if(response.data.player2 === false){
                setPlayerID("2");
            }
        }
      })
      .catch((e) => {
        setIsGame(false)
      });

      if(isGame === false){
          return <>this game does not exist</>
      }else {
        return(
            <>
                <div>you are player {playerID}</div>
            </>
        )
      }

}

export default Game